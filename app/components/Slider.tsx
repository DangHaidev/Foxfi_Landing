import React from 'react';
import Image from 'next/image';

const Slider = () => {
    return (
        <>
            <div className="uppercase bg-blue-700 overflow-hidden">
                <div className="__slider text-white font-semibold text-7xl p-10 flex flex-row items-center justify-center ">
                    <div className="px-16">
                        <Image
                            src="/assets/a.png"
                            alt="loho"
                            width={67}
                            height={83}
                        />
                    </div>
                    <div>
                        <h1>Secure</h1>
                    </div>
                    <div className="px-16">
                        <Image
                            src="/assets/a.png"
                            alt="loho"
                            width={67}
                            height={83}
                        />
                    </div>
                    <div>
                        <h1>Transparent</h1>
                    </div>
                    <div className="px-16">
                        <Image
                            src="/assets/a.png"
                            alt="loho"
                            width={67}
                            height={83}
                        />
                    </div>
                    <div>
                        <h1>easy</h1>
                    </div>
                    <div className="px-16">
                        <Image
                            src="/assets/a.png"
                            alt="loho"
                            width={67}
                            height={83}
                        />
                    </div>
                    <div>
                        <h1>Secure</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
