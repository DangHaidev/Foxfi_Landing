import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <div className="p-4 bg-gray-100">
                <div>
                    <div className="uppercase flex-row flex items-center gap-2">
                        <div>
                            <Image
                                src="/assets/a.jpg"
                                alt="logo"
                                width={26}
                                height={32}
                            />
                        </div>
                        <div>
                            <h1>FoxFI</h1>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-between">
                            <li>Documents</li>
                            <li>Features</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <ul className="flex flex-row gap-4">
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
                        <div>
                            <p>© 2024 FoxFi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
