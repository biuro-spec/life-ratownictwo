import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'life_cookie_consent';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = (type) => {
        const consent = {
            necessary: true,
            functional: type === 'all',
            statistical: type === 'all',
            marketing: type === 'all',
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        left: '24px',
                        right: '24px',
                        maxWidth: '520px',
                        zIndex: 1500,
                        background: 'white',
                        borderRadius: '20px',
                        padding: '24px',
                        boxShadow: '0 20px 60px rgba(13, 27, 42, 0.15)',
                        border: '1px solid rgba(13, 27, 42, 0.06)',
                    }}
                >
                    <button
                        onClick={() => accept('necessary')}
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                        }}
                    >
                        <X size={18} style={{ color: 'var(--charcoal)' }} />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(183, 28, 28, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}>
                            <Cookie size={22} style={{ color: 'var(--primary)' }} />
                        </div>
                        <div>
                            <h4 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: 'var(--secondary)',
                                marginBottom: '8px',
                            }}>Pliki cookies</h4>
                            <p style={{
                                color: 'var(--charcoal)',
                                fontSize: '0.85rem',
                                lineHeight: 1.6,
                                marginBottom: '16px',
                            }}>
                                Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony. Klikając "Akceptuję" zgadzasz się na ich wykorzystanie.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => accept('all')}
                                    className="btn-premium"
                                    style={{
                                        padding: '10px 24px',
                                        fontSize: '0.88rem',
                                    }}
                                >
                                    Akceptuję
                                </button>
                                <button
                                    onClick={() => accept('necessary')}
                                    style={{
                                        padding: '10px 24px',
                                        fontSize: '0.88rem',
                                        borderRadius: '100px',
                                        border: '2px solid rgba(13, 27, 42, 0.12)',
                                        background: 'transparent',
                                        color: 'var(--charcoal)',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Tylko niezbędne
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
