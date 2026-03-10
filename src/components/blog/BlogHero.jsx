import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { formatDate } from '../../utils/seo';

const BlogHero = ({ article }) => {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)',
            padding: '140px 0 60px',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link to="/blog" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        marginBottom: '24px',
                        transition: 'color 0.3s ease',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                    >
                        <ArrowLeft size={18} />
                        Powrót do bloga
                    </Link>

                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(183, 28, 28, 0.2)',
                        border: '1px solid rgba(183, 28, 28, 0.3)',
                        borderRadius: '100px',
                        padding: '6px 16px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#E53935',
                        marginBottom: '16px',
                    }}>
                        {article.category}
                    </div>

                    <h1 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '20px',
                        maxWidth: '800px',
                        lineHeight: 1.15,
                    }}>
                        {article.title}
                    </h1>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '0.9rem',
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Calendar size={16} /> {formatDate(article.publishDate)}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Clock size={16} /> {article.readTime} min czytania
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogHero;
