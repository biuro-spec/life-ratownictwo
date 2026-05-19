import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText, Video, Link2, ClipboardList, Download,
  ArrowLeft, Lock, ExternalLink, BookOpen, Loader2
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const TYPE_CONFIG = {
  pdf:   { icon: FileText,     label: 'PDF',    color: 'bg-red-50 text-red-600 border-red-200' },
  video: { icon: Video,        label: 'Wideo',  color: 'bg-blue-50 text-blue-600 border-blue-200' },
  link:  { icon: Link2,        label: 'Link',   color: 'bg-purple-50 text-purple-600 border-purple-200' },
  test:  { icon: ClipboardList,label: 'Test',   color: 'bg-green-50 text-green-600 border-green-200' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.35, delay: i * 0.07 } }),
};

export default function PanelMaterialy() {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);
  const [participant, setParticipant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { navigate('/kpp/panel'); return; }

      const { data: p } = await supabase
        .from('kpp_participants')
        .select('*')
        .eq('id', user.id)
        .single();

      setParticipant(p);

      if (p?.access_granted) {
        const { data: m } = await supabase
          .from('kpp_materials')
          .select('*')
          .eq('course_id', p.course_id)
          .eq('is_active', true)
          .order('sort_order');
        setMaterials(m || []);
      }
      setLoading(false);
    });
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!participant?.access_granted) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-[#e5eaf0] p-10 max-w-md text-center shadow-sm">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock size={28} className="text-amber-600" />
          </div>
          <h2 className="text-xl font-black text-navy-blue mb-3">Materiały niedostępne</h2>
          <p className="text-[#4B5563] text-sm mb-6">Dostęp do materiałów zostanie aktywowany po potwierdzeniu płatności przez organizatora.</p>
          <Link to="/kpp/panel/dashboard" className="inline-flex items-center gap-2 bg-primary-red text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
            <ArrowLeft size={15} /> Wróć do dashboardu
          </Link>
        </div>
      </div>
    );
  }

  const grouped = materials.reduce((acc, m) => {
    const t = m.type || 'link';
    if (!acc[t]) acc[t] = [];
    acc[t].push(m);
    return acc;
  }, {});

  const typeOrder = ['pdf', 'video', 'link', 'test'];

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      <header className="bg-white border-b border-[#e5eaf0] px-8 py-4 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/kpp/panel/dashboard" className="text-[#4B5563] hover:text-navy-blue transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="font-black text-navy-blue">Materiały szkoleniowe</h1>
          <p className="text-xs text-[#4B5563]">{materials.length} materiałów dostępnych</p>
        </div>
      </header>

      <div className="p-8 max-w-4xl mx-auto">
        {materials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="bg-white rounded-3xl border border-[#e5eaf0] p-12 text-center"
          >
            <BookOpen size={48} className="mx-auto mb-4 text-[#D1D5DB]" />
            <p className="text-navy-blue font-bold text-lg mb-2">Brak materiałów</p>
            <p className="text-[#4B5563] text-sm">Organizator wkrótce doda materiały szkoleniowe.</p>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="space-y-8"
          >
            {typeOrder.filter(t => grouped[t]?.length > 0).map(type => {
              const cfg = TYPE_CONFIG[type];
              const Icon = cfg.icon;
              return (
                <div key={type}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${cfg.color}`}>
                      <Icon size={13} /> {cfg.label}
                    </span>
                    <span className="text-xs text-[#9CA3AF]">{grouped[type].length} pozycji</span>
                  </div>
                  <div className="space-y-3">
                    {grouped[type].map((m, i) => {
                      const MIcon = TYPE_CONFIG[m.type]?.icon || FileText;
                      return (
                        <motion.div key={m.id} variants={fadeUp} custom={i}>
                          {m.type === 'test' ? (
                            <Link
                              to="/kpp/panel/testy"
                              className="flex items-center gap-4 bg-white rounded-2xl border border-[#e5eaf0] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                <MIcon size={20} className="text-green-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-navy-blue">{m.title}</div>
                                {m.description && <div className="text-xs text-[#4B5563] mt-0.5 truncate">{m.description}</div>}
                              </div>
                              <ExternalLink size={16} className="text-[#9CA3AF] shrink-0" />
                            </Link>
                          ) : m.url ? (
                            <a
                              href={m.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 bg-white rounded-2xl border border-[#e5eaf0] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${TYPE_CONFIG[m.type]?.color.split(' ').slice(0,2).join(' ')}`}>
                                <MIcon size={20} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-navy-blue">{m.title}</div>
                                {m.description && <div className="text-xs text-[#4B5563] mt-0.5 truncate">{m.description}</div>}
                              </div>
                              {m.type === 'pdf' ? <Download size={16} className="text-[#9CA3AF] shrink-0" /> : <ExternalLink size={16} className="text-[#9CA3AF] shrink-0" />}
                            </a>
                          ) : (
                            <div className="flex items-center gap-4 bg-white rounded-2xl border border-[#e5eaf0] p-5 opacity-60">
                              <div className="w-11 h-11 bg-[#f4f7f6] rounded-xl flex items-center justify-center shrink-0">
                                <MIcon size={20} className="text-[#9CA3AF]" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-navy-blue">{m.title}</div>
                                {m.description && <div className="text-xs text-[#4B5563] mt-0.5">{m.description}</div>}
                                <div className="text-xs text-amber-600 mt-1 font-medium">Wkrótce dostępne</div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
