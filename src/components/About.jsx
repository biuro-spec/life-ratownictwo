import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Users, Clock, Award } from 'lucide-react';

const values = [
    { icon: HeartPulse, title: 'Bezpieczeństwo', desc: 'Priorytetem jest komfort i bezpieczeństwo każdego pacjenta podczas transportu.' },
    { icon: Users, title: 'Profesjonalizm', desc: 'Wykwalifikowany zespół ratowników medycznych i kierowców z doświadczeniem.' },
    { icon: Clock, title: 'Dostępność 24/7', desc: 'Dyżurujemy całą dobę, 7 dni w tygodniu. Zawsze gotowi do wyjazdu.' },
    { icon: Award, title: 'Doświadczenie', desc: 'Lata praktyki w transporcie medycznym na terenie całego regionu.' },
];

const About = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    return (
        <section id="o-nas" style={{
            padding: isMobile ? '80px 0' : '120px 0',
            background: 'var(--bg-light)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center',
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            display: 'block',
                        }}>O nas</span>
                        <h2 style={{
                            fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '3rem',
                            color: 'var(--secondary)',
                            marginBottom: '24px',
                        }}>
                            Zaufany partner w{' '}
                            <span style={{ color: 'var(--primary)' }}>transporcie medycznym</span>
                        </h2>
                        <p style={{
                            color: 'var(--charcoal)',
                            fontSize: '1.05rem',
                            lineHeight: 1.8,
                            marginBottom: '20px',
                        }}>
                            <strong>Life Ratownictwo Medyczne i Przewozy</strong> to firma z wieloletnim doświadczeniem w profesjonalnym transporcie medycznym. Działamy na terenie Raciborza, Rybnika, Wodzisławia Śląskiego, Kędzierzyna-Koźle i całego regionu.
                        </p>
                        <p style={{
                            color: 'var(--charcoal)',
                            fontSize: '1.05rem',
                            lineHeight: 1.8,
                            marginBottom: '20px',
                        }}>
                            Nasz zespół składa się z wykwalifikowanych ratowników medycznych i doświadczonych kierowców, którzy każdego dnia dbają o bezpieczeństwo i komfort pacjentów. Dysponujemy flotą trzech w pełni wyposażonych ambulansów z monitoringiem GPS.
                        </p>
                        <p style={{
                            color: 'var(--charcoal)',
                            fontSize: '1.05rem',
                            lineHeight: 1.8,
                        }}>
                            Współpracujemy ze szpitalami, przychodniami i placówkami medycznymi w regionie. Realizujemy transporty w ramach NFZ oraz na zlecenia prywatne. Niezależnie od pory dnia czy nocy - jesteśmy gotowi do działania.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px',
                        }}
                    >
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="card-premium"
                                style={{
                                    padding: '28px',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, rgba(183, 28, 28, 0.08), rgba(183, 28, 28, 0.04))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px',
                                }}>
                                    <item.icon size={26} style={{ color: 'var(--primary)' }} />
                                </div>
                                <h3 style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    color: 'var(--secondary)',
                                    marginBottom: '8px',
                                }}>{item.title}</h3>
                                <p style={{
                                    color: 'var(--charcoal)',
                                    fontSize: '0.88rem',
                                    lineHeight: 1.6,
                                }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
