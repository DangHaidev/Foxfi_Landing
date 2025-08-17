import Image from 'next/image';
const Feature = () => {
    return (
        <>
            <div>
                <div className="flex flex-col">
                    <div className="text-center mx-5">
                        <div>
                            <button className="uppercase px-5 py-1.5 rounded-3xl bg-gray-200">
                                Our Mission
                            </button>
                        </div>
                        <div className="font-semibold text-3xl mt-4 mb-6">
                            <h1>We create the democratized</h1>
                            <h1>Future of Staking</h1>
                        </div>
                        <div className="font-medium text-2xl">
                            <p>
                                We have rebuilt our exchange from the ground up.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <Image
                            src="/assets/hinh4.png"
                            alt="hinh4"
                            width={230}
                            height={270}
                        />
                    </div>
                    <div className="mx-5">
                        <div className="mb-5">
                            <div className="p-8 bg-gray-50">
                                <div>
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
                        <div className="mb-5">
                            <div className="p-8 bg-gray-50">
                                <Image
                                    src="/assets/lock.png"
                                    alt="lock"
                                    width={88}
                                    height={88}
                                />
                                <h1 className="capitalize font-medium text-[32px]">
                                    Help secure earn rewards
                                </h1>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="p-8 bg-gray-50">
                                <Image
                                    src="/assets/lock.png"
                                    alt="lock"
                                    width={88}
                                    height={88}
                                />
                                <h1 className="capitalize font-medium text-[32px]">
                                    Help secure earn rewards
                                </h1>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="p-8 bg-gray-50">
                                <Image
                                    src="/assets/lock.png"
                                    alt="lock"
                                    width={88}
                                    height={88}
                                />
                                <h1 className="capitalize font-medium text-[32px]">
                                    Help secure earn rewards
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
