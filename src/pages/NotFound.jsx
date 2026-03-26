import { Link } from 'react-router-dom';
import { HeartPulse, Home, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7f6] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-primary-red/10 p-5 rounded-full">
            <HeartPulse className="w-16 h-16 text-primary-red" />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold text-navy-blue mb-2">404</h1>
        <h2 className="text-2xl font-bold text-navy-blue mb-4">Strona nie znaleziona</h2>
        <p className="text-gray-500 mb-10 text-lg">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary-red text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-red/20 hover:scale-105 hover:bg-[#ba1e17] transition-all"
          >
            <Home size={20} />
            Strona Główna
          </Link>
          <a
            href="tel:+48602622840"
            className="bg-navy-blue text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 hover:bg-navy-blue-light transition-all"
          >
            <Phone size={20} />
            Zadzwoń do nas
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
