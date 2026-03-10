import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: '#0D1B2A',
            color: '#ffffff',
            padding: '80px 0 0',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '48px',
                    paddingBottom: '60px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <img src="/logo.png" alt="Life RMiP" style={{ height: '48px', borderRadius: '50%' }} />
                            <span style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 800,
                                fontSize: '1.4rem',
                            }}>Life RMiP</span>
                        </div>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            lineHeight: 1.8,
                            fontSize: '0.95rem',
                        }}>
                            Profesjonalny transport medyczny w Raciborzu i okolicach. Bezpiecznie, szybko i z troską o pacjenta. Działamy 24/7.
                        </p>
                    </div>

                    <div>
                        <h4 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '1.1rem',
                            marginBottom: '20px',
                            fontWeight: 700,
                        }}>Nawigacja</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'O nas', href: '/#o-nas' },
                                { label: 'Usługi', href: '/#uslugi' },
                                { label: 'Flota', href: '/#flota' },
                                { label: 'Zespół', href: '/#zespol' },
                                { label: 'Kontakt', href: '/#kontakt' },
                                { label: 'Blog', href: '/blog' },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#E53935'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '1.1rem',
                            marginBottom: '20px',
                            fontWeight: 700,
                        }}>Kontakt</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <a href="tel:+48000000000" style={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.95rem',
                                transition: 'color 0.3s ease',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#E53935'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                            >
                                <Phone size={18} /> +48 000 000 000
                            </a>
                            <a href="mailto:kontakt@life-ratownictwo.pl" style={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.95rem',
                                transition: 'color 0.3s ease',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#E53935'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                            >
                                <Mail size={18} /> kontakt@life-ratownictwo.pl
                            </a>
                            <div style={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                fontSize: '0.95rem',
                            }}>
                                <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> Racibórz, woj. śląskie
                            </div>
                            <div style={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.95rem',
                            }}>
                                <Clock size={18} /> Dyżur 24/7
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    padding: '24px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontSize: '0.85rem',
                    }}>
                        &copy; {currentYear} Life Ratownictwo Medyczne i Przewozy. Wszelkie prawa zastrzeżone.
                    </p>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.3)',
                        fontSize: '0.8rem',
                    }}>
                        Realizacja: webstudio47
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
