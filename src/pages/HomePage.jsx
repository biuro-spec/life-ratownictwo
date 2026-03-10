import { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Team from '../components/Team';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const HomePage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen">
            <a href="#main-content" className="skip-nav">Przejdź do treści</a>
            <Navbar scrolled={scrolled} />
            <main id="main-content">
                <Hero />
                <About />
                <Services />
                <Fleet />
                <Team />
                <Gallery />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default HomePage;
