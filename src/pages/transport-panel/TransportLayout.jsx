import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Truck, ListChecks, PlusCircle, Building2, Receipt, LogOut } from 'lucide-react';
import { getUser, clearSession } from '../../lib/gasApi';

const NAV = [
  { to: '/transport/panel/zlecenia', label: 'Zlecenia', icon: ListChecks },
  { to: '/transport/panel/nowe', label: 'Nowe zlecenie', icon: PlusCircle },
  { to: '/transport/panel/rozliczenia', label: 'Rozliczenia', icon: Receipt },
  { to: '/transport/panel/kontrahenci', label: 'Kontrahenci', icon: Building2 },
];

export default function TransportLayout({ children, title }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const u = getUser();
    setEmail(u?.name || u?.login || '');
  }, []);

  const logout = () => {
    clearSession();
    navigate('/transport/panel');
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-64 bg-white border-r border-[#e5eaf0] flex md:flex-col md:min-h-screen">
        <div className="p-5 border-b border-[#e5eaf0] hidden md:block">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-red.png" alt="LIFE" className="h-8" />
          </Link>
          <div className="mt-3 inline-flex items-center gap-1.5 text-primary-red text-xs font-bold">
            <Truck size={13} /> Rozliczenia transportu
          </div>
        </div>
        <nav className="flex md:flex-col gap-1 p-3 flex-1 overflow-x-auto">
          {NAV.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link key={to} to={to}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                  active ? 'bg-primary-red text-white' : 'text-[#4B5563] hover:bg-[#f4f7f6]'
                }`}>
                <Icon size={17} /> {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-[#e5eaf0] hidden md:block">
          <div className="text-xs text-[#9CA3AF] px-4 mb-2 truncate">{email}</div>
          <button onClick={logout} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#4B5563] hover:bg-[#f4f7f6] w-full">
            <LogOut size={17} /> Wyloguj
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-5 md:p-8 max-w-full overflow-x-hidden">
        {title && <h1 className="text-2xl md:text-3xl font-black text-navy-blue mb-6">{title}</h1>}
        {children}
      </main>
    </div>
  );
}
