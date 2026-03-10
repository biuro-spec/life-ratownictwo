import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Check, Radio } from 'lucide-react';
import { fleet } from '../data/servicesData';

const Fleet = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    return (
        <section id="flota" style={{
            padding: isMobile ? '80px 0' : '120px 0',
            background: 'var(--bg-light)',
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
                    }}>Nasza flota</span>
                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '3rem',
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>
                        Nowoczesne <span style={{ color: 'var(--primary)' }}>ambulanse</span>
                    </h2>
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Dysponujemy trzema w pełni wyposażonymi ambulansami z monitoringiem GPS, gotowymi do natychmiastowego wyjazdu.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: '28px',
                }}>
                    {fleet.map((vehicle, i) => (
                        <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="card-premium"
                            style={{ padding: '0', overflow: 'hidden' }}
                        >
                            {/* Vehicle illustration placeholder */}
                            <div style={{
                                height: '200px',
                                background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                            }}>
                                <Truck size={64} style={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'rgba(76, 175, 80, 0.2)',
                                    border: '1px solid rgba(76, 175, 80, 0.4)',
                                    borderRadius: '100px',
                                    padding: '6px 14px',
                                }}>
                                    <Radio size={12} style={{ color: '#4CAF50' }} />
                                    <span style={{
                                        color: '#4CAF50',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                    }}>GPS Tracking</span>
                                </div>
                            </div>

                            <div style={{ padding: '28px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: '16px',
                                }}>
                                    <h3 style={{
                                        fontFamily: 'Outfit, sans-serif',
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        color: 'var(--secondary)',
                                    }}>{vehicle.name}</h3>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: 'var(--accent)',
                                        background: 'rgba(21, 101, 192, 0.08)',
                                        padding: '4px 12px',
                                        borderRadius: '100px',
                                    }}>{vehicle.type}</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                }}>
                                    {vehicle.features.map((feat, j) => (
                                        <div key={j} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '6px 12px',
                                            background: 'var(--bg-light)',
                                            borderRadius: '8px',
                                            fontSize: '0.82rem',
                                            color: 'var(--charcoal)',
                                        }}>
                                            <Check size={14} style={{ color: 'var(--primary)' }} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '20px',
                        background: 'rgba(21, 101, 192, 0.06)',
                        borderRadius: '16px',
                        border: '1px solid rgba(21, 101, 192, 0.1)',
                    }}
                >
                    <MapPin size={20} style={{ color: 'var(--accent)' }} />
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                    }}>
                        Wszystkie pojazdy wyposażone w system GPS Cartrack do monitoringu tras w czasie rzeczywistym
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Fleet;
