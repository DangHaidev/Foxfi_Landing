import Image from 'next/image';
const nav = () => {
    return (
        <>
            <div className="flex justify-between items-center px-4 py-3 sm:px-16 font-mono">
                <div className="cursor-pointer flex items-center gap-2">
                    <div>
                        <Image
                            src="/assets/a.jpg"
                            alt="logo"
                            width={26}
                            height={32}
                        />
                    </div>

                    <div>
                        <h1 className="uppercase font-extrabold">Foxfi</h1>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-18 max-[768px]:hidden cursor-pointer">
                        <li>About</li>
                        <li>Features</li>
                        <li>Mission</li>
                        <li>Community</li>
                    </ul>
                </div>
                <div>
                    <button className="cursor-pointer rounded-4xl px-[49px] max-sm:px-5 py-3 bg-gradient-to-b from-[#FF9345] to-[#DD6735] text-white">
                        Launch App
                    </button>
                </div>
            </div>
        </>
    );
};

export default nav;
