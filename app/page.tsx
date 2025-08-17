import Image from 'next/image';
import Nav from './components/nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Feature from './components/Feature';
import Slider from './components/Slider';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Mission />
            <Feature />
            <Slider />
            <Contact />
            <Footer />
        </>
    );
}
