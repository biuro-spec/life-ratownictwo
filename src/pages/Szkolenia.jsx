import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Heart, CheckCircle2, Users, ChevronRight, Phone, Mail, ShieldCheck, Truck, Stethoscope, Baby, Zap, Flame, Bone, Brain, HeartPulse, Activity, Star, Building2, School, BadgeCheck, Clock, MapPin, FileCheck, X, ChevronLeft, ChevronRight as ChevronRightIcon, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const galleryPhotos = [
  { src: "/assets/images/szkolenia/szkolenia-dzieci.webp", alt: "Szkolenia z pierwszej pomocy dla dzieci" },
  { src: "/assets/images/szkolenia/szkolenia-firmy.webp", alt: "Szkolenia z pierwszej pomocy dla firm" },
  { src: "/assets/images/szkolenia/szkolenia-1.webp", alt: "Ćwiczenia praktyczne na szkoleniu" },
  { src: "/assets/images/szkolenia/szkolenia-2.webp", alt: "Szkolenie z ratownikiem medycznym" },
  { src: "/assets/images/szkolenia/szkolenia-3.webp", alt: "Nauka resuscytacji na fantomie" },
  { src: "/assets/images/szkolenia/szkolenia-4.webp", alt: "Szkolenie z pierwszej pomocy" },
  { src: "/assets/images/szkolenia/szkolenia-5.webp", alt: "Ćwiczenia z AED" },
  { src: "/assets/images/szkolenia/szkolenia-6.webp", alt: "Praktyka na szkoleniu" },
  { src: "/assets/images/szkolenia/szkolenia-7.webp", alt: "Szkolenie dla grupy" },
  { src: "/assets/images/szkolenia/szkolenia-8.webp", alt: "Szkolenie w terenie" },
  { src: "/assets/images/szkolenia/szkolenia-9.webp", alt: "Zajęcia z pierwszej pomocy" },
  { src: "/assets/images/szkolenia/szkolenia-10.webp", alt: "Ratownictwo medyczne szkolenie" },
  { src: "/assets/images/szkolenia/szkolenia-11.webp", alt: "Szkolenie z karetką" },
  { src: "/assets/images/szkolenia/szkolenia-12.webp", alt: "Ćwiczenia praktyczne" },
];

const Szkolenia = () => {
  const [lightbox, setLightbox] = useState(null);

  useSEO({
    title: "Szkolenia z Pierwszej Pomocy Racib\u00F3rz \u2013 Firmy, Szkoły, Przedszkola | LIFE-Ratownictwo",
    description: "Szkolenia z pierwszej pomocy prowadzone przez ratownik\u00F3w medycznych PRM. Dla firm, szk\u00F3ł i przedszkoli. Przyjeżdżamy z karetką i namiotem ratowniczym. Fantomy Laerdal QCPR, AED. Tel. 602 622 840."
  });

  const programItems = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Bezpieczeństwo własne i miejsca zdarzenia",
      text: "Zanim pomożesz innym, musisz zadbać o siebie. Uczymy jak ocenić zagrożenia na miejscu zdarzenia \u2014 ruch drogowy, substancje chemiczne, porażenie prądem, pożar. Jak zabezpieczyć miejsce wypadku, jak chronić siebie i poszkodowanego przed dodatkowymi obrażeniami. To fundament, od kt\u00F3rego zaczyna się każda interwencja ratownicza.",
    },
    {
      icon: <Activity size={24} />,
      title: "Ocena poszkodowanego i wzywanie pomocy",
      text: "Systematyczne podejście do osoby poszkodowanej \u2014 ocena przytomności, oddechu, reakcji na bodźce. Skuteczne wzywanie pomocy pod numer 112 i przekazywanie informacji dyspozytorowi.",
    },
    {
      icon: <Brain size={24} />,
      title: "Osoba przytomna, nieprzytomna, omdlenie \u2014 kluczowe r\u00F3żnice",
      text: "To jeden z najważniejszych element\u00F3w szkolenia. Uczymy rozr\u00F3żniać stany, kt\u00F3re wyglądają podobnie, ale wymagają zupełnie innej reakcji.",
      details: [
        "Osobę przytomną z omdleniem \u2014 wszystkie przyczyny omdleń, mechanizm powstawania, objawy zapowiadające, właściwe postępowanie",
        "Osobę nieprzytomną oddychającą \u2014 pozycja boczna ustalona, monitorowanie, kiedy wzywać pomoc",
        "Osobę nieprzytomną nieoddychającą \u2014 natychmiastowe rozpoczęcie RKO",
        "R\u00F3żnice między omdleniem a utratą przytomności \u2014 bo mylenie tych stan\u00F3w może kosztować życie",
      ],
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Zatrzymanie krążenia i resuscytacja (RKO + AED)",
      text: "Rozpoznanie osoby, kt\u00F3ra nie oddycha i nie reaguje. Technika resuscytacji krążeniowo-oddechowej dla dorosłych, dzieci i niemowląt \u2014 każda grupa wiekowa to osobny fantom i osobne ćwiczenia, bo technika, siła uciśnięć i głębokość są zupełnie inne. Obsługa automatycznego defibrylatora AED \u2014 przyklejanie elektrod, analiza rytmu, wykonanie defibrylacji. Każdy uczestnik ćwiczy to osobiście, nie tylko obserwuje.",
    },
    {
      icon: <Heart size={24} />,
      title: "Zawał mięśnia sercowego",
      text: "Omawiamy mechanizm zawału \u2014 co dzieje się w naczyniu wieńcowym, dlaczego każda minuta ma znaczenie. Uczymy rozpoznawać objawy zawału, w tym te nieoczywiste i nietypowe. Wyjaśniamy, co robią ratownicy medyczni po przyjeździe na miejsce i dlaczego szybka reakcja świadka zdarzenia ma kluczowe znaczenie.",
    },
    {
      icon: <Zap size={24} />,
      title: "Padaczka",
      text: "Jak wygląda napad padaczkowy, jak bezpiecznie zachować się podczas napadu i po nim, czego absolutnie nie robić oraz kiedy wzywać pomoc. Omawiamy r\u00F3żne rodzaje napad\u00F3w i typowe błędy popełniane przez świadk\u00F3w.",
    },
    {
      icon: <Activity size={24} />,
      title: "Śpiączka cukrzycowa i hipoglikemia",
      text: "R\u00F3żnice między hipoglikemią a hiperglikemią \u2014 objawy, mechanizm, postępowanie. Kiedy podać cukier, a kiedy bezwzględnie nie. Jak rozpoznać stan cukrzycowy u osoby, kt\u00F3ra nie może nam powiedzieć co jej dolega.",
    },
    {
      icon: <Brain size={24} />,
      title: "Udar m\u00F3zgu",
      text: "Omawiamy mechanizm udaru niedokrwiennego i krwotocznego \u2014 dlaczego czas reakcji decyduje o życiu i sprawności pacjenta. Uczymy rozpoznawać objawy udaru metodą FAST (Face, Arms, Speech, Time) oraz co robić do przyjazdu karetki. Wyjaśniamy r\u00F3żnice między udarem a innymi stanami, kt\u00F3re mogą go naśladować.",
    },
    {
      icon: <Phone size={24} />,
      title: "Zasady wzywania Zespołu Ratownictwa Medycznego",
      text: "Kiedy dzwonić pod 112, a kiedy pod 999. Jakie informacje przekazać dyspozytorowi, żeby zespół przyjechał jak najszybciej. Omawiamy strukturę systemu PRM, rodzaje zespoł\u00F3w (P i S), co robić gdy dyspozytor zadaje pytania, i dlaczego nie wolno rozłączać się pierwszy. Ćwiczymy prowadzenie rozmowy z dyspozytorem na realistycznych scenariuszach.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Zadławienie",
      text: "Postępowanie przy zadławieniu u dorosłego, dziecka i niemowlęcia \u2014 bo technika jest zupełnie inna dla każdej grupy wiekowej. Uderzenia w plecy, uchwyt Heimlicha, postępowanie gdy poszkodowany traci przytomność. Ćwiczenia praktyczne na fantomach i kamizelkach.",
    },
    {
      icon: <Bone size={24} />,
      title: "Urazy, krwawienia i złamania",
      text: "Tamowanie krwawień w tym masywnych z użyciem opaski uciskowej (stazy taktycznej). Postępowanie przy złamaniach i zwichnięciach. Unieruchamianie i bezpieczny transport poszkodowanego.",
    },
    {
      icon: <Flame size={24} />,
      title: "Oparzenia i odmrożenia",
      text: "Klasyfikacja i ocena rozległości oparzeń, prawidłowe postępowanie i najczęstsze błędy. Postępowanie przy odmrożeniach, wychłodzeniu og\u00F3lnym i przegrzaniu organizmu.",
    },
  ];

  const equipmentItems = [
    {
      title: "Fantom dorosłego \u2014 Laerdal Resusci Anne QCPR Full Body",
      text: "Jeden z najnowocześniejszych fantom\u00F3w szkoleniowych na świecie. Technologia QCPR mierzy w czasie rzeczywistym głębokość i częstotliwość uciśnięć, relaksację klatki piersiowej, objętość wentylacji i poprawność ułożenia rąk. Wyniki widoczne są na aplikacji \u2014 instruktor widzi jednocześnie wszystkich uczestnik\u00F3w i na bieżąco koryguje błędy.",
    },
    {
      title: "Fantom dziecka i niemowlęcia",
      text: "Osobne manekiny dostosowane anatomicznie \u2014 bo RKO u dziecka i niemowlęcia to zupełnie inna technika, inna siła uciśnięć i inne postępowanie niż u dorosłego.",
    },
    {
      title: "Defibrylator AED (szkoleniowy)",
      text: "Każdy uczestnik samodzielnie ćwiczy obsługę AED \u2014 przyklejanie elektrod, analizę rytmu, wykonanie defibrylacji. Urządzenie szkoleniowe jest identyczne w obsłudze jak prawdziwy defibrylator.",
    },
    {
      title: "Kamizelka ACT FAST \u2014 nauka udrażniania dr\u00F3g oddechowych",
      text: "Profesjonalna kamizelka treningowa ACT FAST umożliwia realistyczne \u0107wiczenie technik ratowania osoby zadławionej \u2014 uderze\u0144 w plecy i uchwytu Heimlicha. Uczestnicy ucz\u0105 si\u0119 prawid\u0142owej techniki i odpowiedniej si\u0142y naci\u015Bni\u0119cia, kt\u00F3ra jest niezb\u0119dna do uratowania \u017Cycia.",
    },
  ];

  const targetGroups = [
    { icon: <Building2 size={22} />, title: "Firmy i zakłady pracy", text: "Wypełnienie obowiązku BHP, zaświadczenia dla pracownik\u00F3w, dostosowanie do grafiku zmianowego" },
    { icon: <School size={22} />, title: "Szkoły podstawowe i średnie", text: "Programy dostosowane do wieku, ćwiczenia na fantomach, darmowy przyjazd z karetką dla szk\u00F3ł" },
    { icon: <Baby size={22} />, title: "Przedszkola", text: "Angażujące zajęcia dla najmłodszych, namiot ratowniczy, zwiedzanie karetki, budowanie nawyku reagowania" },
    { icon: <GraduationCap size={22} />, title: "Uczelnie wyższe", text: "Zaawansowany program dla student\u00F3w, możliwość organizacji w ramach zajęć z BHP" },
    { icon: <Users size={22} />, title: "Urzędy i instytucje publiczne", text: "Szkolenia dla pracownik\u00F3w administracji i obsługi klienta" },
    { icon: <Star size={22} />, title: "Kluby sportowe i stowarzyszenia", text: "Pierwsza pomoc dla trener\u00F3w, zawodnik\u00F3w i wolontariuszy" },
    { icon: <ShieldCheck size={22} />, title: "Organizatorzy imprez", text: "Przeszkolenie personelu obsługi jako uzupełnienie naszej usługi zabezpieczenia medycznego" },
  ];

  return (
    <ServiceLayout
      title="Szkolenia z"
      titleAccent="Pierwszej Pomocy"
      subtitle="Ucz się od tych, którzy robią to na co dzień"
      bgImage="/gallery/Szkolenia/Szkolenie z pierwszej pomocy na imprezach.webp"
      tiles={[
        { value: "Firmy", label: "Zakłady pracy", sub: "obowiązek BHP" },
        { value: "Szkoły", label: "Podstawowe i średnie", sub: "programy wg wieku" },
        { value: "Przedszkola", label: "Dla najmłodszych", sub: "z karetką i namiotem" },
        { value: "Uczelnie", label: "Studenci i kadra", sub: "zaawansowany program" },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        {/* Hero intro */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="bg-primary-red/10 text-primary-red font-bold px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 mb-6">
            <MapPin size={14} />
            Szkolenia z pierwszej pomocy &bull; Racib&oacute;rz i Śląsk
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-6 !mt-0">
            Szkolenia z Pierwszej Pomocy &mdash; ucz się od tych, kt&oacute;rzy robią to na co dzień
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Nasze szkolenia to znacznie więcej niż resuscytacja na fantomie. Uczymy rozpoznawać, rozumieć i reagować &mdash; na zawał, omdlenie, padaczkę, śpiączkę cukrzycową i dziesiątki innych sytuacji, kt&oacute;re mogą przydarzyć się w pracy, szkole lub domu. Szkolenia prowadzą aktywni ratownicy medyczni z Systemu Państwowego Ratownictwa Medycznego w Raciborzu &mdash; ludzie, kt&oacute;rzy wczoraj byli na interwencji.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 not-prose mb-12">
            <a href="tel:602622840" className="bg-primary-red text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-red/20 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
              <Phone size={20} /> Zam&oacute;w szkolenie
            </a>
            <a href="tel:602622840" className="bg-navy-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-navy-blue/20 flex items-center justify-center gap-2 hover:bg-navy-blue-light transition-all hover:scale-105">
              <Phone size={20} /> 602 622 840
            </a>
          </div>
        </motion.div>

        {/* 3 wyróżniki */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-10 text-center">Czym r&oacute;żnimy się od innych?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-16">
          {[
            {
              icon: <Stethoscope size={32} />,
              title: "Aktywni ratownicy medyczni PRM",
              text: "Szkolenia prowadzą zawodowi ratownicy medyczni pracujący na co dzień w karetce systemu PRM \u2014 nie trenerzy z certyfikatem, lecz ludzie z prawdziwym doświadczeniem z miejsca zdarzenia.",
            },
            {
              icon: <BadgeCheck size={32} />,
              title: "Sprzęt najwyższej klasy",
              text: "Fantomy Laerdal Resusci Anne QCPR, manekiny dziecięce i niemowlęce, defibrylator AED, kamizelki do udrażniania dr\u00F3g oddechowych. Taki sam sprzęt jak w profesjonalnych ośrodkach ratownictwa medycznego.",
            },
            {
              icon: <Truck size={32} />,
              title: "Przyjeżdżamy do Ciebie",
              text: "Dojeżdżamy z pełnym wyposażeniem do firmy, szkoły lub przedszkola. Dla dzieci rozstawiamy namiot ratowniczy i pokazujemy prawdziwą karetkę \u2014 szkolenie, kt\u00F3re zostaje w pamięci na całe życie.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-[#f4f7f6] rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-primary-red/10 text-primary-red rounded-2xl flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Galeria zdjęć */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-4 text-center">
            <Camera size={32} className="inline mr-3 text-primary-red" />
            Nasze szkolenia w obiektywie
          </h2>
          <p className="text-gray-600 text-lg text-center mb-10 max-w-2xl mx-auto">
            Zobacz jak wyglądają nasze szkolenia z pierwszej pomocy &mdash; ćwiczenia praktyczne, fantomy, AED, karetka i namiot ratowniczy.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 not-prose mb-16">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              variants={fadeUp}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-blue/0 group-hover:bg-navy-blue/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm">Powiększ</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
              data-lenis-prevent
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              >
                <X size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryPhotos.length) % galleryPhotos.length); }}
                className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors z-10"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryPhotos.length); }}
                className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors z-10"
              >
                <ChevronRightIcon size={40} />
              </button>
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={galleryPhotos[lightbox].src}
                alt={galleryPhotos[lightbox].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Program szkolenia */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-4 text-center">Czego uczymy? Znacznie więcej niż RKO</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Program naszych szkoleń jest znacznie szerszy niż standardowe kursy BHP. Omawiamy nie tylko jak reagować, ale też dlaczego &mdash; mechanizmy chor&oacute;b, objawy, r&oacute;żnice między stanami, kt&oacute;re wyglądają podobnie, a wymagają zupełnie innego postępowania. Każdy temat kończy się ćwiczeniem praktycznym.
          </p>
        </motion.div>

        <div className="space-y-6 not-prose mb-16">
          {programItems.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  {item.details && (
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle2 className="text-primary-red shrink-0 mt-0.5" size={16} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sprzęt szkoleniowy */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-navy-blue text-white p-8 sm:p-12 rounded-[32px] mb-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 !mt-0 text-white">Szkolimy na sprzęcie, jakiego używają zawodowcy</h2>
            <p className="text-white/70 text-lg mb-10">
              Na naszych szkoleniach nie ma miejsca na kompromisy. Ćwiczysz na sprzęcie stosowanym przez profesjonalne ośrodki szkolenia ratownik&oacute;w medycznych &mdash; nie na tanim fantomie bez żadnego feedbacku.
            </p>
            <div className="space-y-8">
              {equipmentItems.map((eq, i) => (
                <div key={i} className="border-l-4 border-primary-red pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">{eq.title}</h3>
                  <p className="text-white/70 leading-relaxed">{eq.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white/10 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-primary-red mb-2">Dlaczego to ma znaczenie?</h4>
              <p className="text-white/70 leading-relaxed">
                Większość szkoleń z pierwszej pomocy odbywa się na prostych fantomach bez żadnej informacji zwrotnej &mdash; uczestnik nie wie, czy uciska za płytko, za szybko, czy w złym miejscu. My używamy fantom&oacute;w z technologią QCPR, kt&oacute;re mierzą każde uciśnięcie i każdy oddech. Dzięki temu po szkoleniu masz pewność, że naprawdę umiesz &mdash; a nie tylko {"\u201E"}byłeś na kursie{"\u201D"}.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Oferta dla firm */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-6">Szkolenia z pierwszej pomocy dla firm i zakład&oacute;w pracy</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Prawo nakłada na pracodawc&oacute;w obowiązek zapewnienia pracownikom wiedzy z zakresu udzielania pierwszej pomocy (art. 209&sup1; Kodeksu pracy). Nasze szkolenia spełniają ten wym&oacute;g i są dokumentowane imiennym zaświadczeniem ukończenia dla każdego uczestnika.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Dostosowujemy termin do grafiku zmianowego, możemy przeprowadzić kilka grup w ciągu jednego dnia. Przyjeżdżamy z całym sprzętem &mdash; nie musisz nic przygotowywać.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-16">
          {[
            { icon: <Clock size={20} />, label: "Czas trwania", value: "4\u20135 godzin" },
            { icon: <MapPin size={20} />, label: "Miejsce", value: "U klienta (dojazd w cenie) lub w naszym ośrodku" },
            { icon: <FileCheck size={20} />, label: "Dokumenty", value: "Imienne zaświadczenia ukończenia szkolenia" },
            { icon: <Users size={20} />, label: "Dla ilu os\u00F3b", value: "Od kilku do kilkudziesięciu \u2014 organizujemy kilka grup" },
          ].map((info, i) => (
            <div key={i} className="bg-[#f4f7f6] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-blue uppercase tracking-wide">{info.label}</div>
                <div className="text-gray-600">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Oferta dla szkół i przedszkoli */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-6">Szkolenia dla szk&oacute;ł i przedszkoli &mdash; z karetką i namiotem ratowniczym</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Dzieci, kt&oacute;re potrafią wezwać pomoc i udzielić podstawowej pierwszej pomocy, ratują życie. Wiemy to z doświadczenia. Dlatego szkolenia dla najmłodszych robimy inaczej niż dla dorosłych &mdash; angażująco, praktycznie i niezapomniane.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Gdy jest to możliwe, przyjeżdżamy z prawdziwą karetką i rozstawiamy namiot ratowniczy. Dzieci mogą wejść do ambulansu, zobaczyć sprzęt ratowniczy od środka, dotknąć wyposażenia i zadać pytania ratownikowi medycznemu. To doświadczenie, kt&oacute;re zostaje w pamięci znacznie dłużej niż wykład w klasie.
          </p>
        </motion.div>

        <div className="not-prose mb-8">
          <h3 className="text-xl font-bold text-navy-blue mb-6">Program dostosowany do wieku uczni&oacute;w:</h3>
          <div className="space-y-4">
            {[
              { age: "Przedszkola i klasy I\u2013III", items: "Wzywanie pomocy (numer 112), co m\u00F3wić dyspozytorowi, podstawy RKO dostosowane do wieku, postępowanie przy zadławieniu" },
              { age: "Klasy IV\u2013VIII", items: "Pełny program z RKO, AED, zadławieniem, omdleniem i urazami \u2014 ćwiczenia na fantomach" },
              { age: "Szkoły średnie i uczelnie", items: "Program zbliżony do dorosłych, w tym stany nagłe, zawał, padaczka, zaawansowane techniki" },
            ].map((group, i) => (
              <div key={i} className="bg-[#f4f7f6] rounded-2xl p-5 border-l-4 border-primary-red">
                <div className="font-bold text-navy-blue mb-1">{group.age}</div>
                <div className="text-gray-600">{group.items}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-primary-red/5 border-2 border-primary-red/20 rounded-2xl p-6 sm:p-8 mb-8 not-prose">
            <h3 className="text-xl font-bold text-primary-red mb-3">Darmowy przyjazd do dzieci &mdash; w prezencie do szkolenia nauczycieli</h3>
            <p className="text-gray-700 leading-relaxed">
              Każda szkoła lub przedszkole, kt&oacute;re zam&oacute;wi u nas <strong>szkolenie z pierwszej pomocy dla nauczycieli</strong>, otrzymuje w prezencie <strong>bezpłatny 2-godzinny przyjazd ratownika medycznego z karetką do dzieci</strong>. Podczas gdy kadra pedagogiczna szkoli się z pierwszej pomocy, nasz ratownik prowadzi zajęcia dla uczni&oacute;w &mdash; pokazuje ambulans od środka, wyposażenie ratownicze, rozstawia namiot ratowniczy. Dzieci uczą się wzywać pomoc i poznają podstawy reagowania. Wszystko bez dodatkowych koszt&oacute;w.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-16">
          {[
            { icon: <Clock size={20} />, label: "Czas trwania", value: "2\u20134 godziny" },
            { icon: <MapPin size={20} />, label: "Miejsce", value: "W szkole lub przedszkolu" },
            { icon: <FileCheck size={20} />, label: "Dokumenty", value: "Zaświadczenia dla uczni\u00F3w i nauczycieli" },
          ].map((info, i) => (
            <div key={i} className="bg-[#f4f7f6] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-blue uppercase tracking-wide">{info.label}</div>
                <div className="text-gray-600">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 kroki */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-10 text-center">Jak zam&oacute;wić szkolenie?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-16">
          {[
            {
              step: "1",
              title: "Zadzwoń lub napisz",
              text: "Powiedz ile os\u00F3b, jaki rodzaj szkolenia (firma, szkoła, przedszkole) i gdzie ma się odbyć. Odpowiadamy tego samego dnia.",
            },
            {
              step: "2",
              title: "Wycena i termin",
              text: "Przygotujemy indywidualną ofertę z ceną i proponowanymi terminami. Dostosowujemy się do Twojego harmonogramu.",
            },
            {
              step: "3",
              title: "Szkolenie",
              text: "Przyjeżdżamy z pełnym sprzętem \u2014 fantomami, AED, karetką. Po zakończeniu wystawiamy zaświadczenia dla wszystkich uczestnik\u00F3w.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-primary-red text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-5">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Dla kogo */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-blue mb-10 text-center">Szkolimy firmy, szkoły i instytucje z całego Śląska</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-16">
          {targetGroups.map((group, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              variants={fadeUp}
              className="bg-[#f4f7f6] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 bg-primary-red/10 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                {group.icon}
              </div>
              <div>
                <div className="font-bold text-navy-blue mb-1">{group.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{group.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-navy-blue text-white p-8 sm:p-12 rounded-[32px] mb-16 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 !mt-0 text-white">Zapytaj o szkolenie dla swojej firmy lub szkoły</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Chętnie doradzimy &mdash; jaki rodzaj szkolenia będzie najlepszy, ile trwa, ile kosztuje i kiedy możemy przyjechać. Działamy na terenie Raciborza, Rybnika, Wodzisławia Śląskiego, Jastrzębia-Zdroju i całego wojew&oacute;dztwa śląskiego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center not-prose">
              <a href="tel:602622840" className="bg-primary-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary-red/30 flex items-center justify-center gap-2 hover:bg-[#ba1e17] transition-all hover:scale-105">
                <Phone size={20} /> 602 622 840
              </a>
              <a href="mailto:biuro@life-ratownictwo.pl" className="bg-white text-navy-blue px-8 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all hover:scale-105">
                <Mail size={20} /> Napisz do nas
              </a>
            </div>
          </div>
        </motion.div>

        {/* SEO footer text */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-gray-400 text-sm leading-relaxed">
            LIFE-Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o. prowadzi szkolenia z pierwszej pomocy dla firm, szk&oacute;ł i przedszkoli na terenie Raciborza, Rybnika, Wodzisławia Śląskiego, Jastrzębia-Zdroju, Gliwic i całego wojew&oacute;dztwa śląskiego. Szkolenia prowadzą aktywni ratownicy medyczni Systemu Państwowego Ratownictwa Medycznego. Podmiot leczniczy &mdash; NIP 6392023251.
          </p>
        </div>

        {/* Cross-sell & Blog links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj też na blogu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 not-prose">
            <Link to="/blog/obowiazek-szkolenia-z-pierwszej-pomocy-w-firmie-prawo" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Obowiązek szkolenia w firmie &mdash; co m&oacute;wi prawo?
            </Link>
            <Link to="/blog/jak-udzielac-pierwszej-pomocy-kompletny-poradnik" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Jak udzielać pierwszej pomocy &mdash; poradnik
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Nasze szkolenia w obrazach</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 not-prose">
            {[
              "/gallery/Szkolenia/Szkolenia z pierwszej pomocy dla dzieci.webp",
              "/gallery/Szkolenia/Szkolenia z pierwszej pomocy dla pracowników.webp",
              "/gallery/Szkolenia/Szkolenia z pierwszej pomocy na piknikach rodzinnych.webp",
              "/gallery/Szkolenia/Szkolenia z resuscytacji krążeniowo oddechowej.webp",
              "/gallery/Szkolenia/pierwsza pomoc (10).webp",
              "/gallery/Szkolenia/Pozycja bezpieczna.webp",
              "/gallery/Szkolenia/Szkolenia z pierwszej pomocy dla motocyklistów.webp",
              "/gallery/Szkolenia/DSC_0007.webp",
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src={src} alt={`Szkolenie pierwsza pomoc ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz też nasze usługi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <Link to="/zabezpieczenia-medyczne" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Zabezpieczenia medyczne</Link>
            <Link to="/transport-medyczny" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Transport medyczny</Link>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Szkolenia;
