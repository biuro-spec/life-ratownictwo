import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryItems = [
    { id: 1, alt: 'Ambulans Life RMiP', color: '#1B3A5C' },
    { id: 2, alt: 'Wyposażenie medyczne', color: '#2D4A6A' },
    { id: 3, alt: 'Zespół ratowników', color: '#0D2B4A' },
    { id: 4, alt: 'Transport pacjenta', color: '#1A3350' },
    { id: 5, alt: 'Karetka w trasie', color: '#243D5A' },
    { id: 6, alt: 'Nosze transportowe', color: '#162E48' },
];

const Gallery = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    const navigateLightbox = (dir) => {
        if (lightbox === null) return;
        const newIdx = (lightbox + dir + galleryItems.length) % galleryItems.length;
        setLightbox(newIdx);
    };

    return (
        <section id="galeria" style={{
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
                    }}>Galeria</span>
                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '3rem',
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>
                        Zobacz nas <span style={{ color: 'var(--primary)' }}>w akcji</span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: '16px',
                }}>
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            onClick={() => setLightbox(i)}
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                aspectRatio: '4/3',
                                background: item.color,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <Camera size={40} style={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                            <span style={{
                                color: 'rgba(255, 255, 255, 0.4)',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                            }}>{item.alt}</span>
                        </motion.div>
                    ))}
                </div>

                <p style={{
                    textAlign: 'center',
                    color: 'var(--charcoal)',
                    fontSize: '0.9rem',
                    marginTop: '24px',
                    fontStyle: 'italic',
                }}>
                    Zdjęcia zostaną uzupełnione wkrótce
                </p>
            </div>

            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        data-lenis-prevent
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2000,
                            background: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                        }}
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                            }}
                        >
                            <X size={24} style={{ color: 'white' }} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                            style={{
                                position: 'absolute',
                                left: '20px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ChevronLeft size={24} style={{ color: 'white' }} />
                        </button>

                        <motion.div
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '80%',
                                maxWidth: '800px',
                                aspectRatio: '16/10',
                                borderRadius: '16px',
                                background: galleryItems[lightbox].color,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '16px',
                            }}
                        >
                            <Camera size={64} style={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                            <span style={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: '1.1rem',
                            }}>{galleryItems[lightbox].alt}</span>
                        </motion.div>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ChevronRight size={24} style={{ color: 'white' }} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
