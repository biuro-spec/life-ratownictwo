import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';

const FloatingButtons = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 900,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        }}>
            <AnimatePresence>
                {showScroll && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Przewiń do góry"
                        style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '16px',
                            background: 'white',
                            border: '1px solid rgba(13, 27, 42, 0.08)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 30px rgba(13, 27, 42, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        whileHover={{ y: -4 }}
                    >
                        <ArrowUp size={22} style={{ color: 'var(--secondary)' }} />
                    </motion.button>
                )}
            </AnimatePresence>

            <motion.a
                href="tel:+48000000000"
                aria-label="Zadzwoń"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--red-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(183, 28, 28, 0.4)',
                    animation: 'floatPulse 2s ease-in-out infinite',
                    textDecoration: 'none',
                }}
            >
                <Phone size={26} style={{ color: 'white' }} />
            </motion.a>

            <style>{`
                @keyframes floatPulse {
                    0%, 100% { box-shadow: 0 8px 30px rgba(183, 28, 28, 0.4); }
                    50% { box-shadow: 0 8px 40px rgba(183, 28, 28, 0.6), 0 0 0 12px rgba(183, 28, 28, 0.1); }
                }
            `}</style>
        </div>
    );
};

export default FloatingButtons;
