import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowDown, Ambulance, Clock, Shield } from 'lucide-react';

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    const stats = [
        { icon: Ambulance, value: '3', label: 'Karetki' },
        { icon: Clock, value: '24/7', label: 'Dyżur' },
        { icon: Shield, value: '5+', label: 'Lat doświadczenia' },
    ];

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #0D1B2A 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: isMobile ? '120px 20px 60px' : '0 32px',
        }}>
            {/* Decorative blobs */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(183, 28, 28, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(21, 101, 192, 0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
                maxWidth: '900px',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(183, 28, 28, 0.15)',
                        border: '1px solid rgba(183, 28, 28, 0.3)',
                        borderRadius: '100px',
                        padding: '10px 24px',
                        marginBottom: '32px',
                    }}
                >
                    <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#E53935',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite',
                    }} />
                    <span style={{
                        color: '#E53935',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                    }}>
                        TRANSPORT MEDYCZNY 24/7
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: isMobile ? 'clamp(2.2rem, 8vw, 3.5rem)' : 'clamp(3rem, 5vw, 4.5rem)',
                        color: '#ffffff',
                        marginBottom: '24px',
                        maxWidth: '800px',
                    }}
                >
                    Profesjonalny{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #E53935, #FF7043)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Transport Medyczny
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: isMobile ? '1.05rem' : '1.25rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7,
                        maxWidth: '650px',
                        marginBottom: '40px',
                    }}
                >
                    Bezpieczny przewóz pacjentów na terenie Raciborza i okolic. Transport sanitarny, NFZ i prywatny. Zaufaj doświadczonemu zespołowi.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: '64px',
                    }}
                >
                    <a href="tel:+48602622840" className="btn-premium" style={{ fontSize: isMobile ? '1rem' : '1.1rem' }}>
                        <Phone size={20} />
                        Zadzwoń teraz
                    </a>
                    <a href="#uslugi" className="btn-outline" style={{ fontSize: isMobile ? '1rem' : '1.1rem' }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('uslugi')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Poznaj nasze usługi
                        <ArrowDown size={18} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: 'flex',
                        gap: isMobile ? '24px' : '48px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                background: 'rgba(183, 28, 28, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <stat.icon size={22} style={{ color: '#E53935' }} />
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontWeight: 800,
                                    fontSize: '1.4rem',
                                    color: '#ffffff',
                                    lineHeight: 1,
                                }}>{stat.value}</div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    marginTop: '4px',
                                }}>{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.5); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
