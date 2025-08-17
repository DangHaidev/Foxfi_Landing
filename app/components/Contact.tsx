import React from 'react';
import Image from 'next/image';
const Contact = () => {
    return (
        <div>
            <div className="m-4 bg-gray-100 rounded-3xl">
                <div className="p-8 lg:flex lg:flex-row">
                    <div>
                        <div>
                            <button className="uppercase px-5 py-1.5 rounded-3xl bg-gray-200">
                                Contact us
                            </button>
                        </div>
                        <div className="font-semibold text-3xl my-4">
                            <h1>Come and Join Us</h1>
                        </div>

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
                    </div>
                    <div className="mx-auto">
                        <Image
                            src="/assets/hinh5.png"
                            alt="hinh5"
                            width={270}
                            height={265}
                            // sizes="(min-width: 1024px) 610px"
                            className="mx-auto lg:w-[610px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
