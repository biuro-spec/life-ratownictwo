import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, GraduationCap } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function PanelLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) {
      setError('Nieprawidłowy e-mail lub hasło. Sprawdź dane i spróbuj ponownie.');
    } else {
      navigate('/kpp/panel/dashboard');
    }
    setLoading(false);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/kpp/panel/reset-hasla`,
    });
    if (err) {
      setError('Nie udało się wysłać e-maila. Sprawdź adres i spróbuj ponownie.');
    } else {
      setResetSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/assets/images/life-ratownictwo-logo.webp" alt="LIFE Ratownictwo" className="h-10" />
          </Link>
          <div className="inline-flex items-center gap-2 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-bold px-3 py-1.5 rounded-full">
            <GraduationCap size={14} /> Panel uczestnika KPP
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-[#e5eaf0] shadow-sm p-8"
        >
          {resetSent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-green-600" />
              </div>
              <h2 className="text-xl font-black text-navy-blue mb-2">E-mail wysłany!</h2>
              <p className="text-[#4B5563] text-sm mb-6">
                Sprawdź skrzynkę <strong>{email}</strong> i kliknij link resetowania hasła.
              </p>
              <button onClick={() => { setResetMode(false); setResetSent(false); }} className="text-primary-red font-semibold text-sm hover:underline">
                ← Wróć do logowania
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-black text-navy-blue mb-1">
                {resetMode ? 'Resetuj hasło' : 'Zaloguj się'}
              </h1>
              <p className="text-[#4B5563] text-sm mb-7">
                {resetMode
                  ? 'Podaj swój e-mail – wyślemy link do ustawienia nowego hasła.'
                  : 'Dostęp do materiałów szkoleniowych kursu KPP'
                }
              </p>

              <form onSubmit={resetMode ? handleReset : handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy-blue mb-2">E-mail</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      placeholder="twoj@email.pl"
                      className="w-full bg-white border border-[#D1D5DB] rounded-2xl py-3.5 pl-11 pr-4 text-sm text-navy-blue placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-primary-red/30 focus:border-primary-red transition-colors"
                    />
                  </div>
                </div>

                {!resetMode && (
                  <div>
                    <label className="block text-sm font-semibold text-navy-blue mb-2">Hasło</label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type={showPwd ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="w-full bg-white border border-[#D1D5DB] rounded-2xl py-3.5 pl-11 pr-11 text-sm text-navy-blue placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-primary-red/30 focus:border-primary-red transition-colors"
                      />
                      <button type="button" onClick={() => setShowPwd(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-navy-blue transition-colors">
                        {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    <div className="text-right mt-2">
                      <button type="button" onClick={() => setResetMode(true)} className="text-xs text-[#4B5563] hover:text-primary-red transition-colors">
                        Zapomniałem hasła
                      </button>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 text-sm">
                    <AlertCircle size={16} className="shrink-0" /> {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-red text-white py-3.5 rounded-full font-bold text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-red/25 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {loading
                    ? <><Loader2 size={16} className="animate-spin" /> Proszę czekać...</>
                    : resetMode ? 'Wyślij link resetowania' : 'Zaloguj się'
                  }
                </button>
              </form>

              {resetMode && (
                <button onClick={() => setResetMode(false)} className="w-full text-center text-sm text-[#4B5563] hover:text-primary-red transition-colors mt-4">
                  ← Wróć do logowania
                </button>
              )}
            </>
          )}
        </motion.div>

        <p className="text-center text-xs text-[#9CA3AF] mt-6">
          Nie masz jeszcze konta?{' '}
          <Link to="/kpp" className="text-primary-red hover:underline font-semibold">
            Zapisz się na kurs →
          </Link>
        </p>
      </div>
    </div>
  );
}
