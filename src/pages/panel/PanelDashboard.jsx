import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen, ClipboardList, Award, Calendar, LogOut,
  CheckCircle2, Lock, ChevronRight, GraduationCap,
  User, Bell, Play
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

function NavItem({ icon: Icon, label, to, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
        active
          ? 'bg-primary-red text-white shadow-lg shadow-primary-red/25'
          : 'text-[#4B5563] hover:bg-[#f4f7f6] hover:text-navy-blue'
      }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
}

function ModuleCard({ icon: Icon, title, desc, to, locked, progress }) {
  return (
    <motion.div variants={fadeUp} className="relative">
      <Link
        to={locked ? '#' : to}
        className={`block bg-white rounded-3xl border p-6 transition-all duration-300 ${
          locked
            ? 'border-[#e5eaf0] opacity-60 cursor-not-allowed'
            : 'border-[#e5eaf0] hover:shadow-xl hover:shadow-navy-blue/8 hover:-translate-y-1'
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${locked ? 'bg-[#f4f7f6]' : 'bg-primary-red/10'}`}>
            {locked
              ? <Lock size={20} className="text-[#9CA3AF]" />
              : <Icon size={20} className="text-primary-red" />
            }
          </div>
          {progress !== undefined && !locked && (
            <span className="text-xs font-bold text-primary-red bg-primary-red/10 px-2.5 py-1 rounded-full">
              {progress}%
            </span>
          )}
        </div>
        <h3 className="font-bold text-navy-blue mb-1">{title}</h3>
        <p className="text-[#4B5563] text-sm">{desc}</p>
        {!locked && (
          <div className="flex items-center gap-1 text-primary-red text-xs font-bold mt-4">
            Przejdź <ChevronRight size={14} />
          </div>
        )}
        {progress !== undefined && !locked && (
          <div className="mt-4 h-1.5 bg-[#f4f7f6] rounded-full overflow-hidden">
            <div className="h-full bg-primary-red rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        )}
      </Link>
    </motion.div>
  );
}

export default function PanelDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [participant, setParticipant] = useState(null);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { navigate('/kpp/panel'); return; }
      setUser(user);

      const { data: p } = await supabase
        .from('kpp_participants')
        .select('*, kpp_courses(*)')
        .eq('id', user.id)
        .single();

      if (p) {
        setParticipant(p);
        setCourse(p.kpp_courses);
      }
      setLoading(false);
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/kpp/panel');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const firstName = participant?.first_name || user?.email?.split('@')[0] || 'Uczestniku';
  const hasAccess = participant?.access_granted;

  const fmtDate = (d) => d ? new Date(d).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#e5eaf0] flex flex-col p-5 shrink-0 hidden lg:flex">
        <Link to="/" className="mb-8 block">
          <img src="/assets/images/life-ratownictwo-logo.webp" alt="LIFE Ratownictwo" className="h-9" />
        </Link>

        <div className="space-y-1 flex-1">
          <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest px-4 mb-2">Kurs KPP</p>
          <NavItem icon={GraduationCap} label="Dashboard" to="/kpp/panel/dashboard" active />
          <NavItem icon={BookOpen} label="Materiały" to="/kpp/panel/materialy" />
          <NavItem icon={ClipboardList} label="Testy egzaminacyjne" to="/kpp/panel/testy" />
          <NavItem icon={Award} label="Certyfikat" to="/kpp/panel/certyfikat" />
        </div>

        <div className="border-t border-[#e5eaf0] pt-4 space-y-1">
          <NavItem icon={User} label="Moje konto" to="/kpp/panel/konto" />
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-[#4B5563] hover:bg-red-50 hover:text-primary-red transition-all"
          >
            <LogOut size={18} /> Wyloguj się
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <header className="bg-white border-b border-[#e5eaf0] px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-black text-navy-blue text-lg">Panel uczestnika</h1>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-[#f4f7f6] flex items-center justify-center text-[#4B5563] hover:bg-[#e5eaf0] transition-colors">
              <Bell size={16} />
            </button>
            <div className="w-9 h-9 bg-primary-red rounded-full flex items-center justify-center text-white text-xs font-black">
              {firstName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        <div className="p-8 max-w-5xl">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {/* Welcome */}
            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-2xl font-black text-navy-blue">Cześć, {firstName}! 👋</h2>
              <p className="text-[#4B5563] mt-1">Witaj w panelu uczestnika kursu KPP.</p>
            </motion.div>

            {/* Status bar */}
            {!hasAccess && (
              <motion.div variants={fadeUp} className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Bell size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-amber-800 mb-1">Oczekiwanie na potwierdzenie płatności</p>
                  <p className="text-amber-700 text-sm">Po zaksięgowaniu wpłaty Twoje konto zostanie aktywowane i uzyskasz dostęp do wszystkich materiałów szkoleniowych.</p>
                </div>
              </motion.div>
            )}

            {hasAccess && course && (
              <motion.div variants={fadeUp} className="bg-gradient-to-r from-[#0f2b46] to-[#163f68] rounded-3xl p-6 mb-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Calendar size={26} className="text-primary-red" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg mb-0.5">{course.title}</p>
                  <p className="text-white/60 text-sm">{fmtDate(course.date_start)} – {fmtDate(course.date_end)} · {course.location}</p>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 size={12} /> Dostęp aktywny
                </div>
              </motion.div>
            )}

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { val: course ? `${fmtDate(course.date_start).split(' ')[0]} ${fmtDate(course.date_start).split(' ')[1]}` : '—', label: 'Start kursu' },
                { val: '66h', label: 'Godzin szkolenia' },
                { val: '280', label: 'Pytań testowych' },
                { val: hasAccess ? 'Aktywny' : 'Oczekuje', label: 'Status dostępu' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-white rounded-2xl border border-[#e5eaf0] p-5 text-center">
                  <div className="text-xl font-black text-navy-blue mb-1">{val}</div>
                  <div className="text-[#4B5563] text-xs">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Modules */}
            <motion.div variants={fadeUp} className="mb-6">
              <h3 className="font-black text-navy-blue text-lg mb-4">Moduły szkoleniowe</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ModuleCard
                icon={BookOpen}
                title="Materiały szkoleniowe"
                desc="Prezentacje, algorytmy postępowania, skrypty PDF zgodne z wytycznymi."
                to="/kpp/panel/materialy"
                locked={!hasAccess}
                progress={hasAccess ? 0 : undefined}
              />
              <ModuleCard
                icon={Play}
                title="Testy egzaminacyjne"
                desc="280 pytań egzaminacyjnych – tryb egzaminu próbnego i nauki po kategoriach."
                to="/kpp/panel/testy"
                locked={!hasAccess}
                progress={hasAccess ? 0 : undefined}
              />
              <ModuleCard
                icon={Calendar}
                title="Harmonogram kursu"
                desc="Terminy zajęć stacjonarnych, lokalizacja, godziny, wymagane dokumenty."
                to="/kpp/panel/harmonogram"
                locked={!hasAccess}
              />
              <ModuleCard
                icon={Award}
                title="Certyfikat"
                desc="Certyfikat ratownika KPP wydawany po zdaniu egzaminu końcowego."
                to="/kpp/panel/certyfikat"
                locked={true}
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
