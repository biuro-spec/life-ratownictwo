import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, ShieldCheck, Clock, Users, ChevronRight, Stethoscope, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const UslugiPielegniarskie = () => {
  useSEO({
    title: 'Usługi Pielęgniarskie Racibórz — Toaleta Pacjenta, Opieka Domowa',
    description: 'Profesjonalne usługi pielęgniarskie w Raciborzu i na Śląsku. Toaleta pacjenta, profilaktyka przeciwodleżynowa, opieka domowa, pielęgniarka w transporcie medycznym. Wykwalifikowany zespół 24/7.',
  });

  return (
    <ServiceLayout
      title="Usługi"
      titleAccent="Pielęgniarskie"
      subtitle="Profesjonalna opieka pielęgniarska w domu pacjenta oraz podczas transportu medycznego. Wykwalifikowany zespół z wieloletnim doświadczeniem."
      bgImage="/gallery/pielęgniarstwo/pielęgniarka-opieka-domowa-racibórz.webp"
      bgPosition="center center"
      tiles={[
        { value: "24/7", label: "Dostępność", sub: "również w święta" },
        { value: "2-os.", label: "Zespół", sub: "pielęgniarski" },
        { value: "PL/EU", label: "Zasięg", sub: "transport z opieką" },
        { value: "100%", label: "Profesjonalizm", sub: "certyfikowane pielęgniarki" },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        {/* Sekcja główna */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-extrabold text-navy-blue mb-6 border-b-2 border-primary-red pb-4 inline-block">
            Profesjonalna opieka pielęgniarska
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-xl">
            <strong>Life Ratownictwo Medyczne</strong> oferuje kompleksowe usługi pielęgniarskie realizowane przez wykwalifikowane pielęgniarki z doświadczeniem w opiece nad pacjentami leżącymi, przewlekle chorymi i wymagającymi specjalistycznej pielęgnacji. Każda usługa wykonywana jest przez <strong>dwuosobowy zespół pielęgniarski</strong>, co gwarantuje bezpieczeństwo i komfort pacjenta.
          </p>
        </motion.div>

        {/* Toaleta pacjenta - główna usługa */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-navy-blue text-white p-10 rounded-[40px] mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/20 rounded-full translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-8 translate-y-8"></div>
            <div className="flex items-center gap-4 mb-6">
              <Droplets className="text-primary-red" size={36} />
              <h3 className="text-2xl font-bold text-primary-red">Toaleta pacjenta z profilaktyką przeciwodleżynową</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              Naszą kluczową usługą jest <strong className="text-white">kompleksowa toaleta pacjenta</strong> wykonywana zawsze przez dwuosobowy zespół pielęgniarski. Dbamy o higienę, godność i komfort osoby chorej, łącząc codzienną pielęgnację z profesjonalną <strong className="text-white">profilaktyką przeciwodleżynową</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                "Mycie i kąpiel pacjenta leżącego",
                "Zmiana bielizny osobistej i pościelowej",
                "Pielęgnacja skóry i nawilżanie",
                "Ocena skóry w kierunku odleżyn (skala Norton/Braden)",
                "Zmiana pozycji ciała — profilaktyka przeciwodleżynowa",
                "Stosowanie materacy i podkładów przeciwodleżynowych",
                "Pielęgnacja okolic intymnych i cewnika",
                "Toaleta jamy ustnej i pielęgnacja protez",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-red shrink-0 mt-0.5" size={18} />
                  <span className="text-white/90 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dlaczego dwuosobowy zespół */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Dlaczego dwuosobowy zespół pielęgniarski?</h3>
          <div className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-4">
              <Users className="text-primary-red shrink-0 mt-1" size={28} />
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  W Life Ratownictwo toaletę pacjenta <strong>zawsze wykonujemy w dwójkę</strong>. To nie jest kwestia wygody — to standard bezpieczeństwa. Dwuosobowy zespół pozwala na:
                </p>
                <ul className="space-y-3">
                  {[
                    "Bezpieczne obracanie i podnoszenie pacjenta bez ryzyka upadku",
                    "Dokładniejszą toaletę — jedna osoba przytrzymuje, druga wykonuje czynności pielęgnacyjne",
                    "Profesjonalną profilaktykę przeciwodleżynową z prawidłową zmianą pozycji",
                    "Mniejszy stres i większy komfort pacjenta",
                    "Szybszą realizację usługi przy zachowaniu najwyższej jakości",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary-red shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pełen zakres usług pielęgniarskich */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Pełen zakres usług pielęgniarskich</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Droplets className="text-primary-red" size={28} />,
                title: "Toaleta pacjenta",
                desc: "Kompleksowa higiena pacjenta leżącego: mycie ciała, pielęgnacja skóry, zmiana bielizny i pościeli. Wykonywana przez dwuosobowy zespół.",
              },
              {
                icon: <ShieldCheck className="text-primary-red" size={28} />,
                title: "Profilaktyka przeciwodleżynowa",
                desc: "Ocena ryzyka odleżyn, regularna zmiana pozycji, stosowanie specjalistycznych podkładów i materacy, pielęgnacja skóry narażonej na ucisk.",
              },
              {
                icon: <Heart className="text-primary-red" size={28} />,
                title: "Opieka pielęgniarska w domu",
                desc: "Podawanie leków, mierzenie parametrów życiowych, pielęgnacja ran, opatrunki, kontrola stanu zdrowia pacjenta w warunkach domowych.",
              },
              {
                icon: <Stethoscope className="text-primary-red" size={28} />,
                title: "Opieka pooperacyjna",
                desc: "Pielęgnacja pacjentów po zabiegach chirurgicznych — zmiana opatrunków, kontrola rany, profilaktyka zakrzepowa, rehabilitacja oddechowa.",
              },
              {
                icon: <Clock className="text-primary-red" size={28} />,
                title: "Opieka paliatywna",
                desc: "Wsparcie pielęgniarskie dla pacjentów w opiece paliatywnej — łagodzenie dolegliwości, pielęgnacja stomii, podawanie leków przeciwbólowych.",
              },
              {
                icon: <Users className="text-primary-red" size={28} />,
                title: "Wsparcie rodziny i opiekunów",
                desc: "Szkolenie rodzin z zasad pielęgnacji pacjenta leżącego, prawidłowego odżywiania, profilaktyki odleżyn i bezpiecznego przenoszenia.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#f4f7f6] p-7 rounded-3xl border-2 border-white shadow-sm"
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="font-bold text-navy-blue mb-3 text-xl">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pielęgniarka w transporcie medycznym */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-gradient-to-br from-primary-red to-red-800 text-white p-10 rounded-[40px] mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>
            <h3 className="text-2xl font-bold mb-6">Pielęgniarka w transporcie medycznym</h3>
            <p className="text-lg opacity-95 leading-relaxed mb-6">
              Podczas <strong>długich transportów medycznych</strong>, w tym <strong>transportów międzynarodowych</strong> (Polska–Niemcy, Polska–Czechy i dalej), nasi pacjenci mają zapewnioną opiekę pielęgniarską przez cały czas trwania przewozu. Pielęgniarka w ambulansie to gwarancja bezpieczeństwa na trasach liczących setki kilometrów.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                "Monitorowanie parametrów życiowych w trakcie jazdy",
                "Podawanie leków i płynów infuzyjnych",
                "Pielęgnacja pacjenta podczas wielogodzinnej podróży",
                "Toaleta pacjenta na trasie (postoje sanitarne)",
                "Opieka nad pacjentem z cewnikiem, stomią, PEG",
                "Wsparcie psychiczne i komfort pacjenta",
                "Dokumentacja medyczna transportu",
                "Współpraca z lekarzem zlecającym transport",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-white/80 shrink-0 mt-0.5" size={18} />
                  <span className="text-white/90 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dla kogo */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Dla kogo są nasze usługi pielęgniarskie?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "Pacjenci leżący i przewlekle chorzy",
              "Osoby po operacjach i urazach",
              "Pacjenci z odleżynami lub zagrożeni odleżynami",
              "Osoby starsze wymagające codziennej pielęgnacji",
              "Pacjenci w opiece paliatywnej i hospicyjnej",
              "Osoby transportowane na długich trasach krajowych i międzynarodowych",
              "Pacjenci ze stomią, cewnikiem, PEG lub sondą",
              "Rodziny potrzebujące wsparcia w opiece nad bliskim",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-primary-red shrink-0" size={20} />
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Jak zamawiamy */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Jak zamówić usługę pielęgniarską?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "01", title: "Kontakt", desc: "Zadzwoń lub napisz — opowiedz o potrzebach pacjenta" },
              { step: "02", title: "Konsultacja", desc: "Pielęgniarka oceni stan pacjenta i dobierze zakres usług" },
              { step: "03", title: "Realizacja", desc: "Dwuosobowy zespół przyjeżdża do pacjenta w umówionym terminie" },
              { step: "04", title: "Ciągłość opieki", desc: "Ustalamy harmonogram wizyt lub stałą opiekę" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary-red text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-navy-blue mb-2 text-lg">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ - SEO */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Najczęściej zadawane pytania</h3>
          <div className="space-y-4 mb-12">
            {[
              {
                q: "Czym różni się toaleta pacjenta od zwykłego mycia?",
                a: "Toaleta pacjenta to profesjonalna procedura pielęgniarska obejmująca nie tylko higienę ciała, ale również ocenę stanu skóry, profilaktykę przeciwodleżynową, pielęgnację okolic intymnych, cewnika czy stomii. W Life Ratownictwo wykonujemy ją zawsze w dwuosobowym zespole, co zapewnia bezpieczeństwo i komfort.",
              },
              {
                q: "Jak często powinna być wykonywana toaleta pacjenta leżącego?",
                a: "Pacjent leżący powinien mieć wykonaną toaletę minimum raz dziennie, a w przypadku pacjentów z nietrzymaniem moczu lub kału — częściej. Ustalamy indywidualny harmonogram wizyt w zależności od stanu zdrowia.",
              },
              {
                q: "Czy pielęgniarka może towarzyszyć pacjentowi podczas transportu za granicę?",
                a: "Tak. Podczas długich transportów medycznych, w tym międzynarodowych (np. Polska–Niemcy), zapewniamy opiekę pielęgniarską przez cały czas trwania przewozu. Pielęgniarka monitoruje stan pacjenta, podaje leki i zapewnia pielęgnację na trasie.",
              },
              {
                q: "Jaki jest obszar działania usług pielęgniarskich?",
                a: "Usługi pielęgniarskie realizujemy na terenie Raciborza, Rybnika, Wodzisławia Śląskiego, Kędzierzyna-Koźla, Opola i okolic. Transport z opieką pielęgniarską — na terenie całej Polski i Europy.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#f4f7f6] p-6 rounded-2xl border-2 border-white">
                <h4 className="font-bold text-navy-blue mb-2 text-lg">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cross-sell */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Powiązane usługi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Link to="/transport-medyczny" className="group bg-red-50 border-2 border-red-100 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-primary-red font-black text-sm uppercase tracking-wider mb-2">Transport</div>
              <h4 className="font-extrabold text-navy-blue text-lg mb-2 group-hover:text-primary-red transition-colors">Transport Medyczny</h4>
              <p className="text-gray-500 text-sm mb-3">Przewóz pacjentów ambulansami z opieką ratownika medycznego i pielęgniarki.</p>
              <span className="text-primary-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Sprawdź szczegóły <ChevronRight size={14} /></span>
            </Link>
            <Link to="/transport-miedzynarodowy" className="group bg-navy-blue p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-primary-red font-black text-sm uppercase tracking-wider mb-2">Międzynarodowy</div>
              <h4 className="font-extrabold text-white text-lg mb-2">Transport z pielęgniarką</h4>
              <p className="text-white/60 text-sm mb-3">Długie trasy z opieką pielęgniarską. Polska–Niemcy, repatriacja medyczna.</p>
              <span className="text-primary-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Sprawdź szczegóły <ChevronRight size={14} /></span>
            </Link>
            <Link to="/zabezpieczenia-medyczne" className="group bg-[#f4f7f6] border-2 border-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-primary-red font-black text-sm uppercase tracking-wider mb-2">Eventy</div>
              <h4 className="font-extrabold text-navy-blue text-lg mb-2 group-hover:text-primary-red transition-colors">Zabezpieczenia Medyczne</h4>
              <p className="text-gray-500 text-sm mb-3">Profesjonalne zabezpieczenie imprez masowych i wydarzeń sportowych.</p>
              <span className="text-primary-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Sprawdź szczegóły <ChevronRight size={14} /></span>
            </Link>
          </div>
        </div>

      </div>
    </ServiceLayout>
  );
};

export default UslugiPielegniarskie;
