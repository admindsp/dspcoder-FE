import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageItem {
    src?: StaticImageData;
    alt?: string;
    title:string;
}

const Card = (prop: ImageItem) => {
    return (
        <div className="flex items-center gap-2 lg:gap-3">
            {
            prop.src ? (
                <Image src={prop.src} alt={prop.alt||''}/>
            ):(
                <></>
            )
            }
            <span className='text-[#9a9a9a] text-xl font-bold w-28'>{prop.title}</span>
        </div>
    );
};

export default Card;
