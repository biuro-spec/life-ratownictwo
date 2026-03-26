import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Lazy-loaded pages for route-level code splitting
const Home = lazy(() => import('./pages/Home'));
const ONas = lazy(() => import('./pages/ONas'));
const Blog = lazy(() => import('./pages/Blog'));
const TransportMedyczny = lazy(() => import('./pages/TransportMedyczny'));
const ZabezpieczeniaMedyczne = lazy(() => import('./pages/ZabezpieczeniaMedyczne'));
const Szkolenia = lazy(() => import('./pages/Szkolenia'));
const TransportNFZ = lazy(() => import('./pages/TransportNFZ'));
const TransportPrywatny = lazy(() => import('./pages/TransportPrywatny'));
const TransportMiedzynarodowy = lazy(() => import('./pages/TransportMiedzynarodowy'));
const UslugiPielegniarskie = lazy(() => import('./pages/UslugiPielegniarskie'));

const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

// ScrollToTop component to fix SPA scroll position issue
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nas" element={<ONas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/transport-medyczny" element={<TransportMedyczny />} />
              <Route path="/zabezpieczenia-medyczne" element={<ZabezpieczeniaMedyczne />} />
              <Route path="/szkolenia-pierwsza-pomoc" element={<Szkolenia />} />
              <Route path="/transport-nfz" element={<TransportNFZ />} />
              <Route path="/transport-prywatny" element={<TransportPrywatny />} />
              <Route path="/transport-miedzynarodowy" element={<TransportMiedzynarodowy />} />
              <Route path="/uslugi-pielegniarskie" element={<UslugiPielegniarskie />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        <footer className="bg-[#081525] text-white/40 py-20 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="mb-6">
                            <span className="text-white font-bold text-2xl">LIFE</span>
                        </div>
                        <p className="text-base leading-relaxed mb-6">
                            Profesjonalna opieka medyczna i transport sanitarny. Działamy z misją i pasją od 2012 roku.
                        </p>
                        <div className="flex gap-4">
                             <a href="https://facebook.com" className="w-11 h-11 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors text-white">FB</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Nasze Usługi</h4>
                        <ul className="space-y-3">
                            <li><Link to="/transport-medyczny" className="hover:text-primary-red transition-colors text-sm">Transport Medyczny</Link></li>
                            <li><Link to="/zabezpieczenia-medyczne" className="hover:text-primary-red transition-colors text-sm">Zabezpieczenia Imprez</Link></li>
                            <li><Link to="/szkolenia-pierwsza-pomoc" className="hover:text-primary-red transition-colors text-sm">Szkolenia Pierwszej Pomocy</Link></li>
                            <li><Link to="/uslugi-pielegniarskie" className="hover:text-primary-red transition-colors text-sm">Usługi Pielęgniarskie</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Strony</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-primary-red transition-colors text-sm">Strona Główna</Link></li>
                            <li><Link to="/o-nas" className="hover:text-primary-red transition-colors text-sm">O nas</Link></li>
                            <li><Link to="/blog" className="hover:text-primary-red transition-colors text-sm">Aktualności / Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Kontakt</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:602622840" className="flex items-center gap-3 text-sm py-1.5 hover:text-primary-red transition-colors">
                                    <Phone size={16} className="text-primary-red shrink-0" />
                                    <span className="font-bold text-white">+48 602 622 840</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:505751858" className="flex items-center gap-3 text-sm py-1.5 hover:text-primary-red transition-colors">
                                    <Phone size={16} className="text-primary-red shrink-0" />
                                    <span className="font-bold text-white">+48 505 751 858</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:biuro@life-ratownictwo.pl" className="flex items-center gap-3 text-sm py-1.5 hover:text-primary-red transition-colors">
                                    <Mail size={16} className="text-primary-red shrink-0" /> biuro@life-ratownictwo.pl
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm py-1.5">
                                <MapPin size={16} className="text-primary-red shrink-0" /> ul. Rudzka 14, Racibórz
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-10 text-center text-xs opacity-50 border-t border-white/5">
                    &copy; 2025 LIFE-Ratownictwo Medyczne i Piel&eogon;gniarstwo Sp. z o.o. | NIP: 6392023251 | KRS: 0000920762 | REGON: 389900423 &middot; Podmiot leczniczy wpisany do rejestru MZ
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
                    <span className="text-[10px] text-white/50">Stronę wykonał</span>
                    <a href="https://webstudio47.pl" target="_blank" rel="noopener noreferrer">
                        <img src="/webstudio47-logo.png" alt="WebStudio47" className="h-6" />
                    </a>
                </div>
            </div>
        </footer>
      </div>
      <ScrollToTopButton />
      <CookieConsent />
    </Router>
  );
}

export default App;
