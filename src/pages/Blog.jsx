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
      <section className="relative pt-40 pb-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(15,43,70,0.92), rgba(15,43,70,0.75)), url('/assets/images/Life-Ratownictwo-Medyczne-i-Pielegniarstwo.webp')",
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-red/10 skew-x-12 translate-x-1/4 z-[1]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Blog i <span className="text-primary-red">Aktualności</span></h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-light">
            Porady od czynnych ratowników medycznych, aktualności prawne i praktyczna wiedza z zakresu pierwszej pomocy.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#f4f7f6] border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-red text-white shadow-lg shadow-primary-red/20'
                    : 'bg-white text-gray-600 hover:text-navy-blue hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
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
