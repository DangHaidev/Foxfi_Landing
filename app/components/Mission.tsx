'use client';
import Image from 'next/image';
import { waapi, stagger, animate } from 'animejs';
import { useEffect, useRef } from 'react';

function Mission() {
    useEffect(() => {
        animate('.star', {
            translateY: -10,
            scale: 1.2,
            opacity: [0, 1],
            duration: 1000,
            delay: 250,
            ease: 'out(3)',
            loop: true,
            alternate: true,
            autoplay: true,
        });
        // Tạo hiệu ứng Anime.js sau khi component render
        waapi.animate('.coin', {
            translateY: '2rem',
            delay: stagger(100),
            loop: true,
            alternate: true,
        });
    }, []);

    return (
        <div>
            <div className="my-26 px-4">
                <div className="flex flex-col text-center mt-4 lg:max-w-[591px] lg:mx-auto">
                    <div className="">
                        <button className="py-1.5 px-5 bg-[#0D0D0D1A] rounded-2xl leading-[20px] tracking-[2.66px]">
                            Mission
                        </button>
                    </div>
                    <div className="mb-10 mt-4 font-sans">
                        <h1 className="font-semibold text-3xl lg:text-5xl lg:leading-[57px]">
                            Ready to level up your{' '}
                            <span className="bg-gradient-to-b from-[#457EFF] to-[#2D63DD] bg-clip-text text-transparent">
                                Staking experience
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 mx-5 lg:max-w-[1312px] lg:mx-auto">
                    {/* Left Card */}
                    <div className="py-4 max-md:mb-4 bg-[#F1F7FA] rounded-2xl lg:w-1/2 lg:mb-0 ">
                        <div className="flex flex-col px-4 lg:gap-9 lg:py-12">
                            <div className="lg:pl-12 lg:pr-17">
                                <h2 className="font-sans lg:font-semibold lg:text-4xl capitalize bg-gradient-to-b from-[#457EFF] to-[#2D63DD] bg-clip-text text-transparent">
                                    The next innovation in Staking
                                </h2>
                                <div className="pt-4 max-md:pb-12 font-mono">
                                    <p>
                                        FoxFi Protocol revolutionizes staking
                                        with restaking, maximizing returns and
                                        empowering users to actively engage in
                                        proof-of-stake consensus.
                                    </p>
                                </div>
                            </div>

                            <div className="mx-auto lg:h-[372px] ">
                                <Image
                                    src="/assets/hinh1.png"
                                    alt="hinh1"
                                    width={468}
                                    height={360}
                                    className="max-lg:w-[320px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Cards Wrapper */}
                    <div className="flex flex-col gap-5 lg:w-1/2">
                        {/* Card 2 */}
                        <div className="py-4 bg-[#F1F7FA] rounded-2xl">
                            <div className="flex flex-col px-4 lg:flex-row-reverse lg:px-8 lg:py-7 lg:gap-9">
                                <div className="lg:w-1/2 lg:pr-10">
                                    <h2 className="font-sans lg:font-semibold lg:text-4xl capitalize bg-gradient-to-b from-[#457EFF] to-[#2D63DD] bg-clip-text text-transparent">
                                        For LINEA chain
                                    </h2>
                                    <div className="font-mono pt-4 max-md:pb-12">
                                        <p>
                                            FoxFi Protocol ensures efficient
                                            capital usage and incorporates
                                            advanced anti-slashing mechanisms,
                                            safeguarding staked assets for
                                            worry-free participation.
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto lg:w-1/2">
                                    <Image
                                        src="/assets/hinh2.png"
                                        alt="hinh2"
                                        width={300}
                                        height={230}
                                        sizes="(max-width: 768px) 300px, 254px"
                                        className="h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="py-4 bg-[#F1F7FA] rounded-2xl">
                            <div className="flex flex-col px-4 lg:flex-row-reverse lg:px-8 lg:pt-7 lg:pb- lg:gap-9">
                                <div className="lg:w-1/2 lg:pr-10">
                                    <h2 className="font-sans lg:font-semibold lg:text-4xl capitalize bg-gradient-to-b from-[#457EFF] to-[#2D63DD] bg-clip-text text-transparent">
                                        Maximize yield beyond lINEA
                                    </h2>
                                    <div className="font-mono pt-4 max-md:pb-12">
                                        <p>
                                            With cross-chain compatibility,
                                            users can stake and restake assets
                                            across multiple blockchains,
                                            expanding earning opportunities.
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto lg:w-1/2">
                                    <div className="relative">
                                        <Image
                                            src="/assets/hinh3.png"
                                            alt="hinh2"
                                            width={300}
                                            height={230}
                                            sizes="(max-width: 768px) 300px, 254px"
                                            className="h-auto"
                                        />
                                        <Image
                                            src="/assets/coin1.png"
                                            alt="coin1"
                                            width={55}
                                            height={55}
                                            className="absolute left-3 top-5 coin rotate-135"
                                        />
                                        <Image
                                            src="/assets/coin2.png"
                                            alt="coin2"
                                            width={45}
                                            height={45}
                                            className="absolute bottom-5 rotate-145 left-5 coin"
                                        />
                                        <Image
                                            src="/assets/coin2.png"
                                            alt="coin1"
                                            width={45}
                                            height={45}
                                            className="absolute right-7 top-2.5 rotate-220 coin"
                                        />
                                        <Image
                                            src="/assets/coin1.png"
                                            alt="coin2"
                                            width={60}
                                            height={60}
                                            className="absolute bottom-15 right-5 rotate-3 coin"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#EA783B]">
                <div className="px-4 py-8 lg:max-w-[1261px] lg:mx-auto">
                    <div>
                        <button className="uppercase px-5 py-1.5 rounded-3xl bg-gray-200 tracking-[2.66px] text-[14px]">
                            Our Mission
                        </button>
                    </div>
                    <div className="mt-6 mb-10">
                        <p className="textanime font-sans font-medium text-xl text-amber-50 lg:text-3xl">
                            At FoxFi Protocol, our mission is to empower DeFi
                            enthusiasts through revolutionary staking solutions.
                            With cross-chain compatibility, we maximize rewards,
                            ensure asset security, and provide immediate
                            liquidity.
                        </p>
                    </div>
                    <button className="bg-[#FFFFFF] rounded-3xl px-5 py-3">
                        <span className="text-amber-700">View Document</span>
                        <span className="pr-4 pl-2">{'>'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mission;
