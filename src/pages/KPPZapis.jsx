import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import {
  User, Mail, Phone, Building2, FileText, Calendar,
  CheckCircle2, ArrowLeft, ArrowRight, AlertCircle, Loader2
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

const STEPS = ['Dane osobowe', 'Szczegóły', 'Potwierdzenie'];

function ProgressBar({ step }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEPS.map((label, i) => (
        <div key={i} className="flex items-center flex-1 last:flex-none">
          <div className={`flex flex-col items-center gap-1.5 ${i <= step ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              i < step ? 'bg-primary-red text-white' :
              i === step ? 'bg-primary-red text-white shadow-lg shadow-primary-red/30' :
              'bg-[#e5eaf0] text-[#4B5563]'
            }`}>
              {i < step ? <CheckCircle2 size={18} /> : i + 1}
            </div>
            <span className="text-xs font-medium text-[#4B5563] hidden sm:block">{label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 transition-all duration-500 ${i < step ? 'bg-primary-red' : 'bg-[#e5eaf0]'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function InputField({ label, name, type = 'text', value, onChange, required, placeholder, icon: Icon }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-blue mb-2">{label}{required && <span className="text-primary-red ml-1">*</span>}</label>
      <div className="relative">
        {Icon && <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full bg-white border border-[#D1D5DB] rounded-2xl py-3.5 text-sm text-navy-blue placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-primary-red/30 focus:border-primary-red transition-colors ${Icon ? 'pl-11 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  );
}

export default function KPPZapis() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('kurs');

  const [step, setStep] = useState(0);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '',
    pesel: '', organization: '', notes: '',
    consent_data: false, consent_terms: false,
  });

  useSEO({
    title: 'Zapis na kurs KPP | LIFE Ratownictwo',
    description: 'Zapisz się na kurs Kwalifikowanej Pierwszej Pomocy w LIFE Ratownictwo Racibórz.',
  });

  useEffect(() => {
    if (!courseId) return;
    supabase.from('kpp_courses').select('*').eq('id', courseId).single()
      .then(({ data }) => setCourse(data));
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const { error: err } = await supabase.from('kpp_enrollments').insert({
        course_id: courseId || null,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        pesel: form.pesel || null,
        organization: form.organization || null,
        notes: form.notes || null,
        status: 'pending',
      });
      if (err) throw err;
      setSubmitted(true);
    } catch (e) {
      setError('Wystąpił błąd. Spróbuj ponownie lub skontaktuj się z nami telefonicznie.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-xl border border-[#e5eaf0]"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-navy-blue mb-3">Zgłoszenie przyjęte!</h2>
          <p className="text-[#4B5563] mb-2">Dziękujemy, <strong>{form.first_name}</strong>!</p>
          <p className="text-[#4B5563] text-sm mb-8">
            Twoje zgłoszenie zostało zapisane. Skontaktujemy się z Tobą na adres <strong>{form.email}</strong>
            {' '}w ciągu 24 godzin z informacją o płatności i dalszych krokach.
          </p>
          <div className="bg-[#f4f7f6] rounded-2xl p-5 text-sm text-[#4B5563] mb-8 text-left space-y-2">
            <p className="font-semibold text-navy-blue text-base mb-3">Co dalej?</p>
            <div className="flex items-start gap-2"><span className="text-primary-red font-bold shrink-0">1.</span><span>Otrzymasz e-mail z potwierdzeniem zgłoszenia</span></div>
            <div className="flex items-start gap-2"><span className="text-primary-red font-bold shrink-0">2.</span><span>Po opłaceniu kursu (przelew lub BLIK) dostaniesz <strong>login i hasło</strong> do platformy</span></div>
            <div className="flex items-start gap-2"><span className="text-primary-red font-bold shrink-0">3.</span><span>Zaloguj się i zacznij przerabiać materiały online jeszcze przed zajęciami</span></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/szkolenia-pierwsza-pomoc" className="flex-1 bg-[#f4f7f6] border border-[#e5eaf0] text-navy-blue px-5 py-3 rounded-full font-bold text-sm hover:bg-[#e5eaf0] transition-colors text-center">
              ← Wróć do szkoleń
            </Link>
            <Link to="/kpp/panel" className="flex-1 bg-primary-red text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors text-center shadow-lg shadow-primary-red/25">
              Zaloguj się do panelu →
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f6] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
          <Link to="/kpp" className="inline-flex items-center gap-2 text-[#4B5563] text-sm hover:text-primary-red transition-colors mb-6">
            <ArrowLeft size={16} /> Powrót do strony kursu
          </Link>
          <h1 className="text-3xl font-black text-navy-blue mb-2">Zapis na kurs KPP</h1>
          {course && (
            <div className="flex items-center gap-2 text-sm text-[#4B5563] bg-white border border-[#e5eaf0] rounded-2xl px-4 py-3 mt-3">
              <Calendar size={15} className="text-primary-red shrink-0" />
              <span>{new Date(course.date_start).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })} – {new Date(course.date_end).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="mx-2 text-[#D1D5DB]">·</span>
              <span>{course.location}</span>
              <span className="ml-auto font-bold text-navy-blue">{course.price} zł</span>
            </div>
          )}
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-[#e5eaf0] shadow-sm p-8"
        >
          <ProgressBar step={step} />

          {/* STEP 0 – Dane osobowe */}
          {step === 0 && (
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField label="Imię" name="first_name" value={form.first_name} onChange={handleChange} required placeholder="Jan" icon={User} />
                <InputField label="Nazwisko" name="last_name" value={form.last_name} onChange={handleChange} required placeholder="Kowalski" icon={User} />
              </div>
              <InputField label="Adres e-mail" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jan@example.pl" icon={Mail} />
              <InputField label="Telefon" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+48 600 000 000" icon={Phone} />
            </motion.div>
          )}

          {/* STEP 1 – Szczegóły */}
          {step === 1 && (
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-5">
              <InputField label="PESEL" name="pesel" value={form.pesel} onChange={handleChange} placeholder="Wymagany do certyfikatu MZ" icon={FileText} />
              <InputField label="Firma / Organizacja" name="organization" value={form.organization} onChange={handleChange} placeholder="Opcjonalnie – dla faktury VAT" icon={Building2} />
              <div>
                <label className="block text-sm font-semibold text-navy-blue mb-2">Uwagi / pytania</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Np. preferencje co do terminu, faktura VAT, szczególne potrzeby..."
                  className="w-full bg-white border border-[#D1D5DB] rounded-2xl px-4 py-3 text-sm text-navy-blue placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-primary-red/30 focus:border-primary-red transition-colors resize-none"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 2 – Potwierdzenie */}
          {step === 2 && (
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-6">
              {/* Summary */}
              <div className="bg-[#f4f7f6] rounded-2xl p-6 space-y-3 text-sm">
                <p className="font-bold text-navy-blue text-base mb-4">Podsumowanie zgłoszenia</p>
                {[
                  ['Imię i nazwisko', `${form.first_name} ${form.last_name}`],
                  ['E-mail', form.email],
                  ['Telefon', form.phone],
                  form.pesel && ['PESEL', form.pesel],
                  form.organization && ['Organizacja', form.organization],
                  course && ['Termin', `${new Date(course.date_start).toLocaleDateString('pl-PL')} – ${new Date(course.date_end).toLocaleDateString('pl-PL')}`],
                  course && ['Cena', `${course.price} zł brutto`],
                ].filter(Boolean).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <span className="text-[#4B5563]">{k}</span>
                    <span className="font-semibold text-navy-blue text-right">{v}</span>
                  </div>
                ))}
              </div>

              {/* Payment info */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-sm text-blue-800">
                <p className="font-bold mb-2">Informacja o płatności</p>
                <p>Po przesłaniu zgłoszenia otrzymasz e-mail z danymi do przelewu. Dostęp do platformy zostanie aktywowany po zaksięgowaniu płatności.</p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent_data" checked={form.consent_data} onChange={handleChange} className="mt-0.5 w-4 h-4 accent-primary-red shrink-0" />
                  <span className="text-xs text-[#4B5563]">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez LIFE-Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o. w celu realizacji kursu KPP. <span className="text-primary-red">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent_terms" checked={form.consent_terms} onChange={handleChange} className="mt-0.5 w-4 h-4 accent-primary-red shrink-0" />
                  <span className="text-xs text-[#4B5563]">
                    Akceptuję <a href="/regulamin-kpp" className="text-primary-red underline">regulamin kursu</a> i zapoznałem/am się z warunkami uczestnictwa. <span className="text-primary-red">*</span>
                  </span>
                </label>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 text-sm">
                  <AlertCircle size={16} className="shrink-0" />
                  {error}
                </div>
              )}
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-[#e5eaf0]">
            {step > 0 ? (
              <button onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 text-[#4B5563] font-semibold text-sm hover:text-navy-blue transition-colors px-4 py-2">
                <ArrowLeft size={16} /> Wstecz
              </button>
            ) : <div />}

            {step < 2 ? (
              <button
                onClick={() => {
                  if (step === 0 && (!form.first_name || !form.last_name || !form.email || !form.phone)) {
                    setError('Wypełnij wszystkie wymagane pola.');
                    return;
                  }
                  setError('');
                  setStep(s => s + 1);
                }}
                className="bg-primary-red text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-primary-red/25"
              >
                Dalej <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading || !form.consent_data || !form.consent_terms}
                className="bg-primary-red text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-primary-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <><Loader2 size={16} className="animate-spin" /> Wysyłanie...</> : <>Wyślij zgłoszenie <ArrowRight size={16} /></>}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
