import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const navLinks = [
    { label: 'Główna', href: '/#hero' },
    { label: 'O nas', href: '/#o-nas' },
    { label: 'Usługi', href: '/#uslugi' },
    { label: 'Flota', href: '/#flota' },
    { label: 'Zespół', href: '/#zespol' },
    { label: 'Galeria', href: '/#galeria' },
    { label: 'Kontakt', href: '/#kontakt' },
    { label: 'Blog', href: '/blog' },
];

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const location = useLocation();
    const isBlogPage = location.pathname.startsWith('/blog');

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        if (href.startsWith('/#')) {
            if (location.pathname !== '/') {
                window.location.href = href;
            } else {
                const id = href.replace('/#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const isMobile = windowWidth < 1024;

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '12px 0' : '20px 0',
                background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(13, 27, 42, 0.06)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img
                            src="/logo.png"
                            alt="Life RMiP"
                            style={{
                                height: scrolled ? '40px' : '50px',
                                transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                borderRadius: '50%',
                            }}
                        />
                        {(!scrolled || !isMobile) && (
                            <span style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 800,
                                fontSize: scrolled ? '1.1rem' : '1.3rem',
                                color: scrolled || isBlogPage ? '#0D1B2A' : '#ffffff',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                letterSpacing: '-0.02em',
                            }}>
                                Life RMiP
                            </span>
                        )}
                    </Link>

                    {!isMobile ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    onClick={(e) => {
                                        if (link.href.startsWith('/#')) {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }
                                    }}
                                    style={{
                                        padding: '10px 16px',
                                        borderRadius: '100px',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        color: scrolled || isBlogPage ? '#0D1B2A' : '#ffffff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        background: (isBlogPage && link.href === '/blog') ? 'rgba(183, 28, 28, 0.08)' : 'transparent',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = scrolled || isBlogPage ? 'rgba(13, 27, 42, 0.06)' : 'rgba(255, 255, 255, 0.12)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = (isBlogPage && link.href === '/blog') ? 'rgba(183, 28, 28, 0.08)' : 'transparent';
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="tel:+48602622840"
                                className="btn-premium"
                                style={{
                                    padding: '12px 28px',
                                    fontSize: '0.95rem',
                                    marginLeft: '8px',
                                }}
                            >
                                <Phone size={18} />
                                Zadzwoń
                            </a>
                        </div>
                    ) : (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                            aria-expanded={menuOpen}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px',
                                zIndex: 1001,
                            }}
                        >
                            <div style={{ width: '28px', height: '20px', position: 'relative' }}>
                                <span style={{
                                    display: 'block',
                                    width: '28px',
                                    height: '3px',
                                    background: menuOpen ? '#0D1B2A' : (scrolled || isBlogPage ? '#0D1B2A' : '#ffffff'),
                                    borderRadius: '2px',
                                    position: 'absolute',
                                    transition: 'all 0.3s ease',
                                    top: menuOpen ? '8px' : '0',
                                    transform: menuOpen ? 'rotate(45deg)' : 'none',
                                }} />
                                <span style={{
                                    display: 'block',
                                    width: '28px',
                                    height: '3px',
                                    background: menuOpen ? '#0D1B2A' : (scrolled || isBlogPage ? '#0D1B2A' : '#ffffff'),
                                    borderRadius: '2px',
                                    position: 'absolute',
                                    top: '8px',
                                    transition: 'all 0.3s ease',
                                    opacity: menuOpen ? 0 : 1,
                                }} />
                                <span style={{
                                    display: 'block',
                                    width: '28px',
                                    height: '3px',
                                    background: menuOpen ? '#0D1B2A' : (scrolled || isBlogPage ? '#0D1B2A' : '#ffffff'),
                                    borderRadius: '2px',
                                    position: 'absolute',
                                    transition: 'all 0.3s ease',
                                    top: menuOpen ? '8px' : '16px',
                                    transform: menuOpen ? 'rotate(-45deg)' : 'none',
                                }} />
                            </div>
                        </button>
                    )}
                </div>
            </nav>

            <AnimatePresence>
                {menuOpen && isMobile && (
                    <motion.div
                        data-lenis-prevent
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 999,
                            background: 'rgba(255, 255, 255, 0.97)',
                            backdropFilter: 'blur(20px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link
                                    to={link.href}
                                    onClick={(e) => {
                                        if (link.href.startsWith('/#')) {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        } else {
                                            setMenuOpen(false);
                                        }
                                    }}
                                    style={{
                                        fontSize: '1.4rem',
                                        fontWeight: 700,
                                        fontFamily: 'Outfit, sans-serif',
                                        color: '#0D1B2A',
                                        textDecoration: 'none',
                                        padding: '12px 32px',
                                        borderRadius: '16px',
                                        display: 'block',
                                        textAlign: 'center',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.05 }}
                            style={{ marginTop: '16px' }}
                        >
                            <a href="tel:+48602622840" className="btn-premium" style={{ fontSize: '1.1rem' }}>
                                <Phone size={20} />
                                Zadzwoń teraz
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
