import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ChevronRight, Phone } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { blogArticles } from '../data/blogArticles';
import { formatDate } from '../utils/formatDate';

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  useSEO({ title: article.title, description: article.excerpt });

  const related = blogArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // If fewer than 3 related in same category, fill with others
  const relatedArticles = related.length >= 3
    ? related
    : [...related, ...blogArticles.filter(a => a.id !== article.id && a.category !== article.category).slice(0, 3 - related.length)];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#0f2b46' }}>
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(15,43,70,0) 20%, rgba(15,43,70,0.5) 60%, rgba(15,43,70,0.98) 100%)' }} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between pt-32 pb-0">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 px-4 py-2 rounded-full transition-all font-medium text-sm border border-white/20">
              <ArrowLeft size={15} /> Wróć do bloga
            </Link>
          </div>
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="bg-primary-red text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={14} /> {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {article.readTime} czytania
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          {/* Article Body */}
          <article className="lg:w-2/3 max-w-none">
            {article.content.map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={i} className="text-2xl font-extrabold text-navy-blue mt-10 mb-4 border-l-4 border-primary-red pl-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-3 mb-8">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-primary-red rounded-full mt-2.5 shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'cta') {
                const isPhone = block.link.startsWith('tel:');
                if (isPhone) {
                  return (
                    <a
                      key={i}
                      href={block.link}
                      className="flex items-center gap-3 bg-primary-red text-white p-6 rounded-2xl font-bold text-lg shadow-xl shadow-primary-red/20 hover:scale-[1.02] transition-all mt-8 mb-8"
                    >
                      <Phone size={24} />
                      {block.text}
                    </a>
                  );
                }
                return (
                  <Link
                    key={i}
                    to={block.link}
                    className="flex items-center gap-3 bg-navy-blue text-white p-6 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all mt-8 mb-8"
                  >
                    {block.text}
                    <ChevronRight size={20} />
                  </Link>
                );
              }
              return null;
            })}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              {/* Contact Widget */}
              <div className="bg-[#f4f7f6] p-8 rounded-3xl border border-white shadow-lg">
                <h3 className="text-xl font-extrabold text-navy-blue mb-4">Potrzebujesz pomocy?</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">Zadzwoń, a nasz zespół odpowie na Twoje pytania.</p>
                <a href="tel:+48602622840" className="flex items-center gap-3 bg-primary-red text-white p-4 rounded-2xl font-bold shadow-lg shadow-primary-red/20 hover:scale-105 transition-all mb-3">
                  <Phone size={18} /> +48 602 622 840
                </a>
                <a href="tel:+48505751858" className="flex items-center gap-3 bg-white text-navy-blue p-4 rounded-2xl font-bold border border-gray-100 hover:scale-105 transition-all">
                  <Phone size={18} /> +48 505 751 858
                </a>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-[#f4f7f6] p-8 rounded-3xl border border-white shadow-lg">
                  <h3 className="text-xl font-extrabold text-navy-blue mb-6">Powiązane artykuły</h3>
                  <div className="space-y-5">
                    {relatedArticles.map(ra => (
                      <Link key={ra.id} to={`/blog/${ra.slug}`} className="group block">
                        <div className="flex gap-4 items-start">
                          <img src={ra.image} alt={ra.title} loading="lazy" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                          <div>
                            <h4 className="font-bold text-navy-blue text-sm leading-snug group-hover:text-primary-red transition-colors">
                              {ra.title}
                            </h4>
                            <span className="text-gray-400 text-xs mt-1 block">{formatDate(ra.date)}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-[#f4f7f6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-navy-blue mb-10">Więcej artykułów</h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-navy-blue text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all"
          >
            Zobacz wszystkie artykuły <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
