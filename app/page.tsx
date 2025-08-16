import Image from 'next/image';
import Nav from './components/nav';
import Hero from './components/Hero';
import Mission from './components/Mission';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Mission />
        </>
    );
}
