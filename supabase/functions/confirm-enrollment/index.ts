import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY')!
const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE = Deno.env.get('SERVICE_ROLE_KEY')!
const FROM_EMAIL       = 'onboarding@resend.dev' // zmień po weryfikacji domeny

function generatePassword(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  let pwd = ''
  for (let i = 0; i < 10; i++) pwd += chars[Math.floor(Math.random() * chars.length)]
  return pwd + '1!'
}

async function sendEmail(to: string, subject: string, html: string) {
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  })
}

serve(async (req) => {
  try {
    const { enrollment_id } = await req.json()
    if (!enrollment_id) return new Response('Missing enrollment_id', { status: 400 })

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE)

    // Pobierz dane zgłoszenia
    const { data: enrollment, error: enrErr } = await supabase
      .from('kpp_enrollments')
      .select('*, kpp_courses(title, date_start, date_end, location)')
      .eq('id', enrollment_id)
      .single()

    if (enrErr || !enrollment) throw new Error('Enrollment not found')

    // Sprawdź czy konto już istnieje
    const { data: existing } = await supabase
      .from('kpp_participants')
      .select('id')
      .eq('email', enrollment.email)
      .single()

    if (existing) {
      return new Response(JSON.stringify({ ok: true, message: 'Account already exists' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Wygeneruj hasło
    const password = generatePassword()

    // Utwórz konto w Supabase Auth
    const { data: authData, error: authErr } = await supabase.auth.admin.createUser({
      email: enrollment.email,
      password,
      email_confirm: true,
    })

    if (authErr || !authData.user) throw new Error(`Auth error: ${authErr?.message}`)

    // Dodaj uczestnika z dostępem
    await supabase.from('kpp_participants').insert({
      id: authData.user.id,
      enrollment_id,
      first_name: enrollment.first_name,
      last_name: enrollment.last_name,
      email: enrollment.email,
      course_id: enrollment.course_id,
      access_granted: true,
    })

    // Zaktualizuj status zgłoszenia
    await supabase.from('kpp_enrollments').update({ status: 'confirmed' }).eq('id', enrollment_id)

    const course = enrollment.kpp_courses
    const fmtDate = (d: string) => new Date(d).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })

    // Wyślij e-mail z danymi logowania
    await sendEmail(
      enrollment.email,
      '🎓 Twoje dane dostępu do platformy KPP | LIFE Ratownictwo',
      `<div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0F2B46;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:22px">Dostęp do platformy aktywowany!</h1>
        </div>
        <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb">
          <p style="color:#374151;font-size:16px">Cześć <strong>${enrollment.first_name}</strong>! 👋</p>
          <p style="color:#374151;font-size:15px">Twoja płatność została potwierdzona. Oto Twoje dane logowania do platformy:</p>

          <div style="background:#0F2B46;border-radius:12px;padding:24px;margin:24px 0;text-align:center">
            <p style="color:white;font-size:13px;margin:0 0 8px;opacity:0.7">Adres logowania</p>
            <p style="color:#DA251D;font-size:16px;font-weight:700;margin:0 0 20px">https://life-ratownictwo.pl/kpp/panel</p>
            <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
              <div style="background:white/10;border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px 20px">
                <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0 0 4px">Login (e-mail)</p>
                <p style="color:white;font-size:15px;font-weight:700;margin:0">${enrollment.email}</p>
              </div>
              <div style="background:rgba(218,37,29,0.2);border:1px solid rgba(218,37,29,0.4);border-radius:8px;padding:12px 20px">
                <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0 0 4px">Hasło</p>
                <p style="color:white;font-size:18px;font-weight:900;margin:0;letter-spacing:2px">${password}</p>
              </div>
            </div>
          </div>

          ${course ? `
          <div style="background:white;border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin-bottom:24px">
            <p style="font-weight:700;color:#0F2B46;margin:0 0 8px">Twój kurs:</p>
            <p style="color:#374151;font-size:14px;margin:0">${course.title}</p>
            <p style="color:#6b7280;font-size:13px;margin:4px 0 0">${fmtDate(course.date_start)} – ${fmtDate(course.date_end)} · ${course.location}</p>
          </div>` : ''}

          <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:12px;padding:16px;margin-bottom:24px">
            <p style="color:#92400E;font-size:13px;margin:0"><strong>⚠️ Ważne:</strong> Zmień hasło po pierwszym logowaniu. Zachowaj te dane w bezpiecznym miejscu.</p>
          </div>

          <a href="https://life-ratownictwo.pl/kpp/panel" style="display:block;background:#DA251D;color:white;padding:14px 24px;border-radius:99px;text-decoration:none;font-weight:700;font-size:15px;text-align:center;margin-bottom:24px">
            Zaloguj się do platformy →
          </a>

          <p style="color:#9CA3AF;font-size:12px;margin:0">LIFE Ratownictwo Medyczne i Pielęgniarstwo · ul. Rudzka 14, Racibórz · <a href="tel:602622840" style="color:#DA251D">+48 602 622 840</a></p>
        </div>
      </div>`
    )

    return new Response(JSON.stringify({ ok: true, password }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    })
  }
})
