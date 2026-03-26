import React, { useState, useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Truck, Users, FileCheck, BadgeCheck, ChevronRight, ChevronLeft, Phone, Mail, AlertTriangle, Heart, Stethoscope, GraduationCap, Music, Trophy, TreePine, Building2, Film, Bike, Clock, MapPin, Star, Tent, Camera, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const ZabezpieczeniaMedyczne = () => {
  useSEO({
    title: "Zabezpieczenie Medyczne Imprez Racibórz i Śląsk \u2013 Podmiot Leczniczy | LIFE-Ratownictwo",
    description: "Profesjonalne zabezpieczenie medyczne imprez masowych i niemasowych na Śląsku. Podmiot leczniczy, 3 ambulanse, ratownicy medyczni PRM. Pomagamy w formalnościach. Tel. 602 622 840."
  });

  const eventTypes = [
    {
      icon: <Music size={24} />,
      title: "Imprezy masowe artystyczno-rozrywkowe",
      text: "Koncerty, festiwale muzyczne, widowiska plenerowe z udziałem powyżej 500 osób w budynkach lub 1000 osób na otwartym terenie. Pełne zabezpieczenie zgodne z tabelą minimalnych sił i środków \u2014 zespoły wyjazdowe, patrole, punkt pomocy medycznej.",
    },
    {
      icon: <Trophy size={24} />,
      title: "Imprezy masowe sportowe",
      text: "Zawody sportowe, maratony, turnieje z udziałem powyżej 300 osób w budynkach lub 1000 osób na stadionie lub terenie otwartym. Doświadczenie w zabezpieczaniu zarówno zawodników jak i widowni.",
    },
    {
      icon: <TreePine size={24} />,
      title: "Festyny, dożynki i imprezy lokalne",
      text: "Imprezy niemasowe \u2014 festyny gminne, dożynki, pikniki sołeckie, jarmarki i inne lokalne wydarzenia. Na życzenie rozstawiamy namiot ratowniczy z pokazowym szkoleniem z pierwszej pomocy \u2014 dodatkowa atrakcja dla uczestników.",
    },
    {
      icon: <Heart size={24} />,
      title: "Pikniki rodzinne i eventy plenerowe",
      text: "Imprezy dla rodzin z dziećmi \u2014 szczególnie popularna jest tu opcja namiotu ratowniczego z interaktywnymi pokazami pierwszej pomocy. Dzieci i rodzice uczą się razem, a ratownicy medyczni są do dyspozycji przez cały czas trwania imprezy.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Eventy firmowe i targi",
      text: "Konferencje, targi, dni otwarte, eventy integracyjne. Dyskretna, profesjonalna obecność służb medycznych, która buduje zaufanie uczestników i minimalizuje ryzyko dla organizatora.",
    },
    {
      icon: <Bike size={24} />,
      title: "Zawody sportowe i biegi masowe",
      text: "Biegi uliczne, zawody kolarskie, turnieje piłkarskie, zawody pływackie. Zabezpieczenie zarówno uczestników zawodów jak i publiczności \u2014 z uwzględnieniem specyfiki danej dyscypliny sportowej.",
    },
    {
      icon: <Film size={24} />,
      title: "Produkcje filmowe i telewizyjne",
      text: "Zabezpieczenie planu zdjęciowego wymagane przez ubezpieczycieli przy scenach kaskaderskich i zdjęciach plenerowych.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Kontakt i wstępna wycena",
      text: "Zadzwoń lub napisz. Powiedz nam kiedy, gdzie i jaka impreza. Tego samego dnia odpowiadamy z wstępną wyceną i informacją o wymaganych formalnościach.",
    },
    {
      num: "02",
      title: "Plan zabezpieczenia i formalności",
      text: "Przygotowujemy plan zabezpieczenia medycznego i pomagamy w złożeniu wniosku do dysponenta ZRM. Pilnujemy terminów \u2014 Ty skupiasz się na organizacji imprezy.",
    },
    {
      num: "03",
      title: "Zabezpieczenie imprezy",
      text: "W dniu imprezy stawiamy się punktualnie z ambulansem, sprzętem i zespołem. Koordynujemy łączność między ambulansem, patrolami i punktem pomocy. Na życzenie rozstawiamy namiot z pokazami pierwszej pomocy.",
    },
    {
      num: "04",
      title: "Dokumentacja poimprezowa",
      text: "Po imprezie wystawiamy pełną dokumentację medyczną wymaganą przez przepisy \u2014 raporty z interwencji i ewidencję udzielonych świadczeń.",
    },
  ];

  const galleryImages = [
    { src: "/gallery/zabezpieczenia/punkt-medyczny-impreza-masowa.webp", alt: "Punkt medyczny Life na imprezie masowej z namiotem ratowniczym i ambulansem" },
    { src: "/gallery/zabezpieczenia/ambulans-event-sportowy-redbull.webp", alt: "Ambulans Life na evencie sportowym Red Bull" },
    { src: "/gallery/zabezpieczenia/namiot-punkt-medyczny-ratownicy.webp", alt: "Namiot ratowniczy Life z ratownikami medycznymi" },
    { src: "/gallery/zabezpieczenia/ambulans-koncert-nocny-scena.webp", alt: "Ambulans Life zabezpieczenie nocnego koncertu" },
    { src: "/gallery/zabezpieczenia/namiot-punkt-medyczny-lato.webp", alt: "Punkt medyczny Life na letnim evencie plenerowym" },
    { src: "/gallery/zabezpieczenia/ambulans-zimowa-akcja-ratunkowa.webp", alt: "Ambulans Life zimowa akcja ratunkowa w terenie" },
    { src: "/gallery/zabezpieczenia/ratownik-zabezpieczenie-judo.webp", alt: "Ratownik medyczny na zawodach judo" },
    { src: "/gallery/zabezpieczenia/ambulans-bieg-mikolajow.webp", alt: "Ambulans Life zabezpieczenie biegu miko\u0142aj\u00F3w" },
    { src: "/gallery/zabezpieczenia/namiot-punkt-medyczny-festyn.webp", alt: "Namiot ratowniczy Life na festynie rodzinnym" },
    { src: "/gallery/zabezpieczenia/namiot-punkt-medyczny-dzieci.webp", alt: "Punkt medyczny Life na imprezie z dzie\u0107mi" },
    { src: "/gallery/zabezpieczenia/szkolenie-pierwsza-pomoc-plener.webp", alt: "Szkolenie z pierwszej pomocy w plenerze" },
    { src: "/gallery/zabezpieczenia/namiot-zabezpieczenie-sportowe.webp", alt: "Namiot ratowniczy Life na evencie sportowym" },
    { src: "/gallery/zabezpieczenia/ambulans-pokaz-zabrze.webp", alt: "Ambulans Life pokaz ratownictwa w Zabrzu" },
    { src: "/gallery/zabezpieczenia/namiot-ambulans-festyn-letni.webp", alt: "Namiot i ambulans Life na letnim festynie" },
    { src: "/gallery/zabezpieczenia/ambulans-koncert-nocny.webp", alt: "Ambulans Life na nocnym koncercie przy scenie" },
    { src: "/gallery/zabezpieczenia/ambulans-zabezpieczenie-dzieci-park.webp", alt: "Ambulans Life zabezpieczenie imprezy dla dzieci w parku" },
    { src: "/gallery/zabezpieczenia/ratownicy-praca-festiwal.webp", alt: "Ratownicy medyczni przy pracy na festiwalu" },
    { src: "/gallery/zabezpieczenia/namiot-punkt-medyczny-rynek.webp", alt: "Punkt medyczny Life na rynku starego miasta" },
    { src: "/gallery/zabezpieczenia/ambulans-festyn-dmuchance.webp", alt: "Ambulans Life na festynie z atrakcjami dla dzieci" },
    { src: "/gallery/zabezpieczenia/ambulans-zabezpieczenie-miejskie.webp", alt: "Ambulans Life zabezpieczenie wydarzenia miejskiego" },
    { src: "/gallery/zabezpieczenia/ambulans-namiot-medyczny-park.webp", alt: "Ambulans i namiot medyczny Life w parku" },
    { src: "/gallery/zabezpieczenia/ambulans-zabezpieczenie-nocne-namiot.webp", alt: "Ambulans Life nocne zabezpieczenie imprezy biesiadnej" },
    { src: "/gallery/zabezpieczenia/namiot-zabezpieczenie-rowerowe.webp", alt: "Namiot ratowniczy Life na evencie rowerowym" },
    { src: "/gallery/zabezpieczenia/ambulans-flaga-nocna-impreza.webp", alt: "Ambulans Life z flag\u0105 na nocnej imprezie" },
    { src: "/gallery/zabezpieczenia/ambulans-raciborskie-centrum.webp", alt: "Ambulans Life przy Raciborskim Centrum Medycznym" },
    { src: "/gallery/zabezpieczenia/ambulans-festyn-plenerowy.webp", alt: "Ambulans Life na festynie plenerowym" },
    { src: "/gallery/zabezpieczenia/ambulans-zabezpieczenie-bieg.webp", alt: "Ambulans Life zabezpieczenie biegu ulicznego" },
    { src: "/gallery/zabezpieczenia/ratownicy-pod-namiotem.webp", alt: "Ratownicy medyczni pod namiotem ratowniczym Life" },
    { src: "/gallery/zabezpieczenia/namiot-ratowniczy-jarmark.webp", alt: "Namiot ratowniczy Life na jarmarku miejskim" },
    { src: "/gallery/zabezpieczenia/ambulans-dozynki-plenerowe.webp", alt: "Ambulans Life na do\u017Cynkach plenerowych" },
    { src: "/gallery/zabezpieczenia/namiot-ratowniczy-dzieci-pokaz.webp", alt: "Namiot ratowniczy Life z pokazem dla dzieci" },
    { src: "/gallery/zabezpieczenia/ambulans-zabezpieczenie-biegu.webp", alt: "Ambulans Life na starcie biegu" },
    { src: "/gallery/zabezpieczenia/ambulans-zawody-konne.webp", alt: "Ambulans Life zabezpieczenie zawod\u00F3w konnych" },
    { src: "/gallery/zabezpieczenia/ambulans-event-przy-palacu.webp", alt: "Ambulans Life zabezpieczenie eventu przy pa\u0142acu" },
    { src: "/gallery/zabezpieczenia/namiot-ambulans-piknik-rodzinny.webp", alt: "Namiot i ambulans Life na pikniku rodzinnym" },
    { src: "/gallery/zabezpieczenia/namiot-ratowniczy-event-firmowy.webp", alt: "Namiot ratowniczy Life na evencie firmowym" },
    { src: "/gallery/zabezpieczenia/ambulans-ratownicy-miasto.webp", alt: "Ambulans i ratownicy Life w centrum miasta" },
    { src: "/gallery/zabezpieczenia/ambulans-festyn-letni-plenerowy.webp", alt: "Ambulans Life na letnim festynie plenerowym" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 8);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex((p) => (p + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  return (
    <ServiceLayout
      title="Zabezpieczenie"
      titleAccent="Medyczne Imprez"
      subtitle={"Organizujesz imprez\u0119 i potrzebujesz zabezpieczenia medycznego? Jako licencjonowany podmiot leczniczy z trzema ambulansami i zespo\u0142em ratownik\u00F3w medycznych zapewniamy pe\u0142ne, zgodne z prawem zabezpieczenie \u2014 od ma\u0142ego festynu po du\u017C\u0105 imprez\u0119 masow\u0105."}
      bgImage="/gallery/zabezpieczenia/punkt-medyczny-impreza-masowa.webp"
      bgPosition="70% center"
      tiles={[
        { value: "100+", label: "Zabezpieczonych", sub: "imprez i wydarzeń" },
        { value: "PRM", label: "Ratownicy medyczni", sub: "na każdym evencie" },
        { value: "3", label: "Ambulanse", sub: "w gotowości" },
        { value: "Podmiot", label: "Leczniczy", sub: "pełna legalność" },
      ]}
    >
      {/* === SEKCJA: Prawo wymaga podmiotu leczniczego === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Ważne &mdash; podstawa prawna</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-6">Zabezpieczenie medyczne imprezy masowej &mdash; prawo wymaga podmiotu leczniczego</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To nie jest kwestia wyboru &mdash; to wym&oacute;g prawa. Zgodnie z <strong>Ustawą o bezpieczeństwie imprez masowych</strong> z dnia 20 marca 2009 r. oraz <strong>Rozporządzeniem Ministra Zdrowia z dnia 6 lutego 2012 r.</strong> w sprawie minimalnych wymagań dotyczących zabezpieczenia pod względem medycznym imprezy masowej, pełne zabezpieczenie medyczne &mdash; obejmujące udzielanie świadczeń zdrowotnych &mdash; może realizować wyłącznie <strong>podmiot leczniczy</strong>.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Ministerstwo Zdrowia potwierdziło to wprost w piśmie z dnia 8 lutego 2017 r. (sygn. SOR.450.6.2.2017.MS): organizator imprezy masowej ma obowiązek powierzyć zabezpieczenie medyczne podmiotowi leczniczemu delegującemu osoby wykonujące zawód medyczny.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          <strong>LIFE-Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o.</strong> jest podmiotem leczniczym wpisanym do rejestru Ministra Zdrowia (KRS 0000920762). Wybierając nas, masz pewność pełnej zgodności z przepisami &mdash; bez ryzyka prawnego dla organizatora.
        </p>

        {/* Ramka ostrzegawcza */}
        <div className="bg-primary-red/5 border-2 border-primary-red/20 rounded-2xl p-6 mb-12 flex gap-4">
          <AlertTriangle className="text-primary-red shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-navy-blue mb-2">Uwaga dla organizator&oacute;w</h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              Firmy ochroniarskie, stowarzyszenia czy osoby po kursie KPP niebędące podmiotem leczniczym mogą legalnie wystawić jedynie patrole ratownicze. <strong>Nie mogą udzielać świadczeń zdrowotnych</strong> ani wystawić dokumentacji wymaganej przez dysponenta ZRM. Jako organizator ponosisz za to pełną odpowiedzialność prawną.
            </p>
          </div>
        </div>
      </motion.div>

      {/* === SEKCJA: Oferta dopasowana === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Oferta</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Zabezpieczenie dopasowane do wielkości i charakteru imprezy</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Nie stosujemy jednego schematu dla wszystkich &mdash; każda impreza jest inna i wymaga innego podejścia. Dobieramy skład zespołu i środki do rzeczywistych potrzeb, zawsze w zgodzie z obowiązującymi przepisami.
        </p>
      </motion.div>

      {/* Imprezy masowe */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-navy-blue text-white rounded-3xl p-8 md:p-10 mb-8">
        <h3 className="text-2xl font-extrabold mb-4">Imprezy masowe &mdash; pełne zabezpieczenie zgodne z Rozp. MZ</h3>
        <p className="text-white/70 mb-6 leading-relaxed">
          Na imprezach masowych (powyżej 1000 uczestników na otwartym terenie lub 500 w budynku) realizujemy pełne zabezpieczenie medyczne zgodne z Rozporządzeniem Ministra Zdrowia z dnia 6 lutego 2012 r.:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Ambulans na miejscu z obsadą ratowników medycznych w pełnej gotowości do interwencji i transportu",
            "Punkt pomocy medycznej \u2014 stacjonarne stanowisko wyposażone w produkty lecznicze i sprzęt ratowniczy",
            "Patrole ratownicze przemieszczające się po terenie imprezy z torbami ratunkowymi i łącznością bezprzewodową",
            "Dla imprez powyżej 10 000 uczestników \u2014 koordynator medyczny spełniający wymogi ustawowe",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90">
              <ShieldCheck size={18} className="text-primary-red shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-white/60 text-sm">Personel: ratownicy medyczni i pielęgniarki z pełnymi uprawnieniami do wykonywania medycznych czynności ratunkowych.</p>
      </motion.div>

      {/* Imprezy mniejsze */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#f4f7f6] rounded-3xl p-8 md:p-10 mb-8 border-2 border-white">
        <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Imprezy mniejsze &mdash; składy mieszane dopasowane do potrzeb</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Na imprezach niemasowych &mdash; festynach, dożynkach, zawodach sportowych, eventach firmowych &mdash; stosujemy elastyczne składy mieszane dopasowane do skali i charakteru wydarzenia:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Ratownicy medyczni i/lub pielęgniarki jako wykwalifikowany personel medyczny",
            "Ratownicy KPP jako wsparcie patrolowe i przy punkcie pomocy",
            "Ambulans lub wyposażona torba ratownicza \u2014 zależnie od potrzeb i lokalizacji",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <ShieldCheck size={18} className="text-primary-red shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm">Ratownicy KPP mogą legalnie pełnić funkcję patroli ratowniczych, a obecność ratownika medycznego lub pielęgniarki zapewnia właściwy poziom świadczeń zdrowotnych.</p>
      </motion.div>

      {/* Małe imprezy */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#f4f7f6] rounded-3xl p-8 md:p-10 mb-8 border-2 border-white">
        <h3 className="text-2xl font-extrabold text-navy-blue mb-4">Małe imprezy &mdash; ratownicy bez ambulansu</h3>
        <p className="text-gray-600 leading-relaxed">
          Na niewielkich imprezach lokalnych, gdzie charakter i liczba uczestników nie wymaga obecności ambulansu, wysyłamy jednego lub dwóch ratowników z wyposażeniem ratowniczym. To rozwiązanie ekonomiczne, które nadal zapewnia profesjonalną opiekę medyczną i szybką reakcję w razie potrzeby.
        </p>
      </motion.div>

      {/* Opcja wyjątkowa — namiot */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-primary-red/5 border-2 border-primary-red/20 rounded-3xl p-8 md:p-10 mb-16">
        <div className="flex items-start gap-4 mb-4">
          <Tent className="text-primary-red shrink-0 mt-1" size={28} />
          <h3 className="text-2xl font-extrabold text-navy-blue">Wyjątkowa opcja &mdash; zabezpieczenie medyczne i szkolenie z pierwszej pomocy w jednym</h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Na piknikach rodzinnych, festynach i dożynkach oferujemy coś wyjątkowego &mdash; zabezpieczenie medyczne połączone z pokazowym szkoleniem z pierwszej pomocy dla uczestników imprezy. Rozstawiamy namiot ratowniczy w widocznym miejscu, który pełni jednocześnie funkcję punktu pomocy medycznej i strefy edukacyjnej.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            "Nauka RKO na fantomie \u2014 każdy może spróbować",
            "Obsługa defibrylatora AED \u2014 pokazujemy że to prostsze niż myślisz",
            "Postępowanie przy zadławieniu \u2014 popularne wśród rodziców małych dzieci",
            "Pytania i odpowiedzi z ratownikiem medycznym na żywo",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-gray-700">
              <Star size={16} className="text-primary-red shrink-0 mt-1" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Dla organizatora to dodatkowa atrakcja imprezy, która przyciąga uczestników i buduje jej prestiż. Namiot ratowniczy pełni jednocześnie funkcję wymaganego przepisami punktu pomocy medycznej &mdash; organizator otrzymuje dwie wartości w jednym.
        </p>
      </motion.div>

      {/* === SEKCJA: Nasz personel === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Zespół</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Kto realizuje zabezpieczenie?</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Dysponujemy trzema grupami wykwalifikowanego personelu medycznego, które dobieramy odpowiednio do charakteru i wymogów każdej imprezy.
        </p>
      </motion.div>

      <div className="space-y-6 mb-16">
        {[
          {
            icon: <Stethoscope size={24} />,
            title: "Ratownicy medyczni",
            text: "Zawód medyczny wymagający ukończenia studiów wyższych na kierunku ratownictwo medyczne. Uprawnieni do samodzielnego wykonywania medycznych czynności ratunkowych \u2014 podawania leków, zakładania wkłuć dożylnych, intubacji i kierowania zespołem ratowniczym. Nasi ratownicy medyczni pracują na co dzień w Systemie Państwowego Ratownictwa Medycznego w Raciborzu \u2014 mają za sobą setki realnych interwencji.",
          },
          {
            icon: <Heart size={24} />,
            title: "Pielęgniarki",
            text: "Personel medyczny z pełnymi kwalifikacjami do udzielania świadczeń zdrowotnych. Niezbędny element składu przy zabezpieczeniu punktu pomocy medycznej na imprezach masowych. Nasze pielęgniarki posiadają wieloletnie doświadczenie kliniczne.",
          },
          {
            icon: <GraduationCap size={24} />,
            title: "Ratownicy KPP",
            text: "Osoby po 66-godzinnym kursie Kwalifikowanej Pierwszej Pomocy z egzaminem państwowym przed komisją wojewody. Uprawnieni do udzielania kwalifikowanej pierwszej pomocy. Zgodnie z przepisami mogą stanowić patrole ratownicze na imprezach masowych oraz realizować pełne zabezpieczenie na imprezach niemasowych.",
          },
        ].map((person, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-8 border-2 border-white flex gap-6"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-primary-red shrink-0">{person.icon}</div>
            <div>
              <h3 className="text-xl font-extrabold text-navy-blue mb-2">{person.title}</h3>
              <p className="text-gray-600 leading-relaxed">{person.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === SEKCJA: Co zabezpieczamy === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Rodzaje imprez</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Zabezpieczamy każdy rodzaj imprezy &mdash; od festynu po imprezę masową</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Dysponujemy trzema ambulansami i elastycznym zespołem, dzięki czemu możemy realizować kilka zleceń jednocześnie na terenie całego województwa śląskiego.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {eventTypes.map((event, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white hover:shadow-lg transition-all"
          >
            <div className="bg-white p-3 rounded-xl shadow-sm w-fit text-primary-red mb-4">{event.icon}</div>
            <h3 className="text-lg font-extrabold text-navy-blue mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{event.text}</p>
          </motion.div>
        ))}
      </div>

      {/* === SEKCJA: Formalności === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Formalności</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4">Pomagamy w całości &mdash; od formalności po ostatni uczestnik</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Organizacja imprezy to i tak wystarczająco dużo pracy. Dlatego nie zostawiamy Cię sam na sam z formalnościami &mdash; przeprowadzimy Cię przez cały proces.
        </p>
      </motion.div>

      <div className="space-y-6 mb-10">
        {[
          {
            icon: <FileCheck size={24} />,
            title: "Plan zabezpieczenia medycznego",
            text: "Przygotowujemy kompletny plan zabezpieczenia medycznego imprezy uwzględniający jej charakter, miejsce, liczbę uczestników, czas trwania i specyficzne zagrożenia. To dokument wymagany przez dysponenta ZRM i organy wydające zezwolenie na imprezę masową.",
          },
          {
            icon: <Phone size={24} />,
            title: "Kontakt z dysponentem ZRM",
            text: "Wniosek o opinię dysponenta Zespołów Ratownictwa Medycznego należy złożyć co najmniej 44 dni przed imprezą masową. Na obszarze województwa śląskiego dysponentem jest Wojewódzkie Pogotowie Ratunkowe w Katowicach. Pomagamy w przygotowaniu wniosku i kompletnej dokumentacji.",
          },
          {
            icon: <BadgeCheck size={24} />,
            title: "Dokumentacja poimprezowa",
            text: "Po zakończeniu imprezy wystawiamy pełną dokumentację medyczną \u2014 raporty z interwencji, ewidencję udzielonych świadczeń i inne dokumenty wymagane przepisami.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white flex gap-6"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-primary-red shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg font-extrabold text-navy-blue mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Terminy */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-navy-blue text-white rounded-3xl p-8 md:p-10 mb-16">
        <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3">
          <Clock size={22} className="text-primary-red" /> Terminy, o kt&oacute;rych musisz wiedzieć
        </h3>
        <div className="space-y-4">
          {[
            { days: "44 dni", text: "przed imprezą \u2014 złożenie wniosku o opinię dysponenta ZRM" },
            { days: "30 dni", text: "przed imprezą \u2014 złożenie wniosku o zezwolenie na imprezę masową do organu gminy" },
            { days: "16 dni", text: "przed imprezą \u2014 dysponent ZRM wydaje opinię o niezbędnych siłach i środkach" },
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="bg-primary-red text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0 min-w-[70px] text-center">{t.days}</span>
              <span className="text-white/80">{t.text}</span>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm mt-6">Skontaktuj się z nami jak najwcześniej &mdash; najlepiej 2&ndash;3 miesiące przed planowaną datą imprezy.</p>
      </motion.div>

      {/* === SEKCJA: Dlaczego my === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Dlaczego my</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-10">3 ambulanse, podmiot leczniczy, ratownicy medyczni PRM</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {[
          { icon: <BadgeCheck size={24} />, title: "Podmiot leczniczy", text: "Jedyni uprawnieni do pełnego, legalnego zabezpieczenia medycznego imprezy masowej. Wpisani do rejestru Ministra Zdrowia \u2014 KRS 0000920762." },
          { icon: <Truck size={24} />, title: "3 własne ambulanse", text: "Trzy w pełni wyposażone ambulanse spełniające wymogi Rozporządzenia MZ z 2012 r. Możliwość jednoczesnego zabezpieczenia kilku imprez." },
          { icon: <Users size={24} />, title: "Trzy poziomy personelu", text: "Ratownicy medyczni, pielęgniarki i ratownicy KPP \u2014 dobieramy skład do faktycznych potrzeb i wymogów prawnych każdej imprezy." },
          { icon: <FileCheck size={24} />, title: "Pełna obsługa formalności", text: "Pomagamy w przygotowaniu planu zabezpieczenia, wniosku do dysponenta ZRM i całej dokumentacji wymaganej przez prawo." },
          { icon: <Tent size={24} />, title: "Coś ekstra", text: "Na festynach i piknikach rozstawiamy namiot ratowniczy z pokazowym szkoleniem z pierwszej pomocy \u2014 dodatkowa atrakcja i wartość dla organizatora." },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white"
          >
            <div className="text-primary-red mb-4">{item.icon}</div>
            <h3 className="text-lg font-extrabold text-navy-blue mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* === SEKCJA: Galeria === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Galeria</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-4 flex items-center gap-3">
          <Camera size={28} className="text-primary-red" /> Nasze realizacje &mdash; zabezpieczenia medyczne w akcji
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Zobacz jak wygląda profesjonalne zabezpieczenie medyczne imprez &mdash; od dużych festiwali po kameralne festyny rodzinne.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {visibleImages.map((img, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
            onClick={() => openLightbox(showAll ? i : i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-blue/0 group-hover:bg-navy-blue/40 transition-all duration-300 flex items-center justify-center">
              <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && galleryImages.length > 8 && (
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAll(true)}
            className="bg-navy-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-navy-blue/90 transition-all inline-flex items-center gap-2"
          >
            Zobacz wszystkie zdjęcia ({galleryImages.length})
            <ChevronRight size={18} />
          </button>
        </div>
      )}
      {showAll && <div className="mb-16" />}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
            data-lenis-prevent
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length); }}
              className="absolute left-4 text-white/80 hover:text-white z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p + 1) % galleryImages.length); }}
              className="absolute right-4 text-white/80 hover:text-white z-10"
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === SEKCJA: Jak działamy === */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="bg-primary-red/10 text-primary-red font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Współpraca</span>
        <h2 className="text-3xl font-extrabold text-navy-blue mb-10">Od kontaktu do realizacji &mdash; jak działamy?</h2>
      </motion.div>

      <div className="space-y-6 mb-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 items-start"
          >
            <div className="bg-primary-red text-white text-2xl font-black w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">{step.num}</div>
            <div className="bg-[#f4f7f6] rounded-3xl p-7 border-2 border-white flex-1">
              <h3 className="text-lg font-extrabold text-navy-blue mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === CTA === */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-primary-red rounded-3xl p-10 text-white text-center"
      >
        <h2 className="text-3xl font-black mb-4">Zapytaj o zabezpieczenie swojej imprezy</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Skontaktuj się z nami jak najwcześniej &mdash; najlepiej 2&ndash;3 miesiące przed planowaną datą imprezy masowej. Na mniejsze imprezy możemy zorganizować zabezpieczenie w krótszym czasie. Działamy na terenie Raciborza, Rybnika, Wodzisławia Śląskiego, Jastrzębia-Zdroju, Gliwic i całego województwa śląskiego.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:602622840" className="bg-white text-primary-red px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
            <Phone size={20} /> 602 622 840
          </a>
          <a href="mailto:biuro@life-ratownictwo.pl" className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center gap-2">
            <Mail size={20} /> Napisz do nas
          </a>
        </div>
      </motion.div>

      {/* SEO Footer Text */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <p className="text-gray-400 text-sm leading-relaxed">
          LIFE-Ratownictwo Medyczne i Pielęgniarstwo Sp. z o.o. świadczy usługi zabezpieczenia medycznego imprez masowych i niemasowych na terenie województwa śląskiego &mdash; Racibórz, Rybnik, Wodzisław Śląski, Jastrzębie-Zdrój, Gliwice, Katowice i okolice. Podmiot leczniczy wpisany do rejestru MZ &mdash; NIP 6392023251, KRS 0000920762.
        </p>
      </div>

      {/* Cross-sell & Blog links */}
      <div className="mt-12 pt-10 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj też na blogu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Link to="/blog/zabezpieczenie-medyczne-imprezy-masowej-wymagania-prawne" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
            <ChevronRight className="text-primary-red shrink-0" size={18} /> Wymagania prawne imprezy masowej 2026
          </Link>
          <Link to="/blog/ile-kosztuje-zabezpieczenie-medyczne-imprezy" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
            <ChevronRight className="text-primary-red shrink-0" size={18} /> Ile kosztuje zabezpieczenie medyczne?
          </Link>
        </div>

        <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz też nasze usługi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/transport-medyczny" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Transport medyczny</Link>
          <Link to="/szkolenia-pierwsza-pomoc" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Szkolenia z pierwszej pomocy</Link>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ZabezpieczeniaMedyczne;
