import React from 'react';
import Image from 'next/image';
const Contact = () => {
    return (
        <div className="px-4 py-13">
            <div className="lg:mx-auto bg-[radial-gradient(circle_at_center,#D2E4FF,#D2E4FF)] rounded-3xl lg:max-w-[1312px]">
                <div className="p-8 lg:flex lg:flex-row lg:overflow-hidden">
                    <div className="lg:pt-16 lg:pl-10 lg:pr-[140px]">
                        <div>
                            <button className="uppercase px-5 py-1.5 rounded-3xl bg-gray-200 tracking-[2.66px] ">
                                Contact us
                            </button>
                        </div>
                        <div className="font-sans font-semibold text-3xl my-4 lg:text-5xl">
                            <h1>Come and Join Us</h1>
                        </div>

                        <div>
                            <ul className="flex flex-row gap-4">
                                <li>
                                    <Image
                                        src="/assets/mage_x.png"
                                        alt="X"
                                        width={56}
                                        height={56}
                                        className="max-sm:size-6"
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/assets/ic_baseline-discord.png"
                                        alt="X"
                                        width={56}
                                        height={56}
                                        className="max-sm:size-6"
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/assets/mingcute_telegram-fill.png"
                                        alt="X"
                                        width={56}
                                        height={56}
                                        className="max-sm:size-6"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <Image
                            src="/assets/hinh5.png"
                            alt="hinh5"
                            width={610}
                            height={610}
                            // sizes="(min-width: 1024px) 610px"
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
