import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/servicesData';

const Team = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    return (
        <section id="zespol" style={{
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
                    }}>Nasz zespół</span>
                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '3rem',
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>
                        Doświadczeni <span style={{ color: 'var(--primary)' }}>profesjonaliści</span>
                    </h2>
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Nasz zespół to wykwalifikowani ratownicy medyczni i doświadczeni kierowcy, którzy codziennie dbają o bezpieczeństwo pacjentów.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                    gap: '20px',
                }}>
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="card-premium"
                            style={{
                                padding: '28px',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                width: '72px',
                                height: '72px',
                                borderRadius: '50%',
                                background: 'var(--red-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 16px',
                            }}>
                                <span style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontWeight: 800,
                                    fontSize: '1.5rem',
                                    color: '#ffffff',
                                }}>{member.initials}</span>
                            </div>
                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: 'var(--secondary)',
                                marginBottom: '6px',
                            }}>{member.name}</h3>
                            <p style={{
                                color: 'var(--accent)',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                marginBottom: '12px',
                            }}>{member.role}</p>
                            <p style={{
                                color: 'var(--charcoal)',
                                fontSize: '0.85rem',
                                lineHeight: 1.6,
                            }}>{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    #zespol .card-premium {
                        padding: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Team;
