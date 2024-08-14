import React from 'react';
import Card from './Card';
import data from './FirmwareData';

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-x-24">
                {data.map((obj, index) => (
                    <Card key={index} color={obj.color} language={obj.language} icon={obj.icon} />
                ))}
            </div>
        </div>
    );
};

export default FirmwareSection;
