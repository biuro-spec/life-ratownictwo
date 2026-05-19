import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const ADMIN_EMAIL    = 'biuro@life-ratownictwo.pl'
const FROM_EMAIL     = 'onboarding@resend.dev' // zmień na własną domenę po weryfikacji

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  })
  return res.json()
}

serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record  // dane nowego wiersza z kpp_enrollments

    const { first_name, last_name, email, phone, pesel, organization, notes, course_id } = record

    // ── Email do admina ──────────────────────────────────────────────
    await sendEmail(
      ADMIN_EMAIL,
      `🎓 Nowe zgłoszenie KPP – ${first_name} ${last_name}`,
      `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#DA251D;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:22px">Nowe zgłoszenie na kurs KPP</h1>
        </div>
        <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb">
          <table style="width:100%;border-collapse:collapse">
            ${[
              ['Imię i nazwisko', `${first_name} ${last_name}`],
              ['E-mail', email],
              ['Telefon', phone],
              ['PESEL', pesel || '—'],
              ['Organizacja', organization || '—'],
              ['Uwagi', notes || '—'],
            ].map(([k, v]) => `
              <tr>
                <td style="padding:10px 0;color:#6b7280;font-size:14px;width:160px">${k}</td>
                <td style="padding:10px 0;color:#111827;font-size:14px;font-weight:600">${v}</td>
              </tr>
            `).join('')}
          </table>
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e7eb">
            <a href="https://life-ratownictwo.pl/kpp/admin"
               style="background:#DA251D;color:white;padding:12px 24px;border-radius:99px;text-decoration:none;font-weight:700;font-size:14px">
              Otwórz panel admina →
            </a>
          </div>
        </div>
      </div>
      `
    )

    // ── Email do uczestnika ──────────────────────────────────────────
    await sendEmail(
      email,
      'Potwierdzenie zgłoszenia – Kurs KPP | LIFE Ratownictwo',
      `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0F2B46;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:22px">Twoje zgłoszenie zostało przyjęte!</h1>
        </div>
        <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb">
          <p style="color:#374151;font-size:16px">Cześć <strong>${first_name}</strong>! 👋</p>
          <p style="color:#374151;font-size:15px;line-height:1.6">
            Otrzymaliśmy Twoje zgłoszenie na <strong>Kurs KPP – Kwalifikowana Pierwsza Pomoc</strong>.
            Skontaktujemy się z Tobą w ciągu 24 godzin z informacją o płatności.
          </p>

          <div style="background:white;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:24px 0">
            <p style="margin:0 0 12px;font-weight:700;color:#0F2B46">Co dalej?</p>
            <ol style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:2">
              <li>Czekaj na e-mail z danymi do przelewu</li>
              <li>Po opłaceniu kursu otrzymasz <strong>login i hasło</strong> do platformy</li>
              <li>Zaloguj się i zacznij przerabiać materiały online</li>
              <li>Przyjdź na zajęcia praktyczne w wyznaczonym terminie</li>
            </ol>
          </div>

          <div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:12px;padding:16px;margin-bottom:24px">
            <p style="margin:0;color:#991B1B;font-size:14px">
              <strong>Pytania?</strong> Zadzwoń: <a href="tel:602622840" style="color:#DA251D">+48 602 622 840</a>
              lub napisz: <a href="mailto:biuro@life-ratownictwo.pl" style="color:#DA251D">biuro@life-ratownictwo.pl</a>
            </p>
          </div>

          <p style="color:#9CA3AF;font-size:12px;margin:0">
            LIFE Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o.<br>
            ul. Rudzka 14, Racibórz
          </p>
        </div>
      </div>
      `
    )

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
