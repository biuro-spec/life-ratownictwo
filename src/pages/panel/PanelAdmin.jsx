import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Users, CheckCircle2, XCircle, Clock, Search,
  Mail, Phone, Calendar, ChevronDown, LogOut,
  UserPlus, RefreshCw, Eye, BadgeCheck, AlertCircle,
  Loader2, GraduationCap, Download
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const STATUS_CONFIG = {
  pending:   { label: 'Oczekuje',    color: 'text-amber-600  bg-amber-50  border-amber-200' },
  paid:      { label: 'Opłacone',    color: 'text-blue-600   bg-blue-50   border-blue-200'  },
  confirmed: { label: 'Potwierdzone',color: 'text-green-600  bg-green-50  border-green-200' },
  cancelled: { label: 'Anulowane',   color: 'text-red-600    bg-red-50    border-red-200'   },
};

function Badge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  return (
    <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full border ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}

function StatCard({ icon: Icon, value, label, color }) {
  return (
    <div className="bg-white rounded-2xl border border-[#e5eaf0] p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={22} />
      </div>
      <div>
        <div className="text-2xl font-black text-navy-blue">{value}</div>
        <div className="text-xs text-[#4B5563]">{label}</div>
      </div>
    </div>
  );
}

export default function PanelAdmin() {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCourse, setFilterCourse] = useState('all');
  const [actionLoading, setActionLoading] = useState(null);
  const [toast, setToast] = useState(null);
  const [selected, setSelected] = useState(null);

  const showToast = (msg, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const loadData = async () => {
    setLoading(true);
    const [{ data: enr }, { data: crs }] = await Promise.all([
      supabase.from('kpp_enrollments').select('*, kpp_courses(title, date_start, date_end)').order('created_at', { ascending: false }),
      supabase.from('kpp_courses').select('id, title, date_start').order('date_start'),
    ]);
    setEnrollments(enr || []);
    setCourses(crs || []);
    setLoading(false);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) navigate('/kpp/panel');
      else loadData();
    });
  }, []);

  const updateStatus = async (id, status) => {
    setActionLoading(id + status);
    const { error } = await supabase.from('kpp_enrollments').update({ status }).eq('id', id);
    if (error) { showToast('Błąd aktualizacji statusu', false); }
    else {
      setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status } : e));
      showToast(`Status zmieniony na: ${STATUS_CONFIG[status].label}`);
    }
    setActionLoading(null);
  };

  const createAccount = async (enrollment) => {
    setActionLoading(enrollment.id + 'create');
    const tempPassword = Math.random().toString(36).slice(-8) + 'A1!';

    const { data, error } = await supabase.auth.admin?.createUser({
      email: enrollment.email,
      password: tempPassword,
      email_confirm: true,
    }).catch(() => ({ error: { message: 'Admin API niedostępne' } }));

    if (error) {
      showToast('Nie można utworzyć konta przez panel – użyj Supabase Dashboard → Auth → Add user', false);
      setActionLoading(null);
      return;
    }

    if (data?.user) {
      await supabase.from('kpp_participants').upsert({
        id: data.user.id,
        enrollment_id: enrollment.id,
        first_name: enrollment.first_name,
        last_name: enrollment.last_name,
        email: enrollment.email,
        course_id: enrollment.course_id,
        access_granted: true,
      });
      await updateStatus(enrollment.id, 'confirmed');
      showToast(`Konto utworzone! Hasło: ${tempPassword} – wyślij uczestnikowi!`);
    }
    setActionLoading(null);
  };

  const filtered = enrollments.filter(e => {
    const q = search.toLowerCase();
    const matchSearch = !q ||
      e.first_name?.toLowerCase().includes(q) ||
      e.last_name?.toLowerCase().includes(q) ||
      e.email?.toLowerCase().includes(q) ||
      e.phone?.includes(q);
    const matchStatus = filterStatus === 'all' || e.status === filterStatus;
    const matchCourse = filterCourse === 'all' || e.course_id === filterCourse;
    return matchSearch && matchStatus && matchCourse;
  });

  const stats = {
    total:     enrollments.length,
    pending:   enrollments.filter(e => e.status === 'pending').length,
    paid:      enrollments.filter(e => e.status === 'paid').length,
    confirmed: enrollments.filter(e => e.status === 'confirmed').length,
  };

  const fmtDate = (d) => d ? new Date(d).toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '—';
  const fmtDateTime = (d) => d ? new Date(d).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl text-sm font-semibold ${
            toast.ok ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {toast.ok ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          {toast.msg}
        </motion.div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-[#e5eaf0] px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary-red rounded-xl flex items-center justify-center">
            <GraduationCap size={18} className="text-white" />
          </div>
          <div>
            <div className="font-black text-navy-blue">Panel Admina – KPP</div>
            <div className="text-xs text-[#4B5563]">LIFE Ratownictwo</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={loadData} className="w-9 h-9 rounded-full bg-[#f4f7f6] flex items-center justify-center text-[#4B5563] hover:bg-[#e5eaf0] transition-colors">
            <RefreshCw size={15} />
          </button>
          <button
            onClick={() => supabase.auth.signOut().then(() => navigate('/kpp/panel'))}
            className="flex items-center gap-2 text-sm text-[#4B5563] hover:text-primary-red transition-colors px-3 py-2 rounded-xl hover:bg-red-50"
          >
            <LogOut size={15} /> Wyloguj
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Users}        value={stats.total}     label="Wszystkich zgłoszeń"  color="bg-navy-blue/10 text-navy-blue" />
          <StatCard icon={Clock}        value={stats.pending}   label="Oczekuje na płatność" color="bg-amber-100 text-amber-600" />
          <StatCard icon={BadgeCheck}   value={stats.paid}      label="Opłacone"              color="bg-blue-100 text-blue-600" />
          <StatCard icon={CheckCircle2} value={stats.confirmed} label="Potwierdzone"          color="bg-green-100 text-green-600" />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-[#e5eaf0] p-4 mb-6 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Szukaj imię, nazwisko, email, telefon..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors"
            />
          </div>
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="text-sm border border-[#D1D5DB] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-red/20 bg-white"
          >
            <option value="all">Wszystkie statusy</option>
            {Object.entries(STATUS_CONFIG).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <select
            value={filterCourse}
            onChange={e => setFilterCourse(e.target.value)}
            className="text-sm border border-[#D1D5DB] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-red/20 bg-white"
          >
            <option value="all">Wszystkie kursy</option>
            {courses.map(c => <option key={c.id} value={c.id}>{fmtDate(c.date_start)} – {c.title}</option>)}
          </select>
          <span className="text-sm text-[#4B5563] ml-auto">{filtered.length} wyników</span>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#e5eaf0] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f4f7f6] border-b border-[#e5eaf0]">
                  <tr>
                    {['Uczestnik', 'Kontakt', 'Kurs', 'Zgłoszono', 'Status', 'Akcje'].map(h => (
                      <th key={h} className="text-left text-xs font-bold text-[#4B5563] uppercase tracking-wider px-5 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f4f7f6]">
                  {filtered.length === 0 ? (
                    <tr><td colSpan={6} className="text-center py-12 text-[#4B5563]">Brak zgłoszeń</td></tr>
                  ) : filtered.map(e => (
                    <tr key={e.id} className="hover:bg-[#f9fafb] transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-semibold text-navy-blue">{e.first_name} {e.last_name}</div>
                        {e.organization && <div className="text-xs text-[#9CA3AF]">{e.organization}</div>}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5 text-[#4B5563]"><Mail size={13} />{e.email}</div>
                        <div className="flex items-center gap-1.5 text-[#4B5563] mt-1"><Phone size={13} />{e.phone}</div>
                      </td>
                      <td className="px-5 py-4">
                        {e.kpp_courses ? (
                          <>
                            <div className="text-navy-blue font-medium text-xs">{fmtDate(e.kpp_courses.date_start)}</div>
                            <div className="text-[#9CA3AF] text-xs">do {fmtDate(e.kpp_courses.date_end)}</div>
                          </>
                        ) : <span className="text-[#9CA3AF] text-xs">—</span>}
                      </td>
                      <td className="px-5 py-4 text-xs text-[#4B5563]">{fmtDateTime(e.created_at)}</td>
                      <td className="px-5 py-4"><Badge status={e.status} /></td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          {e.status === 'pending' && (
                            <button
                              onClick={() => updateStatus(e.id, 'paid')}
                              disabled={!!actionLoading}
                              className="flex items-center gap-1.5 text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                              {actionLoading === e.id + 'paid' ? <Loader2 size={12} className="animate-spin" /> : <BadgeCheck size={12} />}
                              Opłacone
                            </button>
                          )}
                          {e.status === 'paid' && (
                            <button
                              onClick={() => updateStatus(e.id, 'confirmed')}
                              disabled={!!actionLoading}
                              className="flex items-center gap-1.5 text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                            >
                              {actionLoading === e.id + 'confirmed' ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle2 size={12} />}
                              Potwierdź
                            </button>
                          )}
                          {e.status !== 'cancelled' && (
                            <button
                              onClick={() => updateStatus(e.id, 'cancelled')}
                              disabled={!!actionLoading}
                              className="flex items-center gap-1.5 text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                            >
                              <XCircle size={12} /> Anuluj
                            </button>
                          )}
                          <button
                            onClick={() => setSelected(e)}
                            className="flex items-center gap-1.5 text-xs bg-[#f4f7f6] text-[#4B5563] border border-[#e5eaf0] px-3 py-1.5 rounded-lg hover:bg-[#e5eaf0] transition-colors"
                          >
                            <Eye size={12} /> Szczegóły
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-black text-navy-blue mb-6">Szczegóły zgłoszenia</h3>
            <div className="space-y-3 text-sm">
              {[
                ['Imię i nazwisko', `${selected.first_name} ${selected.last_name}`],
                ['E-mail', selected.email],
                ['Telefon', selected.phone],
                ['PESEL', selected.pesel || '—'],
                ['Organizacja', selected.organization || '—'],
                ['Status', STATUS_CONFIG[selected.status]?.label],
                ['Zgłoszono', fmtDateTime(selected.created_at)],
                ['Uwagi', selected.notes || '—'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2 border-b border-[#f4f7f6]">
                  <span className="text-[#4B5563]">{k}</span>
                  <span className="font-semibold text-navy-blue text-right">{v}</span>
                </div>
              ))}
            </div>

            {/* Instrukcja tworzenia konta */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-2">Jak utworzyć konto uczestnikowi?</p>
              <ol className="space-y-1 list-decimal list-inside">
                <li>Supabase Dashboard → Authentication → Users</li>
                <li>Kliknij "Add user" → wpisz e-mail: <strong>{selected.email}</strong></li>
                <li>Ustaw hasło i skopiuj je</li>
                <li>Wyślij uczestnikowi e-mail z loginem i hasłem</li>
                <li>W tabeli <code>kpp_participants</code> dodaj wpis z <code>access_granted = true</code></li>
              </ol>
            </div>

            <button onClick={() => setSelected(null)} className="mt-6 w-full bg-[#f4f7f6] text-navy-blue py-3 rounded-2xl font-semibold hover:bg-[#e5eaf0] transition-colors">
              Zamknij
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
