import React from 'react';
import { IconType } from 'react-icons';

interface Language {
    icon: IconType;
    language: string;
    color: string;
}

const Card = (prop: Language) => {
    return (
        <div className="flex items-center gap-2 lg:gap-3">
            <prop.icon color={prop.color} className="text-xl lg:text-2xl" />
            <p className="text-[#9aa3b3] text-base lg:text-[1.3rem]">{prop.language}</p>
        </div>
    );
};

export default Card;
