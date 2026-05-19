import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Clock, Users, CheckCircle2, Calendar,
  MapPin, Phone, Mail, ChevronRight, BookOpen, Award,
  ShieldCheck, HeartPulse, Zap, Star, ArrowRight, BadgeCheck
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const PROGRAM = [
  { icon: <ShieldCheck size={20} />, title: 'Bezpieczeństwo własne i miejsca zdarzenia' },
  { icon: <HeartPulse size={20} />, title: 'Resuscytacja krążeniowo-oddechowa (RKO + AED)' },
  { icon: <Zap size={20} />, title: 'Drogi oddechowe i wentylacja' },
  { icon: <BookOpen size={20} />, title: 'Krwotoki zewnętrzne i wstrząs' },
  { icon: <GraduationCap size={20} />, title: 'Urazy głowy, kręgosłupa i klatki piersiowej' },
  { icon: <Award size={20} />, title: 'Stany nagłe – choroby wewnętrzne' },
  { icon: <Users size={20} />, title: 'Zdarzenia masowe i triage' },
  { icon: <CheckCircle2 size={20} />, title: 'Podstawy prawne i organizacja systemu' },
];

const INCLUDED = [
  'Dostęp do platformy e-learningowej z materiałami',
  'Baza 280 pytań egzaminacyjnych online',
  'Algorytmy postępowania ratowniczego',
  'Ćwiczenia praktyczne na fantomach Laerdal QCPR',
  'Obsługa AED – każdy uczestnik osobiście',
  'Certyfikat MZ – ratownik KPP',
  'Indywidualny login i hasło do platformy',
  'Wsparcie merytoryczne przez cały czas kursu',
];

function CourseCard({ course, onSelect }) {
  const start = new Date(course.date_start);
  const end = new Date(course.date_end);
  const fmt = (d) => d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl border border-[#e5eaf0] p-8 shadow-sm hover:shadow-xl hover:shadow-navy-blue/10 transition-all duration-300 flex flex-col gap-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="w-14 h-14 bg-primary-red/10 rounded-2xl flex items-center justify-center shrink-0">
          <Calendar size={26} className="text-primary-red" />
        </div>
        <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200">
          Wolne miejsca
        </span>
      </div>

      <div>
        <div className="text-navy-blue font-bold text-xl mb-1">{course.title}</div>
        <div className="text-[#4B5563] text-sm">{course.description}</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-[#4B5563]">
          <Calendar size={16} className="text-primary-red shrink-0" />
          <span>{fmt(start)} – {fmt(end)}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#4B5563]">
          <MapPin size={16} className="text-primary-red shrink-0" />
          <span>{course.location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#4B5563]">
          <Users size={16} className="text-primary-red shrink-0" />
          <span>Maks. {course.max_seats} uczestników</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#4B5563]">
          <Clock size={16} className="text-primary-red shrink-0" />
          <span>66 godzin (25h online + 41h praktyczne)</span>
        </div>
      </div>

      <div className="pt-4 border-t border-[#e5eaf0] flex items-center justify-between">
        <div>
          <span className="text-3xl font-black text-navy-blue">{course.price} zł</span>
          <span className="text-sm text-[#4B5563] ml-1">brutto / os.</span>
        </div>
        <button
          onClick={() => onSelect(course)}
          className="bg-primary-red text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-primary-red/25"
        >
          Zapisz się <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default function SzkolenieKPP() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: 'Kurs KPP – Kwalifikowana Pierwsza Pomoc | LIFE Ratownictwo Racibórz',
    description: 'Kurs KPP zgodny z Rozporządzeniem MZ. 66 godzin, certyfikat ratownika, dostęp do platformy e-learningowej z 280 pytaniami. Racibórz i okolice.',
  });

  useEffect(() => {
    supabase
      .from('kpp_courses')
      .select('*')
      .eq('is_active', true)
      .order('date_start', { ascending: true })
      .then(({ data }) => {
        setCourses(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#f4f7f6] min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#081525] overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2b46] via-[#081525] to-[#0a0a0a]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-red/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-red/15 border border-primary-red/30 text-primary-red text-sm font-bold px-4 py-2 rounded-full mb-6">
              <GraduationCap size={16} />
              Kwalifikowana Pierwsza Pomoc
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Kurs KPP z certyfikatem{' '}
              <span className="text-primary-red">Ministerstwa Zdrowia</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Profesjonalne szkolenie prowadzone przez ratowników medycznych PRM.
              66 godzin, fantomy Laerdal QCPR, AED i dostęp do platformy e-learningowej z 280 pytaniami egzaminacyjnymi.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a href="#terminy" className="bg-primary-red text-white px-8 py-4 rounded-full font-bold text-base hover:bg-red-700 transition-colors shadow-2xl shadow-primary-red/30 flex items-center gap-2">
                Zobacz terminy <ChevronRight size={18} />
              </a>
              <a href="#program" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/15 transition-colors flex items-center gap-2">
                Program kursu <ChevronRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
          >
            {[
              { val: '66h', label: 'godzin szkolenia' },
              { val: '280', label: 'pytań testowych' },
              { val: '100%', label: 'zdawalność' },
              { val: 'MZ', label: 'certyfikat' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-primary-red mb-1">{val}</div>
                <div className="text-white/50 text-xs font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CO OTRZYMUJESZ */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-primary-red font-bold text-sm uppercase tracking-widest">W cenie kursu</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy-blue mt-2">Co otrzymujesz?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {INCLUDED.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} custom={i}
                className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-[#e5eaf0] shadow-sm"
              >
                <CheckCircle2 size={20} className="text-primary-red shrink-0 mt-0.5" />
                <span className="text-[#374151] text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-20 bg-[#081525]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-primary-red font-bold text-sm uppercase tracking-widest">Czego się nauczysz</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Program kursu</h2>
              <p className="text-white/50 mt-3 max-w-xl mx-auto">
                Zgodny z Rozporządzeniem Ministra Zdrowia w sprawie kursów KPP
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {PROGRAM.map((item, i) => (
                <motion.div
                  key={i} variants={fadeUp} custom={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-red/15 rounded-xl flex items-center justify-center text-primary-red mb-4">
                    {item.icon}
                  </div>
                  <p className="text-white/80 text-sm font-medium leading-snug">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TERMINY */}
      <section id="terminy" className="py-20 container mx-auto px-4">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-primary-red font-bold text-sm uppercase tracking-widest">Dostępne terminy</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy-blue mt-2">Najbliższe kursy</h2>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-16 text-[#4B5563]">
              <Calendar size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">Brak dostępnych terminów.</p>
              <p className="text-sm mt-2">Skontaktuj się z nami – ustalimy termin dla Twojej grupy.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={(c) => window.location.href = `/kpp/zapis?kurs=${c.id}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA kontakt */}
      <section className="py-16 bg-primary-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Masz pytania odnośnie kursu?</h2>
          <p className="text-white/80 mb-8 text-lg">Zadzwoń lub napisz – odpowiemy na wszystkie pytania</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:602622840" className="bg-white text-primary-red px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red-50 transition-colors shadow-xl">
              <Phone size={18} /> +48 602 622 840
            </a>
            <a href="mailto:biuro@life-ratownictwo.pl" className="bg-white/15 border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/25 transition-colors">
              <Mail size={18} /> biuro@life-ratownictwo.pl
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
