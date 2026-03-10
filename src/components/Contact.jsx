import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    const validatePhone = (phone) => {
        const cleaned = phone.replace(/[\s\-\(\)]/g, '');
        return /^(\+48)?[0-9]{9}$/.test(cleaned);
    };

    const validateEmail = (email) => {
        if (!email) return true;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Podaj imię i nazwisko';
        if (!formData.phone.trim()) newErrors.phone = 'Podaj numer telefonu';
        else if (!validatePhone(formData.phone)) newErrors.phone = 'Nieprawidłowy numer telefonu';
        if (formData.email && !validateEmail(formData.email)) newErrors.email = 'Nieprawidłowy adres email';
        if (!formData.message.trim()) newErrors.message = 'Wpisz wiadomość';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 4000);
        }, 1500);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const inputStyle = (field) => ({
        width: '100%',
        padding: '16px 20px',
        borderRadius: '14px',
        border: errors[field] ? '2px solid #E53935' : '2px solid rgba(13, 27, 42, 0.08)',
        fontSize: '1rem',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: 'var(--text-main)',
        background: 'white',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    });

    const contactInfo = [
        { icon: Phone, label: 'Mariusz - Dyspozytor', value: '+48 602 622 840', href: 'tel:+48602622840', primary: true },
        { icon: Phone, label: 'Natka - Dyspozytor', value: '+48 505 751 858', href: 'tel:+48505751858', primary: true },
        { icon: Mail, label: 'Email', value: 'kontakt@life-ratownictwo.pl', href: 'mailto:kontakt@life-ratownictwo.pl' },
        { icon: MapPin, label: 'Lokalizacja', value: 'Racibórz, woj. śląskie' },
        { icon: Clock, label: 'Godziny', value: 'Dyżur 24/7, 365 dni w roku' },
    ];

    return (
        <section id="kontakt" style={{
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
                    }}>Kontakt</span>
                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '3rem',
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>
                        Skontaktuj się <span style={{ color: 'var(--primary)' }}>z nami</span>
                    </h2>
                    <p style={{
                        color: 'var(--charcoal)',
                        fontSize: '1.1rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Potrzebujesz transportu medycznego? Zadzwoń lub napisz - odpowiemy najszybciej jak to możliwe.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '48px',
                    alignItems: 'start',
                }}>
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Imię i nazwisko *"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                style={inputStyle('name')}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = errors.name ? '#E53935' : 'rgba(13, 27, 42, 0.08)'}
                            />
                            {errors.name && <p style={{ color: '#E53935', fontSize: '0.82rem', marginTop: '6px' }}>{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Numer telefonu *"
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                style={inputStyle('phone')}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = errors.phone ? '#E53935' : 'rgba(13, 27, 42, 0.08)'}
                            />
                            {errors.phone && <p style={{ color: '#E53935', fontSize: '0.82rem', marginTop: '6px' }}>{errors.phone}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email (opcjonalnie)"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                style={inputStyle('email')}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = errors.email ? '#E53935' : 'rgba(13, 27, 42, 0.08)'}
                            />
                            {errors.email && <p style={{ color: '#E53935', fontSize: '0.82rem', marginTop: '6px' }}>{errors.email}</p>}
                        </div>
                        <div>
                            <textarea
                                placeholder="Twoja wiadomość *"
                                value={formData.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                                rows={5}
                                style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = errors.message ? '#E53935' : 'rgba(13, 27, 42, 0.08)'}
                            />
                            {errors.message && <p style={{ color: '#E53935', fontSize: '0.82rem', marginTop: '6px' }}>{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="btn-premium"
                            disabled={status === 'sending'}
                            style={{
                                width: '100%',
                                opacity: status === 'sending' ? 0.7 : 1,
                            }}
                        >
                            {status === 'sending' ? 'Wysyłanie...' : status === 'success' ? (
                                <><CheckCircle size={20} /> Wysłano!</>
                            ) : (
                                <><Send size={18} /> Wyślij wiadomość</>
                            )}
                        </button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                    >
                        {contactInfo.map((info, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '16px',
                                padding: '20px',
                                borderRadius: '16px',
                                background: 'var(--bg-light)',
                                border: '1px solid rgba(13, 27, 42, 0.04)',
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: info.primary ? 'var(--red-gradient)' : 'linear-gradient(135deg, rgba(21, 101, 192, 0.08), rgba(21, 101, 192, 0.04))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <info.icon size={22} style={{ color: info.primary ? '#ffffff' : 'var(--accent)' }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--charcoal)',
                                        marginBottom: '4px',
                                    }}>{info.label}</p>
                                    {info.href ? (
                                        <a href={info.href} style={{
                                            fontWeight: 700,
                                            fontSize: info.primary ? '1.2rem' : '1rem',
                                            color: 'var(--secondary)',
                                            textDecoration: 'none',
                                        }}
                                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--secondary)'}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p style={{
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            color: 'var(--secondary)',
                                        }}>{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        <a
                            href="tel:+48602622840"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                padding: '20px',
                                borderRadius: '20px',
                                background: 'var(--red-gradient)',
                                color: 'white',
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 800,
                                fontSize: '1.3rem',
                                textDecoration: 'none',
                                boxShadow: '0 10px 40px rgba(183, 28, 28, 0.3)',
                                animation: 'phonePulse 2s ease-in-out infinite',
                            }}
                        >
                            <Phone size={28} />
                            Zadzwoń teraz
                        </a>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @keyframes phonePulse {
                    0%, 100% { box-shadow: 0 10px 40px rgba(183, 28, 28, 0.3); }
                    50% { box-shadow: 0 10px 50px rgba(183, 28, 28, 0.5), 0 0 0 12px rgba(183, 28, 28, 0.08); }
                }
            `}</style>
        </section>
    );
};

export default Contact;
