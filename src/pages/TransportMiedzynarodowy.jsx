import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ChevronRight, Globe, Shield, FileCheck, MapPin, Clock, HelpCircle, Plane, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const TransportMiedzynarodowy = () => {
  useSEO({
    title: 'Transport Medyczny Niemcy–Polska | Krankentransport Polen',
    description: 'Międzynarodowy transport medyczny Polska–Niemcy. Repatriacja medyczna, współpraca z Krankenkassen. Racibórz — 25 km od granicy. Zadzwoń 24/7!'
  });

  const services = [
    {
      icon: <Plane size={28} />,
      title: "Repatriacja medyczna",
      titleDe: "Krankenrückholung",
      desc: "Powrót pacjenta do kraju po wypadku, hospitalizacji lub leczeniu za granicą. Bezpieczny transport z łóżka do łóżka.",
    },
    {
      icon: <Globe size={28} />,
      title: "Transport na leczenie planowane",
      titleDe: "Geplante Behandlung",
      desc: "Przewóz pacjenta na zaplanowany zabieg lub konsultację w Niemczech lub Polsce — z formularzem S2/E112.",
    },
    {
      icon: <Shield size={28} />,
      title: "Transport ubezpieczeniowy",
      titleDe: "Versicherungstransport",
      desc: "Realizacja transportu na zlecenie niemieckiego ubezpieczyciela (Krankenkasse / Auslandskrankenversicherung).",
    },
    {
      icon: <FileCheck size={28} />,
      title: "Koordynacja dokumentów",
      titleDe: "Dokumentenkoordination",
      desc: "Pomagamy z dokumentacją: EKUZ, S2, Kostenübernahme, zaświadczenia lekarskie — w języku polskim i niemieckim.",
    },
  ];

  const routes = [
    { from: "Racibórz", to: "Drezno (Dresden)", dist: "~380 km", time: "~4h" },
    { from: "Racibórz", to: "Berlin", dist: "~530 km", time: "~5,5h" },
    { from: "Racibórz", to: "Monachium (München)", dist: "~600 km", time: "~6h" },
    { from: "Racibórz", to: "Frankfurt am Main", dist: "~750 km", time: "~7h" },
    { from: "Racibórz", to: "Hamburg", dist: "~800 km", time: "~8h" },
    { from: "Racibórz", to: "Praga (Praha)", dist: "~350 km", time: "~3,5h" },
  ];

  const advantages = [
    "25 km od przejścia granicznego Chałupki–Bohumín",
    "Zespół mówiący po polsku i niemiecku",
    "Współpraca z niemieckimi ubezpieczycielami",
    "Ambulanse spełniające normy PN-EN 1789",
    "Transport z łóżka do łóżka — door-to-door",
    "Pełne wyposażenie ratunkowe (kardiomonitor, defibrylator, tlen)",
    "Doświadczenie w transporcie transgranicznym od 2012 roku",
    "Pomoc w załatwieniu formalności i dokumentacji",
  ];

  const faqsPL = [
    { q: "Jak zorganizować transport chorego z Niemiec do Polski?", a: "Skontaktuj się z nami telefonicznie lub przez formularz. Potrzebujemy informacji o stanie zdrowia pacjenta, lokalizacji szpitala w Niemczech i miejscu docelowym w Polsce. Zajmiemy się całą logistyką." },
    { q: "Ile kosztuje transport medyczny z Niemiec?", a: "Koszt zależy od odległości, stanu pacjenta i wymaganego typu ambulansu. Stawki od ok. 2,20 zł/km. Wycena indywidualna jest bezpłatna — zadzwoń." },
    { q: "Czy NFZ pokrywa koszty transportu z zagranicy?", a: "Co do zasady nie, ale NFZ może pokryć koszty w ramach \u201Etransportu ekonomicznego\u201D je\u015Bli dalsze leczenie za granic\u0105 jest dro\u017Csze ni\u017C leczenie w Polsce + transport. Wymagana jest decyzja Dyrektora Oddzia\u0142u NFZ." },
    { q: "Jakie dokumenty są potrzebne?", a: "Dokumentacja medyczna pacjenta, zaświadczenie lekarskie o możliwości transportu, dokument tożsamości, karta EKUZ lub polisa ubezpieczeniowa." },
  ];

  const faqsDE = [
    { q: "Was kostet ein Krankentransport von Polen nach Deutschland?", a: "Die Kosten hängen von der Entfernung, dem Gesundheitszustand und dem benötigten Ambulanztyp ab. Kontaktieren Sie uns für ein kostenloses Angebot." },
    { q: "Übernimmt meine Krankenkasse die Kosten?", a: "Die gesetzliche Krankenkasse übernimmt grundsätzlich keine Rücktransportkosten. Im grenznahen Bereich gibt es Ausnahmen. Eine private Auslandskrankenversicherung deckt in der Regel die Kosten. Wir helfen Ihnen bei der Abwicklung." },
    { q: "Wie schnell kann der Transport organisiert werden?", a: "In dringenden Fällen innerhalb weniger Stunden. Geplante Transporte werden in 24–48 Stunden organisiert." },
    { q: "Welche medizinische Betreuung ist während des Transports gewährleistet?", a: "Je nach Patientenzustand fahren Arzt, Rettungssanitäter und/oder Krankenschwestern mit. Unsere Fahrzeuge sind mit modernster medizinischer Ausrüstung ausgestattet." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery/transport/Transport medyczny Śląsk.webp')" }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.25) 85%, rgba(255,255,255,0.15) 100%)' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-32 pb-10 sm:pb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="bg-navy-blue/10 text-navy-blue font-bold px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2">
                <Languages size={16} /> PL / DE
              </span>
              <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-2 rounded-full text-xs sm:text-sm">
                24/7 erreichbar
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-blue leading-[1.1] mb-2 sm:mb-4">
              Transport Medyczny <span className="text-primary-red">Polska–Niemcy</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-gray-400 mb-4 sm:mb-6">Krankentransport Polen–Deutschland</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Międzynarodowy transport pacjentów między Polską a Niemcami. Repatriacja medyczna, transport ubezpieczeniowy, współpraca z Krankenkassen. Baza w Raciborzu — 25 km od granicy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:602622840" className="bg-primary-red text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-red/20 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                <Phone size={20} /> Zadzwoń / Anrufen
              </a>
              <a href="mailto:biuro@life-ratownictwo.pl" className="bg-navy-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-navy-blue/20 flex items-center justify-center hover:bg-navy-blue-light transition-all hover:scale-105">
                biuro@life-ratownictwo.pl
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usługi / Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-4">Nasze usługi <span className="text-primary-red">transgraniczne</span></h2>
            <p className="text-gray-400 text-lg">Unsere grenzüberschreitenden Dienstleistungen</p>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-navy-blue text-white rounded-2xl flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy-blue mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-sm font-bold mb-3">{service.titleDe}</p>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-4">Jak <span className="text-primary-red">organizujemy</span> transport?</h2>
            <p className="text-gray-400 text-lg">So funktioniert es</p>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { num: "1", title: "Kontakt", desc: "Zadzwoń lub napisz. Opisz sytuację pacjenta." },
              { num: "2", title: "Ocena medyczna", desc: "Nasz zespół oceni stan i dobierze typ transportu." },
              { num: "3", title: "Ubezpieczenie", desc: "Pomagamy z dokumentacją ubezpieczeniową." },
              { num: "4", title: "Transport", desc: "Bezpieczny przewóz z pełnym wyposażeniem." },
              { num: "5", title: "Przekazanie", desc: "Przekazujemy pacjenta do placówki lub rodziny." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl border-2 border-white shadow-sm text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-red text-white rounded-xl flex items-center justify-center font-black text-lg mx-auto mb-4 shadow-lg shadow-primary-red/20">
                  {step.num}
                </div>
                <h3 className="font-extrabold text-navy-blue mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trasy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-4">Główne <span className="text-primary-red">trasy</span></h2>
            <p className="text-gray-400 text-lg">Hauptstrecken ab Ratibor (Racibórz)</p>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mt-6"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-[#f4f7f6] rounded-3xl overflow-hidden border-2 border-white shadow-sm">
            {routes.map((route, i) => (
              <div key={i} className={`flex items-center justify-between p-6 ${i !== routes.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary-red shrink-0" size={18} />
                  <div>
                    <span className="font-bold text-navy-blue">{route.from} → {route.to}</span>
                    <span className="text-gray-400 text-sm ml-2">({route.dist})</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock size={14} />
                  <span className="font-bold text-sm">{route.time}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Realizujemy transporty do każdego miasta w Niemczech, Austrii i Czechach.</p>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-red/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Warum <span className="text-primary-red">Life-Ratownictwo?</span></h2>
            <p className="text-white/50 text-lg">Dlaczego warto wybrać nas?</p>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="text-primary-red shrink-0 mt-1" size={20} />
                <p className="text-lg opacity-85 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubezpieczenie */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-4">Ubezpieczenie i <span className="text-primary-red">koszty</span></h2>
            <p className="text-gray-400 text-lg">Versicherung und Kostenübernahme</p>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Prywatne ubezpieczenie",
                titleDe: "Auslandskrankenversicherung",
                desc: "Najlepsza opcja. Polisy prywatne (ADAC, Allianz, HanseMerkur, ERV) pokrywaj\u0105 \u201Emedycznie uzasadniony\u201D transport. Pomagamy w kontakcie z ubezpieczycielem.",
                color: "bg-primary-red",
              },
              {
                title: "Kasa chorych (GKV)",
                titleDe: "Gesetzliche Krankenkasse",
                desc: "Ustawowe ubezpieczenie zdrowotne NIE pokrywa repatriacji. Wyjątek: strefa przygraniczna — a Racibórz jest 25 km od granicy.",
                color: "bg-primary-red/70",
              },
              {
                title: "NFZ / Formularz S2",
                titleDe: "NFZ / S2-Formular",
                desc: "NFZ mo\u017Ce pokry\u0107 koszty \u201Etransportu ekonomicznego\u201D gdy dalsze leczenie za granic\u0105 jest dro\u017Csze ni\u017C w Polsce + transport. Formularz S2 dla leczenia planowanego.",
                color: "bg-navy-blue",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className={`w-full h-1.5 ${item.color} absolute top-0 left-0 rounded-t-3xl`}></div>
                <h3 className="text-xl font-extrabold text-navy-blue mb-1 mt-2">{item.title}</h3>
                <p className="text-gray-400 text-sm font-bold mb-4">{item.titleDe}</p>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <HelpCircle className="text-primary-red w-12 h-12 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue mb-4">Pytania i <span className="text-primary-red">odpowiedzi</span></h2>
            <p className="text-gray-400">Häufig gestellte Fragen</p>
            <div className="h-1.5 w-20 bg-primary-red mx-auto rounded-full mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-navy-blue mb-4 flex items-center gap-2">
              <span className="bg-white border-2 border-gray-200 rounded-lg px-3 py-1 text-sm font-black">PL</span>
              Po polsku
            </h3>
            <div className="space-y-4 mb-12">
              {faqsPL.map((faq, i) => (
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
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                </motion.details>
              ))}
            </div>

            <h3 className="text-xl font-bold text-navy-blue mb-4 flex items-center gap-2">
              <span className="bg-white border-2 border-gray-200 rounded-lg px-3 py-1 text-sm font-black">DE</span>
              Auf Deutsch
            </h3>
            <div className="space-y-4">
              {faqsDE.map((faq, i) => (
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
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-red text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-2">Brauchen Sie einen Krankentransport?</h2>
          <p className="text-2xl font-bold opacity-70 mb-6">Potrzebujesz transportu międzynarodowego?</p>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Zadzwoń — zorganizujemy transport z każdego miasta w Niemczech, Austrii i Czechach.</p>
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
            <Link to="/transport-prywatny" className="text-navy-blue font-bold hover:text-primary-red transition-colors">
              Transport Prywatny
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportMiedzynarodowy;
