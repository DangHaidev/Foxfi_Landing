import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        // <div className="bg-gray-100">
        //     <div className="p-4  lg:flex lg:flex-row lg:max-w-[1224px]">
        //         <div className="lg:flex lg:flex-row">
        //             <div className="uppercase flex-row flex items-center gap-2">
        //                 <div>
        //                     <Image
        //                         src="/assets/a.jpg"
        //                         alt="logo"
        //                         width={26}
        //                         height={32}
        //                     />
        //                 </div>
        //                 <div>
        //                     <h1>FoxFI</h1>
        //                 </div>
        //             </div>
        //             <div>
        //                 <ul className="flex flex-row justify-between">
        //                     <li>Documents</li>
        //                     <li>Features</li>
        //                     <li>Community</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div>
        //             <div className="flex justify-between">
        //                 <div>
        //                     <ul className="flex flex-row gap-4">
        //                         <li>
        //                             <Image
        //                                 src="/assets/mage_x.png"
        //                                 alt="X"
        //                                 width={24}
        //                                 height={24}
        //                             />
        //                         </li>
        //                         <li>
        //                             <Image
        //                                 src="/assets/ic_baseline-discord.png"
        //                                 alt="X"
        //                                 width={24}
        //                                 height={24}
        //                             />
        //                         </li>
        //                         <li>
        //                             <Image
        //                                 src="/assets/mingcute_telegram-fill.png"
        //                                 alt="X"
        //                                 width={24}
        //                                 height={24}
        //                             />
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className="block">
        //                     <p>© 2024 FoxFi</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <footer className="bg-gray-900 text-white px-6 py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <Image
                        src="/assets/a.jpg"
                        alt="FoxFi Logo"
                        width={26}
                        height={32}
                    />
                    <span>FOXFI</span>
                </div>

                <ul className="flex flex-row gap-4 md:gap-8 text-sm">
                    <li>Documents</li>
                    <li>Features</li>
                    <li>Community</li>
                </ul>

                <ul className="flex gap-4 text-xl">
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
