import Image from 'next/image';
const nav = () => {
    return (
        <>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-2">
                    <div>
                        <Image
                            src="/assets/a.jpg"
                            alt="logo"
                            width={26}
                            height={32}
                        />
                    </div>

                    <div>
                        <h1 className="uppercase">Foxfi</h1>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-18 max-[768px]:hidden">
                        <li>About</li>
                        <li>Features</li>
                        <li>Mission</li>
                        <li>Community</li>
                    </ul>
                </div>
                <div className="bg-amber-600 rounded-4xl">
                    <button className="py-3 px-5">Launch App</button>
                </div>
            </div>
        </>
    );
};

export default nav;
