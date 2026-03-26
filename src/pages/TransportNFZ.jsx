import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ChevronRight, Clock, FileText, Stethoscope, HeartPulse, Building2, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const TransportNFZ = () => {
  useSEO({
    title: 'Transport Sanitarny NFZ Racibórz',
    description: 'Bezpłatny transport sanitarny na NFZ w Raciborzu i okolicach. Współpracujemy z ~10 przychodniami POZ. Dializy, rehabilitacja, chemioterapia. Zadzwoń!'
  });

  const categories = [
    {
      title: "Bezpłatny \u2014 100% NFZ",
      subtitle: "Art. 41 ust. 1",
      desc: "Konieczność podjęcia natychmiastowego leczenia lub zachowania ciągłości leczenia szpitalnego.",
      examples: "Dializy, chemioterapia, radioterapia, rehabilitacja, kontrole pooperacyjne",
      color: "bg-primary-red",
      textColor: "text-primary-red",
      bgColor: "bg-red-50",
    },
    {
      title: "Bezpłatny \u2014 dysfunkcja ruchu",
      subtitle: "Art. 41 ust. 2",
      desc: "Dysfunkcja narządu ruchu uniemożliwiająca korzystanie ze środków transportu publicznego.",
      examples: "Osoby leżące, na wózkach inwalidzkich, po udarach, z porażeniami",
      color: "bg-navy-blue",
      textColor: "text-navy-blue",
      bgColor: "bg-[#f4f7f6]",
    },
    {
      title: "Częściowo odpłatny",
      subtitle: "Art. 41 ust. 3 \u2014 NFZ 40%, pacjent 60%",
      desc: "Pacjent wymaga pomocy innej osoby przy korzystaniu z transportu publicznego i cierpi na schorzenie z listy NFZ.",
      examples: "Choroby nowotworowe, krążenia, nerwowe, metaboliczne, psychiczne i inne",
      color: "bg-primary-red/70",
      textColor: "text-primary-red",
      bgColor: "bg-red-50/50",
    },
  ];

  const steps = [
    { num: "1", title: "Wizyta u lekarza POZ", desc: "Zgłoś się do swojego lekarza rodzinnego i poproś o zlecenie na transport sanitarny." },
    { num: "2", title: "Zlecenie od lekarza", desc: "Lekarz oceni wskazania medyczne i wystawi zlecenie \u2014 określi typ transportu i odpłatność." },
    { num: "3", title: "Kontakt z nami", desc: "Przychodnia lub Ty kontaktujesz się z naszym dyspozytorem. Ustalamy termin i szczegóły." },
    { num: "4", title: "Przyjeżdżamy po pacjenta", desc: "Nasz zespół ratowników przyjeżdża pod wskazany adres z w pełni wyposażonym ambulansem." },
    { num: "5", title: "Bezpieczny transport", desc: "Dowozimy do placówki medycznej i z powrotem. Transport z łóżka do łóżka \u2014 pomagamy na schodach." },
  ];

  const situations = [
    { icon: <HeartPulse size={24} />, title: "Dializy", desc: "Regularne transporty 2-3x w tygodniu z domu na oddział dializ i z powrotem." },
    { icon: <Stethoscope size={24} />, title: "Chemioterapia / Radioterapia", desc: "Przewóz na cykliczne zabiegi onkologiczne do szpitala lub centrum onkologii." },
    { icon: <Building2 size={24} />, title: "Rehabilitacja", desc: "Transport na codzienne zabiegi rehabilitacyjne \u2014 po udarach, wypadkach, endoprotezach." },
    { icon: <FileText size={24} />, title: "Wizyty kontrolne", desc: "Przewóz do specjalisty, na badania diagnostyczne (MRI, tomografia, USG)." },
    { icon: <ArrowRight size={24} />, title: "Transfery międzyszpitalne", desc: "Przeniesienie pacjenta między oddziałami lub szpitalami na zlecenie lekarza." },
    { icon: <Clock size={24} />, title: "Wypis ze szpitala", desc: "Bezpieczny powrót do domu po hospitalizacji \u2014 transport leżący lub siedzący." },
  ];

  const faqs = [
    { q: "Czy transport sanitarny na NFZ jest bezpłatny?", a: "Tak, w dwóch przypadkach: (1) konieczność natychmiastowego leczenia lub zachowania ciągłości leczenia, (2) dysfunkcja narządu ruchu uniemożliwiająca transport publiczny. W pozostałych przypadkach pacjent płaci 60%, NFZ dopłaca 40%." },
    { q: "Jak zamówić transport sanitarny na NFZ?", a: "Należy udać się do swojego lekarza POZ (rodzinnego), który oceni wskazania medyczne i wystawi zlecenie. Przychodnia kontaktuje naszą firmę transportową." },
    { q: "Kto wystawia zlecenie na transport sanitarny?", a: "Lekarz ubezpieczenia zdrowotnego \u2014 najczęściej lekarz POZ, ale też specjalista lub lekarz szpitalny." },
    { q: "W jakich godzinach realizowany jest transport?", a: "Od poniedziałku do piątku, w godzinach 8:00\u201318:00, z wyłączeniem dni ustawowo wolnych od pracy." },
    { q: "Czy transport przysługuje osobie leżącej?", a: "Tak. Osoba leżąca z dysfunkcją narządu ruchu ma prawo do bezpłatnego transportu sanitarnego. Ambulans jest wyposażony w nosze." },
    { q: "Czy mogę jechać na dializy na NFZ?", a: "Tak. Regularne zabiegi (dializy, chemioterapia, radioterapia, rehabilitacja) to klasyczny przypadek zachowania ciągłości leczenia \u2014 transport jest bezpłatny." },
    { q: "Co jeśli potrzebuję transportu powyżej 120 km?", a: "To tzw. \u201Etransport daleki\u201D w POZ. Wymaga złożenia wniosku do Dyrektora Oddziału Wojewódzkiego NFZ." },
    { q: "Czym się różni transport sanitarny od pogotowia (112)?", a: "Pogotowie ratunkowe (112) jest dla stanów zagrożenia życia. Transport sanitarny to planowy lub pilny przewóz do placówki medycznej, gdy nie ma bezpośredniego zagrożenia życia." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery/transport/Transport medyczny Rybnik.webp')" }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.25) 85%, rgba(255,255,255,0.15) 100%)' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-32 pb-10 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <span className="bg-primary-red/10 text-primary-red font-bold px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-primary-red rounded-full animate-pulse"></span>
                Finansowany przez NFZ
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-blue leading-[1.1] mb-4 sm:mb-6">
                Transport Sanitarny <span className="text-primary-red">NFZ</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Bezpłatny przewóz pacjentów na zlecenie lekarza POZ. Współpracujemy z przychodniami w Raciborzu i okolicach &mdash; dializy, rehabilitacja, chemioterapia i więcej.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:602622840" className="bg-primary-red text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-red/20 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                  <Phone size={20} /> Zadzwoń: 602 622 840
                </a>
                <a href="#jak-to-dziala" className="bg-navy-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-navy-blue/20 flex items-center justify-center hover:bg-navy-blue-light transition-all hover:scale-105">
                  Jak to działa?
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-5">
              {[
                { value: "~10", label: "Przychodni POZ", sub: "współpracujących" },
                { value: "0 zł", label: "Bezpłatny", sub: "na zlecenie lekarza" },
                { value: "500+", label: "Transportów", sub: "rocznie na NFZ" },
                { value: "24h", label: "Realizacja", sub: "planowe zlecenia" },
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

      {/* Komu przysługuje */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Komu przysługuje transport <span className="text-primary-red">na NFZ?</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Na podstawie Art. 41 Ustawy o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                <div className={`w-full h-1.5 ${cat.color} absolute top-0 left-0 rounded-t-3xl`}></div>
                <div className={`inline-block ${cat.bgColor} ${cat.textColor} font-bold text-xs px-3 py-1 rounded-full mb-4`}>{cat.subtitle}</div>
                <h3 className="text-xl font-extrabold text-navy-blue mb-3">{cat.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.desc}</p>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Przykłady:</span>
                  <p className="text-sm text-gray-600 mt-1">{cat.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak to działa */}
      <section id="jak-to-dziala" className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Jak to <span className="text-primary-red">działa?</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">Od wizyty u lekarza do bezpiecznego transportu &mdash; 5 prostych kroków.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="flex items-start gap-6 bg-white p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary-red text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-primary-red/20">{step.num}</div>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiedy realizujemy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-6">Kiedy <span className="text-primary-red">realizujemy</span> transporty?</h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {situations.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }} className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all">
                <div className="text-primary-red mb-4">{item.icon}</div>
                <h3 className="text-lg font-extrabold text-navy-blue mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-red/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Dlaczego <span className="text-primary-red">Life-Ratownictwo?</span></h2>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Umowy z ~10 przychodniami POZ w regionie Raciborza",
              "Wykwalifikowany personel \u2014 ratownicy medyczni z PRM",
              "W pełni wyposażone ambulanse (kardiomonitor, tlen, defibrylator)",
              "Transport z łóżka do łóżka \u2014 pomagamy na schodach",
              "Punktualność i niezawodność \u2014 codziennie, bez odwołań",
              "Znajomość regionu \u2014 szybkie dotarcie do każdego adresu",
              "Empatia i profesjonalizm wobec pacjentów i ich rodzin",
              "Dezynfekcja pojazdów po każdym transporcie",
            ].map((text, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary-red shrink-0 mt-1" size={20} />
                <p className="text-lg opacity-85 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dla przychodni POZ */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] p-12 md:p-16 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 bg-navy-blue rounded-3xl flex items-center justify-center">
                  <Building2 className="text-white" size={40} />
                </div>
              </div>
              <div className="md:w-3/4">
                <span className="text-primary-red font-bold text-sm uppercase tracking-wider">Dla Przychodni POZ</span>
                <h3 className="text-3xl font-extrabold text-navy-blue mb-4 mt-2">Szukasz podwykonawcy transportu sanitarnego?</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Oferujemy profesjonalną realizację transportu sanitarnego jako podwykonawca POZ. Dysponujemy nowoczesną flotą ambulansów i wykwalifikowanym zespołem ratowników medycznych. Zapewniamy punktualność, niezawodność i pełną dokumentację.
                </p>
                <a href="tel:602622840" className="inline-flex items-center gap-2 bg-primary-red text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary-red/20">
                  <Phone size={18} /> Nawiąż współpracę
                </a>
              </div>
            </div>
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
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="group bg-[#f4f7f6] rounded-2xl border-2 border-white shadow-sm hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-navy-blue text-lg list-none">
                  {faq.q}
                  <ChevronRight size={20} className="text-primary-red transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-red text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Twój lekarz wystawił zlecenie?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Zadzwoń &mdash; zajmiemy się resztą. Bezpieczny transport z domu do placówki medycznej i z powrotem.</p>
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
            <Link to="/transport-prywatny" className="text-navy-blue font-bold hover:text-primary-red transition-colors">Transport Prywatny</Link>
            <span className="text-gray-300">|</span>
            <Link to="/transport-miedzynarodowy" className="text-navy-blue font-bold hover:text-primary-red transition-colors">Transport Międzynarodowy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportNFZ;
