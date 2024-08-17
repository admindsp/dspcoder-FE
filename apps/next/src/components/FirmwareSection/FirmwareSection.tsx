import React from 'react';
import Card from './Card';
import data from '@/constants/HomePageData';
const FirmwareSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between mt-20">
            <div className="mb-8 lg:mb-0 pl-12">
                <span className="text-white text-4xl lg:text-5xl font-bold block">Learn firmware</span>
                <span className="text-white text-4xl lg:text-5xl font-bold block">on a range of hardware's</span>
                <span className="text-[#9a9a9a] text-lg lg:text-xl w-full lg:w-[35rem] flex flex-wrap mt-4 font-bold">
                    Learn how to develop firmware for a variety of simulated hardware platforms powered by Renode, sensors, and actuators
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 lg:gap-x-8">
                {data.LogoArray.map((obj,index)=>(
                    <Card src={obj.src} title={obj.title} alt={obj.alt}/>
                ))}
            </div>
        </div>
    );
};

export default FirmwareSection;
