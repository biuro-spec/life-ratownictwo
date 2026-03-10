import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/seo';

const BlogCard = ({ article, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
        >
            <Link
                to={`/blog/${article.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
            >
                <div className="card-premium" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{
                        height: '200px',
                        background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        <img src={article.image} alt="" style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            opacity: 0.3,
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            background: 'rgba(183, 28, 28, 0.9)',
                            color: 'white',
                            padding: '4px 14px',
                            borderRadius: '100px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                        }}>
                            {article.category}
                        </div>
                    </div>
                    <div style={{ padding: '24px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '12px',
                            fontSize: '0.82rem',
                            color: 'var(--charcoal)',
                        }}>
                            <span>{formatDate(article.publishDate)}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Clock size={14} /> {article.readTime} min
                            </span>
                        </div>
                        <h3 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            color: 'var(--secondary)',
                            marginBottom: '10px',
                            lineHeight: 1.3,
                        }}>
                            {article.title}
                        </h3>
                        <p style={{
                            color: 'var(--charcoal)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            marginBottom: '16px',
                        }}>
                            {article.excerpt}
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--primary)',
                            fontWeight: 600,
                            fontSize: '0.88rem',
                        }}>
                            Czytaj dalej <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;
