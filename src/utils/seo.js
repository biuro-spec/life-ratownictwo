import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://life-ratownictwo.pl';

const updateMetaTag = (name, content, attr = 'name') => {
    let element = document.querySelector(`meta[${attr}="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const updateCanonical = (url) => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', url);
};

export const updateMetaTags = ({ title, description, keywords, slug, type = 'website', path }) => {
    const url = slug ? `${SITE_URL}/blog/${slug}` : path ? `${SITE_URL}${path}` : SITE_URL;

    document.title = title;
    if (description) updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', title, 'property');
    if (description) updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', url, 'property');

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    if (description) updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${SITE_URL}/og-image.png`);

    updateCanonical(url);
};

export const resetMetaTags = () => {
    document.title = 'Life RMiP | Transport Medyczny Racibórz';
    const desc = 'Life Ratownictwo Medyczne i Przewozy - Profesjonalny transport medyczny w Raciborzu i okolicach. Transport sanitarny, NFZ, przewozy prywatne. 24/7.';
    updateMetaTag('description', desc);
    updateMetaTag('og:title', 'Life RMiP | Transport Medyczny Racibórz', 'property');
    updateMetaTag('og:description', desc, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', SITE_URL, 'property');

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Life RMiP | Transport Medyczny Racibórz');
    updateMetaTag('twitter:description', desc);
    updateMetaTag('twitter:image', `${SITE_URL}/og-image.png`);

    updateCanonical(SITE_URL);
};

export const generateArticleSchema = (article) => ([
    {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "headline": article.title,
        "description": article.metaDescription,
        "datePublished": article.publishDate,
        "author": { "@type": "Organization", "name": "Life Ratownictwo Medyczne i Przewozy" },
        "publisher": {
            "@type": "Organization",
            "name": "Life Ratownictwo Medyczne i Przewozy",
            "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${article.slug}` },
        "keywords": article.keywords.join(', '),
        "specialty": "Emergency Medicine"
    },
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.metaDescription,
        "image": article.image ? `${SITE_URL}${article.image}` : `${SITE_URL}/logo.png`,
        "datePublished": article.publishDate,
        "dateModified": article.publishDate,
        "author": { "@type": "Organization", "name": "Life Ratownictwo Medyczne i Przewozy" },
        "publisher": {
            "@type": "Organization",
            "name": "Life Ratownictwo Medyczne i Przewozy",
            "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${article.slug}` },
        "keywords": article.keywords.join(', '),
        "wordCount": article.readTime * 200,
        "inLanguage": "pl-PL"
    }
]);

export const injectSchema = (schemas) => {
    removeSchema();
    const items = Array.isArray(schemas) ? schemas : [schemas];
    items.forEach((schema) => {
        const script = document.createElement('script');
        script.className = 'article-schema';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    });
};

export const removeSchema = () => {
    document.querySelectorAll('.article-schema').forEach(el => el.remove());
};

export const useScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
};

export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const slugify = (text) =>
    text.toLowerCase()
        .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
        .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o')
        .replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z')
        .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
