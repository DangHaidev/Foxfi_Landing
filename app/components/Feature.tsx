'use client';
import Image from 'next/image';
import { useEffect } from 'react';
const Feature = () => {
    useEffect(() => {}, []);
    return (
        <>
            <div className="bg-gradient-to-br from-[#D3F2FF] via-[#F6F1FF] to-[#FBE5D4]">
                <div className="flex flex-col max-lg:py-[147px] lg:py-[156px]">
                    <div className="text-center mx-5 font-mono">
                        <div>
                            <button className="uppercase px-5 py-1.5 rounded-3xl bg-gray-200 tracking-[2.66px]">
                                Features
                            </button>
                        </div>
                        <div className="textanime font-sans font-semibold text-3xl mt-4 mb-6">
                            <h1>We create the democratized</h1>
                            <h1>Future of Staking</h1>
                        </div>
                        <div className="font-medium text-2xl">
                            <p>
                                We have rebuilt our exchange from the ground up.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto py-[50px] relative">
                        <Image
                            src="/assets/hinh4.png"
                            alt="hinh4"
                            width={230}
                            height={270}
                        />
                        <Image
                            src="/assets/Vector.png"
                            alt="coin1"
                            width={55}
                            height={55}
                            className="absolute top-25 -left-25 star coin"
                        />
                        <Image
                            src="/assets/Vector4.png"
                            alt="coin2"
                            width={45}
                            height={45}
                            className="absolute bottom-20 -left-15 star coin"
                        />
                        <Image
                            src="/assets/Vector3.png"
                            alt="coin1"
                            width={45}
                            height={45}
                            className="absolute -right-10 top-25 star coin"
                        />
                        <Image
                            src="/assets/Vector2.png"
                            alt="coin2"
                            width={60}
                            height={60}
                            className="absolute bottom-25 -right-20 star coin"
                        />
                    </div>
                    <div className="font-sans px-4 mx-5 lg:grid-cols-2 lg:grid lg:gap-5 lg:mx-auto lg:max-w-[1312px]">
                        <div className="max-lg:mb-5">
                            <div className="p-8 bg-[#FFFFFF80] rounded-2xl">
                                <div className="lg:flex lg:flex-row lg:items-center">
                                    <Image
                                        src="/assets/lock.png"
                                        alt="lock"
                                        width={88}
                                        height={88}
                                    />
                                    <h1 className="capitalize font-medium text-[32px] block">
                                        Help secure earn rewards
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:mb-5">
                            <div className="p-8 bg-[#FFFFFF80] rounded-2xl">
                                <div className="lg:flex lg:flex-row lg:items-center">
                                    <Image
                                        src="/assets/swap.png"
                                        alt="lock"
                                        width={88}
                                        height={88}
                                    />
                                    <h1 className="capitalize font-medium text-[32px]">
                                        earn with liquidity pools & yield
                                        farming
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:mb-5">
                            <div className="p-8 bg-[#FFFFFF80] rounded-2xl">
                                <div className="lg:flex lg:flex-row lg:items-center">
                                    <Image
                                        src="/assets/trans.png"
                                        alt="lock"
                                        width={88}
                                        height={88}
                                    />
                                    <h1 className="capitalize font-medium text-[32px]">
                                        Transfer your crypto to FoxFi
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:mb-5">
                            <div className="p-8 bg-[#FFFFFF80] rounded-2xl">
                                <div className="lg:flex lg:flex-row lg:items-center">
                                    <Image
                                        src="/assets/search.png"
                                        alt="lock"
                                        width={88}
                                        height={88}
                                    />
                                    <h1 className="capitalize font-medium text-[32px]">
                                        Discover insights into FoxFi. View
                                        wallets, transactions, and more
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
