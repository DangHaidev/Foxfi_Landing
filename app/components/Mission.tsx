import Image from 'next/image';

function Mission() {
    return (
        <div>
            <div>
                <div className="flex flex-col text-center">
                    <div>
                        <button>Mission</button>
                    </div>
                    <div className="mb-10 mt-4">
                        <h1 className="font-semibold text-3xl">
                            Ready to level up your Staking experience
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mx-5 py-4 bg-amber-950 rounded-2xl">
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
                                    src="/assets/hinh1.jpg"
                                    alt="hinh1"
                                    width={300}
                                    height={230}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
