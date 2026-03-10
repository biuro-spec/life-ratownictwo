import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        document.title = '404 - Strona nie znaleziona | Life RMiP';
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar scrolled={scrolled} />
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '120px 32px 80px',
                background: 'var(--bg-light)',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '500px' }}
                >
                    <div style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '8rem',
                        fontWeight: 800,
                        lineHeight: 1,
                        background: 'var(--red-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '16px',
                    }}>404</div>
                    <h1 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>Strona nie znaleziona</h1>
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                        marginBottom: '32px',
                    }}>
                        Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn-premium" style={{ fontSize: '1rem' }}>
                            <Home size={18} />
                            Strona główna
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn-outline"
                            style={{
                                color: 'var(--secondary)',
                                borderColor: 'rgba(13, 27, 42, 0.15)',
                                fontSize: '1rem',
                            }}
                        >
                            <ArrowLeft size={18} />
                            Wróć
                        </button>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
