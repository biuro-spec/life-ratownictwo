import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ambulance, Accessibility, ShieldCheck, Building2, Car, MapPin, X, ChevronRight } from 'lucide-react';
import { services } from '../data/servicesData';

const iconMap = {
    Ambulance, Accessibility, ShieldCheck, Building2, Car, MapPin,
};

const Services = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    return (
        <section id="uslugi" style={{
            padding: isMobile ? '80px 0' : '120px 0',
            background: 'var(--bg-white)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                        display: 'block',
                    }}>Usługi</span>
                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '3rem',
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>
                        Kompleksowy <span style={{ color: 'var(--primary)' }}>transport medyczny</span>
                    </h2>
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Oferujemy szeroki zakres usług transportu medycznego dostosowany do potrzeb pacjentów i placówek medycznych.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: '24px',
                }}>
                    {services.map((service, i) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="card-premium"
                                style={{
                                    padding: '36px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => setSelected(service)}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '20px',
                                    background: 'var(--red-gradient)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                }}>
                                    {Icon && <Icon size={28} style={{ color: '#ffffff' }} />}
                                </div>
                                <h3 style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    color: 'var(--secondary)',
                                    marginBottom: '12px',
                                }}>{service.title}</h3>
                                <p style={{
                                    color: 'var(--charcoal)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                    marginBottom: '16px',
                                }}>{service.shortDesc}</p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'var(--primary)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                }}>
                                    Dowiedz się więcej <ChevronRight size={16} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        data-lenis-prevent
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2000,
                            background: 'rgba(13, 27, 42, 0.6)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                        }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: isMobile ? '32px 24px' : '48px',
                                maxWidth: '600px',
                                width: '100%',
                                maxHeight: '85vh',
                                overflowY: 'auto',
                                position: 'relative',
                            }}
                        >
                            <button
                                onClick={() => setSelected(null)}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'var(--bg-light)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <X size={20} style={{ color: 'var(--secondary)' }} />
                            </button>

                            {(() => {
                                const Icon = iconMap[selected.icon];
                                return (
                                    <div style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '22px',
                                        background: 'var(--red-gradient)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '24px',
                                    }}>
                                        {Icon && <Icon size={32} style={{ color: '#ffffff' }} />}
                                    </div>
                                );
                            })()}

                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                color: 'var(--secondary)',
                                marginBottom: '16px',
                            }}>{selected.title}</h3>

                            <p style={{
                                color: 'var(--charcoal)',
                                fontSize: '1rem',
                                lineHeight: 1.8,
                                marginBottom: '24px',
                            }}>{selected.description}</p>

                            {selected.features && (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '12px',
                                }}>
                                    {selected.features.map((feat, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '10px 14px',
                                            background: 'var(--bg-light)',
                                            borderRadius: '12px',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            color: 'var(--secondary)',
                                        }}>
                                            <div style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: 'var(--primary)',
                                                flexShrink: 0,
                                            }} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
