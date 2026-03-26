import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'life_cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="bg-primary-red/10 p-2 rounded-full shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-primary-red" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ta strona korzysta z plików cookies w celu zapewnienia prawidłowego działania serwisu
                oraz analizy ruchu. Korzystając ze strony wyrażasz zgodę na ich używanie.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={accept}
                className="flex-1 sm:flex-none bg-primary-red text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#ba1e17] hover:scale-105 transition-all shadow-lg shadow-primary-red/20"
              >
                Akceptuję
              </button>
              <button
                onClick={() => setVisible(false)}
                className="p-3 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Zamknij"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
