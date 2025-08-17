import VideoBackground from './VideoBackground';
function Hero() {
    return (
        <div className="relative">
            <VideoBackground />
            <div className="flex flex-col text-center px-4 pt-48 pb-67 lg:max-w-[883px] mx-auto">
                <div>
                    <h1 className="font-semibold text-3xl lg:text-[68px]">
                        Decentralized Native restaking protocol
                    </h1>
                </div>
                <div className="py-6 lg:text-2xl lg:px-28">
                    <p>
                        Unlock limitless rewards, Elevate your staking potential
                        with cutting-edge Decentralized restaking mastery
                    </p>
                </div>
                <div>
                    <button className="bg-amber-600 rounded-4xl">
                        Launch App
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
