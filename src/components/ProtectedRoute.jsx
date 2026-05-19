import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'auth' | 'unauth'

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setStatus(user ? 'auth' : 'unauth');
    });
  }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return status === 'auth' ? children : <Navigate to="/kpp/panel" replace />;
}
