import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck, Globe, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const TransportMedyczny = () => {
  useSEO({ title: 'Transport Medyczny Racibórz', description: 'Profesjonalny transport medyczny w Raciborzu i na Śląsku. Przewóz pacjentów karetkami, transport leżący i siedzący, transport międzymiastowy.' });
  return (
    <ServiceLayout
      title="Transport"
      titleAccent="Medyczny"
      subtitle="Zapewniamy bezpieczny i profesjonalny przewóz pacjentów ambulansami przystosowanymi do ich potrzeb."
      bgImage="/gallery/transport/ambulans-life-transport-medyczny-slaski.webp"
      bgPosition="20% center"
      tiles={[
        { value: "24/7", label: "Dostępność", sub: "weekendy i święta" },
        { value: "3", label: "Ambulanse", sub: "w gotowości" },
        { value: "500+", label: "Transportów", sub: "rocznie" },
        { value: "PRM", label: "Ratownicy medyczni", sub: "w każdym zespole" },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-extrabold text-navy-blue mb-6 border-b-2 border-primary-red pb-4 inline-block">Bezpieczeństwo w podróży</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-xl">
          Transport medyczny jest potrzebny wtedy, gdy pacjent nie może bezpiecznie podróżować zwykłym samochodem. Dotyczy to szczególnie osób po operacjach, osób z ograniczoną możliwością poruszania się oraz wymagających pomocy przy przenoszeniu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
             whileHover={{ y: -5 }}
             className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm"
          >
            <MapPin className="text-primary-red mb-4" size={32} />
            <h4 className="font-bold text-navy-blue mb-4 text-xl">Region Śląska</h4>
            <p className="text-gray-600">Działamy w <strong>Raciborzu, Rybniku, Wodzisławiu Śląskim, Rydułtowach, Kędzierzynie-Koźlu, Żorach i Jastrzębiu-Zdroju</strong>.</p>
          </motion.div>
          <motion.div 
             whileHover={{ y: -5 }}
             className="bg-[#f4f7f6] p-8 rounded-3xl border-2 border-white shadow-sm"
          >
            <Globe className="text-primary-red mb-4" size={32} />
            <h4 className="font-bold text-navy-blue mb-4 text-xl">Polska i Europa</h4>
            <p className="text-gray-600">Organizujemy transporty na terenie całego kraju oraz w krajach europejskich (powroty z leczenia za granicą).</p>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-navy-blue mb-6">Kiedy zamówić transport medyczny?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            "Powrót pacjenta ze szpitala do domu",
            "Transport do przychodni lub kliniki",
            "Przewóz na dializy i rehabilitację",
            "Badania diagnostyczne",
            "Transport między placówkami medycznymi",
            "Transport osób leżących i niepełnosprawnych"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-primary-red/70 shrink-0" size={20} />
                <span className="font-semibold text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-navy-blue text-white p-10 rounded-[40px] mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/20 rounded-full translate-x-10 -translate-y-10"></div>
            <h3 className="text-2xl font-bold mb-6 text-primary-red">Bezpieczne przenoszenie</h3>
            <p className="text-lg opacity-90 leading-relaxed italic">
              "W wielu przypadkach pomagamy również przy bezpiecznym przeniesieniu pacjenta z łóżka do ambulansu oraz z ambulansu do mieszkania lub placówki medycznej. Każdy transport planowany jest indywidualnie."
            </p>
        </div>
        {/* Landing pages */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Szczegóły naszych usług transportowych</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Link to="/transport-nfz" className="group bg-[#f4f7f6] border-2 border-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-primary-red font-black text-sm uppercase tracking-wider mb-2">NFZ / POZ</div>
              <h4 className="font-extrabold text-navy-blue text-lg mb-2 group-hover:text-primary-red transition-colors">Transport Sanitarny NFZ</h4>
              <p className="text-gray-500 text-sm mb-3">Bezpłatny transport na zlecenie lekarza POZ. Dializy, rehabilitacja, chemioterapia.</p>
              <span className="text-primary-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Sprawdź szczegóły <ChevronRight size={14} /></span>
            </Link>
            <Link to="/transport-prywatny" className="group bg-red-50 border-2 border-red-100 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-primary-red font-black text-sm uppercase tracking-wider mb-2">Prywatny</div>
              <h4 className="font-extrabold text-navy-blue text-lg mb-2 group-hover:text-primary-red transition-colors">Transport Prywatny</h4>
              <p className="text-gray-500 text-sm mb-3">Bez skierowania, bez kolejek. Ambulans z ratownikiem 24/7. Cennik od 4 zł/km.</p>
              <span className="text-primary-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Sprawdź szczegóły <ChevronRight size={14} /></span>
            </Link>
            <Link to="/transport-miedzynarodowy" className="group bg-navy-blue p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-primary-red font-black text-sm uppercase tracking-wider mb-2">Międzynarodowy</div>
              <h4 className="font-extrabold text-white text-lg mb-2">Polska–Niemcy</h4>
              <p className="text-white/60 text-sm mb-3">Repatriacja medyczna, współpraca z Krankenkassen. 25 km od granicy.</p>
              <span className="text-primary-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Sprawdź szczegóły <ChevronRight size={14} /></span>
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Przeczytaj też na blogu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <Link to="/blog/ile-kosztuje-prywatny-transport-medyczny-cennik-2026" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Ile kosztuje transport medyczny? Cennik 2026
            </Link>
            <Link to="/blog/transport-medyczny-nfz-vs-prywatnie-roznice" className="flex items-center gap-3 bg-[#f4f7f6] p-5 rounded-2xl font-semibold text-navy-blue hover:text-primary-red hover:shadow-md transition-all">
              <ChevronRight className="text-primary-red shrink-0" size={18} /> Transport na NFZ vs prywatnie — różnice
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Nasze ambulanse w akcji</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              "/gallery/transport/Ambulanse Life-RMiP.webp",
              "/gallery/transport/Transport medyczny Katowice.webp",
              "/gallery/transport/IMG_20221004_142311.webp",
              "/gallery/transport/IMG_20221004_142724.webp",
              "/gallery/transport/Transport medyczny Śląsk.webp",
              "/gallery/transport/Transport osób chorych.webp",
              "/gallery/transport/IMG_20221004_142504.webp",
              "/gallery/transport/Transport sanitarny Racibórz.webp",
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src={src} alt={`Transport medyczny ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-navy-blue mb-6">Zobacz też nasze usługi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/zabezpieczenia-medyczne" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Zabezpieczenia medyczne</Link>
            <Link to="/szkolenia-pierwsza-pomoc" className="bg-navy-blue text-white p-5 rounded-2xl font-bold text-center hover:bg-navy-blue-light transition-all">Szkolenia z pierwszej pomocy</Link>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TransportMedyczny;
