import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const ServiceLayout = ({ title, titleAccent, subtitle, bgImage, bgPosition, heroImg, tiles, children }) => {
  return (
    <div>
      {/* Hero — pełny ekran jak strona główna */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover"
          style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: bgPosition || 'center' }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.97) 25%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.05) 80%, rgba(255,255,255,0) 100%)' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-32 pb-10 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-blue leading-[1.1] mb-4 sm:mb-6">
                {titleAccent ? (
                  <>{title} <span className="text-primary-red">{titleAccent}</span></>
                ) : title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                {subtitle}
              </p>

              {/* Mobile tiles */}
              {tiles && tiles.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
                  {tiles.map((tile, i) => (
                    <div key={i} className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 text-center shadow-md">
                      <div className="text-2xl font-black text-primary-red">{tile.value}</div>
                      <div className="text-navy-blue font-semibold text-sm">{tile.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {heroImg ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="hidden lg:flex items-center justify-center"
              >
                <img src={heroImg} alt={title} className="w-full max-w-xl drop-shadow-2xl" />
              </motion.div>
            ) : tiles && tiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:grid grid-cols-2 gap-5"
              >
                {tiles.map((tile, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-sm border-2 border-white rounded-3xl p-7 text-center shadow-lg shadow-navy-blue/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="text-3xl font-black text-primary-red mb-1">{tile.value}</div>
                    <div className="text-navy-blue font-bold text-sm">{tile.label}</div>
                    {tile.sub && <div className="text-gray-400 text-xs mt-1">{tile.sub}</div>}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            {children}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 bg-[#f4f7f6] p-10 rounded-3xl shadow-xl shadow-navy-blue/5 border border-white">
              <h3 className="text-2xl font-extrabold text-navy-blue mb-6">Szybki Kontakt</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Każde zgłoszenie jest inne. Zadzwoń, a nasz zespół błyskawicznie oceni sytuację i dokona darmowej wyceny.
              </p>
              <div className="space-y-4">
                <a href="tel:602622840" className="flex items-center gap-4 bg-primary-red text-white p-5 rounded-2xl font-bold shadow-lg shadow-primary-red/20 transition-all hover:scale-105">
                  <Phone /> +48 602 622 840
                </a>
                <a href="tel:505751858" className="flex items-center gap-4 bg-white text-navy-blue p-5 rounded-2xl font-bold border border-navy-blue/10 shadow-sm transition-all hover:scale-105">
                  <Phone /> +48 505 751 858
                </a>
                <a href="mailto:biuro@life-ratownictwo.pl" className="flex items-center gap-4 bg-navy-blue text-white p-5 rounded-2xl font-bold transition-all hover:scale-105">
                  <Mail /> biuro@life-ratownictwo.pl
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
