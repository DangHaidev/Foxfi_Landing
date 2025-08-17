import Image from 'next/image';

function Mission() {
    return (
        <div>
            <div className="my-26">
                <div className="flex flex-col text-center mt-4">
                    <div>
                        <button>Mission</button>
                    </div>
                    <div className="mb-10 mt-4">
                        <h1 className="font-semibold text-3xl">
                            Ready to level up your Staking experience
                        </h1>
                    </div>
                </div>
                {/* <div className="flex flex-col">
                    <div className="mx-5 py-4 mb-4 bg-gray-100 rounded-2xl">
                        <div className="flex flex-col px-4">
                            <h2>The next innovation in Staking</h2>
                            <div className="pt-4 pb-12">
                                <p>
                                    FoxFi Protocol revolutionizes staking with
                                    restaking, maximizing returns and empowering
                                    users to actively engage in proof-of-stake
                                    consensus.
                                </p>
                            </div>

                            <div className="mx-auto">
                                <Image
                                    src="/assets/hinh1.png"
                                    alt="hinh1"
                                    width={300}
                                    height={230}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 py-4 mb-4 bg-gray-100 rounded-2xl">
                        <div className="flex flex-col px-4">
                            <h2>For LINEA chain</h2>
                            <div className="pt-4 pb-12">
                                <p>
                                    FoxFi Protocol ensures efficient capital
                                    usage and incorporates advanced
                                    anti-slashing mechanisms, safeguarding
                                    staked assets for worry-free participation.
                                </p>
                            </div>

                            <div className="mx-auto">
                                <Image
                                    src="/assets/hinh2.png"
                                    alt="hinh1"
                                    width={300}
                                    height={230}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 py-4 mb-4 bg-gray-100 rounded-2xl">
                        <div className="flex flex-col px-4">
                            <h2>Maximize yield beyond lINEA</h2>
                            <div className="pt-4 pb-12">
                                <p>
                                    With cross-chain compatibility, users can
                                    stake and restake assets across multiple
                                    blockchains, expanding earning
                                    opportunities.
                                </p>
                            </div>

                            <div className="mx-auto">
                                <Image
                                    src="/assets/hinh3.png"
                                    alt="hinh1"
                                    width={300}
                                    height={230}
                                />
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="flex flex-col lg:flex-row lg:gap-6 mx-5 lg:max-w-[1312px] lg:mx-auto">
                    {/* Left Card */}
                    <div className="py-4 mb-4 bg-gray-100 rounded-2xl lg:w-1/2 lg:mb-0">
                        <div className="flex flex-col px-4">
                            <h2>The next innovation in Staking</h2>
                            <div className="pt-4 pb-12">
                                <p>
                                    FoxFi Protocol revolutionizes staking with
                                    restaking, maximizing returns and empowering
                                    users to actively engage in proof-of-stake
                                    consensus.
                                </p>
                            </div>
                            <div className="mx-auto">
                                <Image
                                    src="/assets/hinh1.png"
                                    alt="hinh1"
                                    width={300}
                                    height={230}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Cards Wrapper */}
                    <div className="flex flex-col gap-4 lg:w-1/2">
                        {/* Card 2 */}
                        <div className="py-4 bg-gray-100 rounded-2xl">
                            <div className="flex flex-col px-4">
                                <h2>For LINEA chain</h2>
                                <div className="pt-4 pb-12">
                                    <p>
                                        FoxFi Protocol ensures efficient capital
                                        usage and incorporates advanced
                                        anti-slashing mechanisms, safeguarding
                                        staked assets for worry-free
                                        participation.
                                    </p>
                                </div>
                                <div className="mx-auto">
                                    <Image
                                        src="/assets/hinh2.png"
                                        alt="hinh2"
                                        width={300}
                                        height={230}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="py-4 bg-gray-100 rounded-2xl">
                            <div className="flex flex-col px-4">
                                <h2>Maximize yield beyond LINEA</h2>
                                <div className="pt-4 pb-12">
                                    <p>
                                        With cross-chain compatibility, users
                                        can stake and restake assets across
                                        multiple blockchains, expanding earning
                                        opportunities.
                                    </p>
                                </div>
                                <div className="mx-auto">
                                    <Image
                                        src="/assets/hinh3.png"
                                        alt="hinh3"
                                        width={300}
                                        height={230}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-amber-700">
                <div className="px-4 py-8 lg:max-w-[1261px] lg:mx-auto">
                    <div>
                        <button className="uppercase px-5 py-1.5 rounded-3xl bg-gray-200">
                            Our Mission
                        </button>
                    </div>
                    <div className="mt-6 mb-10">
                        <p className="font-medium text-xl text-amber-50 lg:text-3xl">
                            At FoxFi Protocol, our mission is to empower DeFi
                            enthusiasts through revolutionary staking solutions.
                            With cross-chain compatibility, we maximize rewards,
                            ensure asset security, and provide immediate
                            liquidity.
                        </p>
                    </div>
                    <button className="bg-amber-600 rounded-3xl px-5 py-3">
                        <span className="">View Document</span>
                        <span className="pr-4 pl-2">{'>'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mission;
