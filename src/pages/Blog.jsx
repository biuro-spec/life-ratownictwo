import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { blogArticles, blogCategories } from '../data/blogArticles';
import { formatDate } from '../utils/formatDate';

const Blog = () => {
  useSEO({ title: 'Blog i Aktualności', description: 'Porady, aktualności i artykuły z zakresu ratownictwa medycznego, pierwszej pomocy, transportu sanitarnego i zabezpieczeń medycznych.' });
  const [activeCategory, setActiveCategory] = useState('Wszystkie');

  const filtered = activeCategory === 'Wszystkie'
    ? blogArticles
    : blogArticles.filter(a => a.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/gallery/ogólne/blog-aktualnosci-ratownictwo-medyczne.webp')" }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.97) 25%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.05) 80%, rgba(255,255,255,0) 100%)' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-32 pb-10 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-blue leading-[1.1] mb-4 sm:mb-6">
              Blog i <span className="text-primary-red">Aktualności</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
              Porady od czynnych ratowników medycznych, aktualności prawne i praktyczna wiedza z zakresu pierwszej pomocy.
            </p>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                    activeCategory === cat
                      ? 'bg-primary-red text-white shadow-lg shadow-primary-red/30'
                      : 'bg-white/80 backdrop-blur-sm text-navy-blue border border-white hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${article.slug}`} className="group block">
                  <div className="overflow-hidden rounded-3xl shadow-lg mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-primary-red/10 text-primary-red font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-navy-blue mb-3 leading-tight group-hover:text-primary-red transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar size={12} /> {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-navy-blue text-sm group-hover:text-primary-red group-hover:gap-2 transition-all">
                      Czytaj <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Brak artykułów w tej kategorii.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
