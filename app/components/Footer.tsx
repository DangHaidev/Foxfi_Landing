import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#222527] text-white px-6 py-6 font-mono">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <Image
                        src="/assets/a.png"
                        alt="FoxFi Logo"
                        width={26}
                        height={32}
                    />
                    <span>FOXFI</span>
                </div>

                <ul className="flex flex-row gap-4 md:gap-8 text-sm cursor-pointer">
                    <li>Documents</li>
                    <li>Features</li>
                    <li>Community</li>
                </ul>

                <ul className="flex gap-4 text-xl cursor-pointer">
                    <li>
                        <Image
                            src="/assets/mage_x.png"
                            alt="X"
                            width={24}
                            height={24}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/ic_baseline-discord.png"
                            alt="X"
                            width={24}
                            height={24}
                        />
                    </li>
                    <li>
                        <Image
                            src="/assets/mingcute_telegram-fill.png"
                            alt="X"
                            width={24}
                            height={24}
                        />
                    </li>
                </ul>
            </div>

            <div className="mx-auto mt-6 text-center text-sm text-gray-400">
                © 2024 FoxFi
            </div>
        </footer>
    );
};

export default Footer;
