import React from 'react';
import Image from 'next/image';

const Slider = () => {
    return (
        <>
            <div className="uppercase overflow-hidden bg-[#4179F9] font-mono">
                <div className="__slider text-white font-semibold py-13 text-7xl flex gap-20 items-center">
                    <Image
                        src="/assets/a.png"
                        alt="loho"
                        width={67}
                        height={83}
                    />

                    <div>
                        <h1>Secure</h1>
                    </div>

                    <Image
                        src="/assets/a.png"
                        alt="loho"
                        width={67}
                        height={83}
                        className=""
                    />

                    <div>
                        <h1>Transparent</h1>
                    </div>

                    <Image
                        src="/assets/a.png"
                        alt="loho"
                        width={67}
                        height={83}
                    />

                    <div>
                        <h1>easy</h1>
                    </div>

                    <Image
                        src="/assets/a.png"
                        alt="loho"
                        width={67}
                        height={83}
                    />

                    <div>
                        <h1>Secure</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
