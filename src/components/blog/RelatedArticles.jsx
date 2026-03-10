import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { blogArticles } from '../../data/blogArticles';
import { formatDate } from '../../utils/seo';

const RelatedArticles = ({ slugs }) => {
    const related = slugs
        .map(slug => blogArticles.find(a => a.slug === slug))
        .filter(Boolean);

    if (related.length === 0) return null;

    return (
        <section style={{
            padding: '80px 0',
            background: 'var(--bg-light)',
        }}>
            <div className="container">
                <h2 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--secondary)',
                    marginBottom: '40px',
                    textAlign: 'center',
                }}>
                    Powiązane <span style={{ color: 'var(--primary)' }}>artykuły</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Math.min(related.length, 3)}, 1fr)`,
                    gap: '24px',
                }}>
                    {related.map((article, i) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={`/blog/${article.slug}`}
                                style={{ textDecoration: 'none', display: 'block' }}
                            >
                                <div className="card-premium" style={{ padding: '28px' }}>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--primary)',
                                        fontWeight: 700,
                                        marginBottom: '10px',
                                    }}>{article.category}</div>
                                    <h3 style={{
                                        fontFamily: 'Outfit, sans-serif',
                                        fontSize: '1.05rem',
                                        fontWeight: 700,
                                        color: 'var(--secondary)',
                                        marginBottom: '10px',
                                        lineHeight: 1.3,
                                    }}>{article.title}</h3>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: 'var(--charcoal)',
                                        fontSize: '0.82rem',
                                    }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Clock size={14} /> {article.readTime} min
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 600 }}>
                                            Czytaj <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    section > div > div[style*="grid"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default RelatedArticles;
