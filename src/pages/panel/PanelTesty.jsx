import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function PanelTesty() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { navigate('/kpp/panel'); return; }
      const { data: p } = await supabase
        .from('kpp_participants').select('access_granted').eq('id', user.id).single();
      setAccess(p?.access_granted ?? false);
    });
  }, [navigate]);

  if (access === null) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!access) {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-[#e5eaf0] p-10 max-w-md text-center shadow-sm">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock size={28} className="text-amber-600" />
          </div>
          <h2 className="text-xl font-black text-navy-blue mb-3">Testy niedostępne</h2>
          <p className="text-[#4B5563] text-sm mb-6">Dostęp zostanie aktywowany po potwierdzeniu płatności.</p>
          <Link to="/kpp/panel/dashboard" className="inline-flex items-center gap-2 bg-primary-red text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
            <ArrowLeft size={15} /> Wróć
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex flex-col">
      <header className="bg-white border-b border-[#e5eaf0] px-8 py-4 flex items-center gap-4 sticky top-0 z-10 shrink-0">
        <Link to="/kpp/panel/dashboard" className="text-[#4B5563] hover:text-navy-blue transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="font-black text-navy-blue">Testy egzaminacyjne KPP</h1>
          <p className="text-xs text-[#4B5563]">280 pytań – egzamin próbny, kategorie, powtórka błędów</p>
        </div>
      </header>
      <iframe
        src="/kpp-exam/"
        className="flex-1 w-full border-0"
        style={{ minHeight: 'calc(100vh - 73px)' }}
        title="Testy KPP"
      />
    </div>
  );
}
