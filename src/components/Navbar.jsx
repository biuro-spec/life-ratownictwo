import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, []);

  const navLinks = [
    { name: 'Strona G\u0142\u00F3wna', path: '/' },
    { name: 'O nas', path: '/o-nas' },
    { name: 'Blog', path: '/blog' },
  ];

  const serviceLinks = [
    { name: 'Transport Medyczny', path: '/transport-medyczny' },
    { name: 'Zabezpieczenia Medyczne', path: '/zabezpieczenia-medyczne' },
    { name: 'Szkolenia Pierwszej Pomocy', path: '/szkolenia-pierwsza-pomoc' },
    { name: 'Usługi Pielęgniarskie', path: '/uslugi-pielegniarskie' },
  ];

  const isServicePage = serviceLinks.some(s => location.pathname === s.path);

  return (
    <header
      className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        top: scrolled ? '12px' : '24px',
        width: scrolled ? 'min(96%, 1200px)' : 'min(96%, 1400px)',
      }}
    >
      <nav
        className={`
          rounded-[50px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${scrolled
            ? 'bg-primary-red backdrop-blur-xl border-2 border-white shadow-[0_4px_6px_rgba(218,37,29,0.15),0_12px_24px_rgba(218,37,29,0.2),0_24px_48px_rgba(218,37,29,0.15)] py-2 px-10'
            : 'bg-white/60 backdrop-blur-xl border-2 border-white shadow-[0_4px_6px_rgba(0,0,0,0.03),0_10px_24px_rgba(0,0,0,0.06),0_20px_48px_rgba(0,0,0,0.04)] py-2 px-10'
          }
        `}
      >
        <div className={`flex items-center transition-all duration-500 ${scrolled ? 'justify-center gap-8' : 'justify-between'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 ml-2 relative">
            <img
              src={scrolled ? '/logo-white.png' : '/logo-red.png'}
              alt="Life Ratownictwo"
              className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                scrolled ? 'h-[52px]' : 'h-[68px]'
              }`}
            />
          </Link>

          {/* Spacer */}
          <div className={`hidden lg:block transition-all duration-500 ${scrolled ? 'flex-grow-0 w-0' : 'flex-grow'}`} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  font-semibold transition-all duration-300 hover:-translate-y-0.5
                  ${scrolled ? 'text-sm' : 'text-[0.95rem]'}
                  ${location.pathname === link.path
                    ? scrolled ? 'text-white font-bold' : 'text-primary-red font-bold'
                    : scrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-navy-blue/70 hover:text-navy-blue'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            {/* Usługi dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(prev => !prev)}
                className={`
                  font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1
                  ${scrolled ? 'text-sm' : 'text-[0.95rem]'}
                  ${isServicePage
                    ? scrolled ? 'text-white font-bold' : 'text-primary-red font-bold'
                    : scrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-navy-blue/70 hover:text-navy-blue'
                  }
                `}
              >
                Usługi
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl border-2 border-primary-red/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-3 z-50"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-primary-red/5
                          ${location.pathname === link.path ? 'text-primary-red bg-primary-red/5' : 'text-navy-blue hover:text-primary-red'}
                        `}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Napisz do nas */}
            <a
              href="mailto:biuro@life-ratownictwo.pl"
              className={`
                rounded-full font-bold flex items-center gap-2
                transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
                ${scrolled
                  ? 'bg-white/20 text-white border border-white/40 px-4 py-2 text-sm hover:bg-white/30'
                  : 'bg-navy-blue/5 text-navy-blue border border-navy-blue/15 px-5 py-2.5 text-sm hover:bg-navy-blue/10'
                }
              `}
            >
              <Mail size={scrolled ? 14 : 16} />
              Napisz do nas
            </a>

            {/* Telefony */}
            <div className="flex items-center gap-2">
              <a
                href="tel:602622840"
                className={`
                  rounded-full font-bold flex items-center gap-2
                  transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
                  ${scrolled
                    ? 'bg-white text-primary-red px-4 py-2 text-sm shadow-lg shadow-black/10 hover:shadow-xl'
                    : 'bg-primary-red text-white px-5 py-2.5 text-sm shadow-lg shadow-primary-red/25 hover:shadow-xl hover:shadow-primary-red/35'
                  }
                `}
              >
                <Phone size={14} />
                602 622 840
              </a>
              <a
                href="tel:505751858"
                className={`
                  rounded-full font-bold flex items-center gap-2
                  transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
                  ${scrolled
                    ? 'bg-white/20 text-white border border-white/40 px-4 py-2 text-sm hover:bg-white/30'
                    : 'bg-navy-blue text-white px-5 py-2.5 text-sm shadow-lg shadow-navy-blue/25 hover:shadow-xl hover:shadow-navy-blue/35'
                  }
                `}
              >
                <Phone size={14} />
                505 751 858
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative w-11 h-11 flex flex-col justify-center items-center gap-[7px]"
            onClick={toggleMenu}
            aria-label="Menu nawigacyjne"
          >
            <span
              className={`block w-7 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled ? 'bg-white' : 'bg-navy-blue'
              } ${isOpen ? 'rotate-45 translate-y-[11px]' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-white' : 'bg-navy-blue'
              } ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}
            />
            <span
              className={`block w-7 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled ? 'bg-white' : 'bg-navy-blue'
              } ${isOpen ? '-rotate-45 -translate-y-[11px]' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`mt-3 backdrop-blur-xl rounded-3xl p-8 lg:hidden flex flex-col gap-4
              ${scrolled
                ? 'bg-primary-red/95 border-2 border-white shadow-[0_4px_8px_rgba(218,37,29,0.1),0_16px_32px_rgba(218,37,29,0.2),0_32px_64px_rgba(218,37,29,0.12)]'
                : 'bg-white/60 border-2 border-white shadow-[0_4px_8px_rgba(0,0,0,0.03),0_16px_32px_rgba(0,0,0,0.06),0_32px_64px_rgba(0,0,0,0.04)]'
              }
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg font-semibold transition-colors ${
                  location.pathname === link.path
                    ? scrolled ? 'text-white font-bold' : 'text-primary-red font-bold'
                    : scrolled ? 'text-white/80 hover:text-white' : 'text-navy-blue hover:text-primary-red'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Usługi w mobile */}
            <div className={`text-sm font-bold uppercase tracking-wider mt-2 ${scrolled ? 'text-white/50' : 'text-navy-blue/40'}`}>
              Nasze Usługi
            </div>
            {serviceLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-base font-semibold transition-colors pl-3 border-l-2 ${
                  location.pathname === link.path
                    ? scrolled ? 'text-white font-bold border-white' : 'text-primary-red border-primary-red font-bold'
                    : scrolled ? 'text-white/70 hover:text-white border-white/20' : 'text-navy-blue/70 hover:text-primary-red border-primary-red/20'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mt-4">
              {/* Telefony obok siebie */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:602622840"
                  className={`p-4 rounded-2xl font-bold flex flex-col items-center gap-1 transition-all text-center ${scrolled ? 'bg-white text-primary-red shadow-lg shadow-black/10' : 'bg-primary-red text-white shadow-lg shadow-primary-red/25'}`}
                >
                  <Phone size={20} />
                  <span className="text-sm">602 622 840</span>
                </a>
                <a
                  href="tel:505751858"
                  className={`p-4 rounded-2xl font-bold flex flex-col items-center gap-1 transition-all text-center ${scrolled ? 'bg-white/20 text-white border border-white/30' : 'bg-navy-blue text-white shadow-lg shadow-navy-blue/25'}`}
                >
                  <Phone size={20} />
                  <span className="text-sm">505 751 858</span>
                </a>
              </div>
              <a
                href="mailto:biuro@life-ratownictwo.pl"
                className={`p-4 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all ${scrolled ? 'bg-white/20 text-white border border-white/30' : 'bg-navy-blue/5 text-navy-blue border border-navy-blue/15'}`}
              >
                <Mail size={18} />
                Napisz do nas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
