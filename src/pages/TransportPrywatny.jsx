import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ChevronRight, Clock, Bed, Armchair, Stethoscope, MapPin, CalendarClock, HelpCircle, Wallet, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const TransportPrywatny = () => {
  useSEO({
    title: 'Prywatny Transport Medyczny Racibórz',
    description: 'Prywatny transport medyczny i sanitarny w Raciborzu i na Śląsku. Ambulanse z ratownikiem medycznym 24/7. Transport leżący i siedzący. Zadzwoń!'
  });

  const transportTypes = [
    {
      icon: <Bed size={28} />,
      title: "Transport leżący",
      desc: "Pacjenci niezdolni do siedzenia — po operacjach, z urazami kręgosłupa, w stanie ciężkim. Ambulans z noszami medycznymi.",
    },
    {
      icon: <Armchair size={28} />,
      title: "Transport siedzący",
      desc: "Pacjenci mogący siedzieć, ale wymagający nadzoru lub asysty. Komfortowy przewóz z opieką ratownika.",
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Transport z ratownikiem",
      desc: "Ambulans podstawowy z ratownikiem medycznym. Monitorowanie parametrów życiowych w trakcie jazdy.",
    },
    {
      icon: <CalendarClock size={28} />,
      title: "Transport cykliczny",
      desc: "Regularne przewozy na dializy, rehabilitację, chemioterapię. Stały harmonogram, zawsze ten sam zespół.",
    },
  ];

  const situations = [
    "Wypis pacjenta ze szpitala do domu",
    "Regularne dializy (2-3x w tygodniu)",
    "Rehabilitacja pooperacyjna i poudarowa",
    "Wizyty u specjalistów w innych miastach",
    "Badania diagnostyczne (MRI, tomografia)",
    "Transfery między szpitalami",
    "Transport osób starszych i niepełnosprawnych",
    "Przewóz na chemioterapię i radioterapię",
  ];

  const pricingInfo = [
    { label: "Ambulans transportowy", desc: "kierowca + sanitariusz", price: "od 4 zł/km" },
    { label: "Ambulans z ratownikiem", desc: "kierowca + ratownik medyczny", price: "od 5,50 zł/km" },
    { label: "Opłata za podjęcie", desc: "jednorazowa", price: "od 150 zł" },
    { label: "Oczekiwanie", desc: "za każdą godzinę", price: "100–150 zł" },
  ];

  const routes = [
    { from: "Racibórz", to: "Rybnik", dist: "~45 km", price: "250–400 zł" },
    { from: "Racibórz", to: "Katowice", dist: "~95 km", price: "500–700 zł" },
    { from: "Racibórz", to: "Kędzierzyn-Koźle", dist: "~30 km", price: "200–320 zł" },
    { from: "Racibórz", to: "Wodzisław Śl.", dist: "~25 km", price: "180–290 zł" },
    { from: "Racibórz", to: "Opole", dist: "~85 km", price: "450–650 zł" },
    { from: "Racibórz", to: "Wrocław", dist: "~170 km", price: "800–1200 zł" },
  ];

  const faqs = [
    { q: "Czy potrzebne jest skierowanie od lekarza?", a: "Nie. Do prywatnego transportu medycznego nie jest wymagane żadne skierowanie. Wystarczy zadzwonić i zamówić transport." },
    { q: "Ile kosztuje prywatny transport medyczny?", a: "Koszt zależy od odległości, rodzaju transportu i składu zespołu. Orientacyjna stawka to 4–6 zł/km + opłata bazowa. Dokładną wycenę podajemy po kontakcie telefonicznym." },
    { q: "Czy przewieziecie pacjenta po schodach?", a: "Tak. Realizujemy transport \u201Ez łóżka do łóżka\u201D \u2014 zespół przeniesie pacjenta po schodach, nawet bez windy." },
    { q: "Czy można zamówić transport w weekend?", a: "Tak, działamy 24/7, także w weekendy i święta." },
    { q: "Jak szybko możecie przyjechać?", a: "Transporty planowe umawiamy z wyprzedzeniem. W pilnych przypadkach staramy się przyjechać jak najszybciej — zazwyczaj w ciągu 1-2 godzin." },
    { q: "Czy zespół posiada kwalifikacje medyczne?", a: "Tak. Nasz zespół to doświadczeni ratownicy medyczni z uprawnieniami, przeszkoleni w zakresie ratownictwa i transportu pacjentów." },
    { q: "Można zamówić regularne transporty (np. na dializy)?", a: "Tak. Oferujemy stałe transporty cykliczne. Ustalamy harmonogram dopasowany do potrzeb pacjenta." },
    { q: "Czy transport jest możliwy za granicę?", a: "Tak. Realizujemy transporty międzynarodowe, m.in. do Niemiec, Austrii i Czech. Sprawdź naszą stronę transportu międzynarodowego." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery/transport/Transport medyczny Racibórz.webp')" }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.25) 85%, rgba(255,255,255,0.15) 100%)' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-32 pb-10 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <span className="bg-primary-red/10 text-primary-red font-bold px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-primary-red rounded-full animate-pulse"></span>
                Dostępny 24/7
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-blue leading-[1.1] mb-4 sm:mb-6">
                Prywatny Transport <span className="text-primary-red">Medyczny</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Bezpieczny przewóz pacjentów ambulansem z opieką ratownika medycznego. Bez skierowania, bez kolejek — wystarczy zadzwonić.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:602622840" className="bg-primary-red text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-red/20 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                  <Phone size={20} /> Zamów transport
                </a>
                <a href="#cennik" className="bg-navy-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-navy-blue/20 flex items-center justify-center gap-2 hover:bg-navy-blue-light transition-all hover:scale-105">
                  <Wallet size={20} /> Sprawdź cennik
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-5">
              {[
                { value: "24/7", label: "Dostępność", sub: "weekendy i święta" },
                { value: "500+", label: "Transportów", sub: "rocznie" },
                { value: "3", label: "Ambulanse", sub: "w stałej gotowości" },
                { value: "od 4 zł", label: "Za kilometr", sub: "wycena indywidualna" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm border-2 border-white rounded-3xl p-7 text-center shadow-lg shadow-navy-blue/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-3xl font-black text-primary-red mb-1">{stat.value}</div>
                  <div className="text-navy-blue font-bold text-sm">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Typy transportu */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Rodzaje <span className="text-primary-red">transportu</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Dobieramy typ transportu do stanu zdrowia i potrzeb pacjenta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all flex gap-6"
              >
                <div className="w-16 h-16 bg-primary-red/10 text-primary-red rounded-2xl flex items-center justify-center shrink-0">
                  {type.icon}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-blue mb-2">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak to działa */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">3 proste <span className="text-primary-red">kroki</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: "1", title: "Zadzwoń", desc: "Opisz stan pacjenta, trasę i termin. Wycenę podamy od razu." },
              { num: "2", title: "Ustalamy szczegóły", desc: "Dobieramy typ ambulansu i zespół. Potwierdzamy termin." },
              { num: "3", title: "Bezpieczny transport", desc: "Przyjeżdżamy, przenosimy pacjenta i bezpiecznie dowozimy do celu." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border-2 border-white shadow-sm text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-red text-white rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-6 shadow-lg shadow-primary-red/20">
                  {step.num}
                </div>
                <h3 className="text-xl font-extrabold text-navy-blue mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiedy potrzebujesz */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Kiedy zamówić <span className="text-primary-red">transport?</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {situations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[#f4f7f6] p-5 rounded-2xl border-2 border-white shadow-sm"
              >
                <CheckCircle2 className="text-primary-red/70 shrink-0" size={20} />
                <span className="font-semibold text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Orientacyjny <span className="text-primary-red">cennik</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Dokładną wycenę podajemy telefonicznie po poznaniu szczegółów transportu.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {pricingInfo.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border-2 border-white shadow-sm flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-blue">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                  <div className="font-black text-primary-red text-lg">{item.price}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-navy-blue mb-6 text-center">Przykładowe trasy z Raciborza</h3>
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-white shadow-sm">
              {routes.map((route, i) => (
                <div key={i} className={`flex items-center justify-between p-5 ${i !== routes.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary-red shrink-0" size={16} />
                    <span className="font-semibold text-navy-blue">{route.from} → {route.to}</span>
                    <span className="text-gray-400 text-sm">({route.dist})</span>
                  </div>
                  <span className="font-bold text-primary-red">{route.price}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">* Ceny orientacyjne. Dokładna wycena po kontakcie. Dopłata za weekendy i święta.</p>
          </div>
        </div>
      </section>

      {/* Wyposażenie */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-red/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Wyposażenie <span className="text-primary-red">ambulansów</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 text-lg">Nasze ambulanse spełniają normy PN-EN i są wyposażone w pełen zakres sprzętu ratunkowego.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Kardiomonitor", "Defibrylator", "Tlen medyczny", "Ssak medyczny",
              "Pulsoksymetr", "Nosze medyczne", "Szyny próżniowe", "Zestaw do intubacji",
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-4 text-center">
                <CheckCircle2 className="text-primary-red mx-auto mb-2" size={20} />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <HelpCircle className="text-primary-red w-12 h-12 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Najczęściej zadawane <span className="text-primary-red">pytania</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-[#f4f7f6] rounded-2xl border-2 border-white shadow-sm hover:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-navy-blue text-lg list-none">
                  {faq.q}
                  <ChevronRight size={20} className="text-primary-red transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-red text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Potrzebujesz transportu medycznego?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Zadzwoń — podamy wycenę i zorganizujemy transport. Bez skierowania, bez kolejek.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:602622840" className="bg-white text-primary-red px-10 py-5 rounded-xl font-black text-xl shadow-xl hover:scale-105 transition-all flex items-center gap-3">
              <Phone size={24} /> 602 622 840
            </a>
            <a href="tel:505751858" className="bg-white/20 backdrop-blur text-white px-10 py-5 rounded-xl font-bold text-xl border border-white/30 hover:bg-white/30 transition-all flex items-center gap-3">
              <Phone size={24} /> 505 751 858
            </a>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/transport-medyczny" className="text-navy-blue font-bold hover:text-primary-red transition-colors flex items-center gap-1">
              <ChevronRight size={14} className="rotate-180" /> Transport Medyczny
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/transport-nfz" className="text-navy-blue font-bold hover:text-primary-red transition-colors">
              Transport NFZ
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/transport-miedzynarodowy" className="text-navy-blue font-bold hover:text-primary-red transition-colors">
              Transport Międzynarodowy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportPrywatny;
