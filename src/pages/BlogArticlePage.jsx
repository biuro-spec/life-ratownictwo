import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHero from '../components/blog/BlogHero';
import BlogContent from '../components/blog/BlogContent';
import BlogSidebar from '../components/blog/BlogSidebar';
import RelatedArticles from '../components/blog/RelatedArticles';
import { blogArticles } from '../data/blogArticles';
import { updateMetaTags, generateArticleSchema, injectSchema, removeSchema } from '../utils/seo';

const BlogArticlePage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    const article = blogArticles.find(a => a.slug === slug);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        if (article) {
            updateMetaTags({
                title: `${article.title} | Life RMiP Blog`,
                description: article.metaDescription,
                keywords: article.keywords.join(', '),
                slug: article.slug,
                type: 'article',
            });
            injectSchema(generateArticleSchema(article));
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            removeSchema();
        };
    }, [article]);

    if (!article) {
        navigate('/404', { replace: true });
        return null;
    }

    const isMobile = windowWidth < 1024;

    return (
        <div>
            <Navbar scrolled={scrolled} />
            <BlogHero article={article} />

            <div style={{
                padding: isMobile ? '40px 0 60px' : '60px 0 80px',
                background: 'var(--bg-white)',
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 340px',
                    gap: '48px',
                    alignItems: 'start',
                }}>
                    <BlogContent content={article.content} />
                    <BlogSidebar keywords={article.keywords} />
                </div>
            </div>

            {article.relatedArticles && article.relatedArticles.length > 0 && (
                <RelatedArticles slugs={article.relatedArticles} />
            )}

            <Footer />
        </div>
    );
};

export default BlogArticlePage;
