import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const BlogSidebar = ({ keywords }) => {
    return (
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{
                background: 'var(--bg-light)',
                borderRadius: '20px',
                padding: '28px',
            }}>
                <h4 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--secondary)',
                    marginBottom: '16px',
                }}>Potrzebujesz transportu?</h4>
                <p style={{
                    color: 'var(--charcoal)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                }}>
                    Skontaktuj się z nami - zapewnimy bezpieczny transport medyczny na terenie Raciborza i okolic.
                </p>
                <a href="tel:+48602622840" className="btn-premium" style={{
                    padding: '12px 24px',
                    fontSize: '0.95rem',
                    width: '100%',
                    justifyContent: 'center',
                }}>
                    <Phone size={18} />
                    Zadzwoń teraz
                </a>
            </div>

            {keywords && keywords.length > 0 && (
                <div style={{
                    background: 'var(--bg-light)',
                    borderRadius: '20px',
                    padding: '28px',
                }}>
                    <h4 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--secondary)',
                        marginBottom: '16px',
                    }}>Tagi</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {keywords.map((kw, i) => (
                            <span key={i} style={{
                                padding: '6px 14px',
                                borderRadius: '100px',
                                background: 'white',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                color: 'var(--charcoal)',
                                border: '1px solid rgba(13, 27, 42, 0.08)',
                            }}>
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div style={{
                background: 'var(--bg-light)',
                borderRadius: '20px',
                padding: '28px',
            }}>
                <h4 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--secondary)',
                    marginBottom: '16px',
                }}>O Life RMiP</h4>
                <p style={{
                    color: 'var(--charcoal)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                }}>
                    Profesjonalny transport medyczny w Raciborzu i okolicach. Zespół wykwalifikowanych ratowników medycznych, nowoczesna flota ambulansów. Działamy 24/7.
                </p>
            </div>
        </aside>
    );
};

export default BlogSidebar;
