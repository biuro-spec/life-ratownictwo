import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/blog/BlogCard';
import { blogArticles, blogCategories } from '../data/blogArticles';
import { updateMetaTags } from '../utils/seo';

const BlogListPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        updateMetaTags({
            title: 'Blog | Life RMiP - Transport Medyczny Racibórz',
            description: 'Blog Life RMiP - poradniki, aktualności i wiedza o transporcie medycznym, pierwszej pomocy i opiece nad pacjentem.',
            keywords: 'blog, transport medyczny, pierwsza pomoc, poradniki, Racibórz',
            path: '/blog',
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 1024;

    const filtered = selectedCategory === 'Wszystkie'
        ? blogArticles
        : blogArticles.filter(a => a.category === selectedCategory);

    return (
        <div>
            <Navbar scrolled={scrolled} />

            <div style={{
                background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)',
                padding: '140px 0 60px',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            color: '#E53935',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            display: 'block',
                        }}>Blog</span>
                        <h1 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: isMobile ? 'clamp(2rem, 7vw, 3rem)' : '3.5rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            marginBottom: '16px',
                        }}>
                            Wiedza i <span style={{
                                background: 'linear-gradient(135deg, #E53935, #FF7043)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>poradniki</span>
                        </h1>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '1.1rem',
                            maxWidth: '500px',
                        }}>
                            Praktyczna wiedza o transporcie medycznym, pierwszej pomocy i opiece nad pacjentem.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div style={{
                padding: isMobile ? '40px 0 80px' : '60px 0 120px',
                background: 'var(--bg-light)',
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '40px',
                        flexWrap: 'wrap',
                    }}>
                        {blogCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '10px 22px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    background: selectedCategory === cat ? 'var(--red-gradient)' : 'white',
                                    color: selectedCategory === cat ? 'white' : 'var(--charcoal)',
                                    boxShadow: selectedCategory === cat ? '0 4px 15px rgba(183, 28, 28, 0.2)' : 'none',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: '24px',
                    }}>
                        {filtered.map((article, i) => (
                            <BlogCard key={article.slug} article={article} index={i} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 0',
                            color: 'var(--charcoal)',
                        }}>
                            <p style={{ fontSize: '1.1rem' }}>Brak artykułów w tej kategorii.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogListPage;
