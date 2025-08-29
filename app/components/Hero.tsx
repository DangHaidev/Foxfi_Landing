'use client';
import VideoBackground from './VideoBackground';
import { animate, stagger, text } from 'animejs';
import { useEffect, useRef } from 'react';

function Hero() {
    useEffect(() => {
        const { chars } = text.split('.textanime', {
            words: false,
            chars: true,
        });
        animate(chars, {
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
            ],
            // Property specific parameters
            rotate: {
                from: '-1turn',
                delay: 0,
            },
            delay: stagger(50),
            ease: 'inOutCirc',
            loopDelay: 1000,
            loop: true,
        });
    }, []);
    return (
        <div className="relative">
            <VideoBackground />
            <div className="flex flex-col text-center px-4 pt-48 pb-67 lg:max-w-[883px] mx-auto font-mono">
                <div>
                    <h1 className="font-sans font-semibold text-3xl lg:text-[68px] bg-gradient-to-b from-[#457EFF] to-[#2D63DD] bg-clip-text text-transparent">
                        Decentralized Native restaking protocol
                    </h1>
                </div>
                <div className="textanime py-6 lg:text-2xl lg:px-28">
                    <p>
                        Unlock limitless rewards, Elevate your staking potential
                        with cutting-edge Decentralized restaking mastery
                    </p>
                </div>
                <div>
                    <button className="rounded-4xl px-[49px] py-3 bg-gradient-to-b from-[#FF9345] to-[#DD6735] text-white cursor-pointer duration-500 hover:scale-125">
                        Launch App
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
