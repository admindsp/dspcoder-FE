import UseFetchProblem from '@/utils/UseFetchProblem';
import React from 'react'
import Problem from './Problem';
const ProblemSelection = () => {
    const [isDSA, setisDSA] = React.useState(true);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const ChangeisDSA = (value: boolean) => {
        if (value !== isDSA) {
            setIsTransitioning(true);
            setTimeout(() => {
                setisDSA(value);
                setIsTransitioning(false);
            }, 300);
        }
    };
    const { problems, loading, error } = UseFetchProblem(isDSA);
    return (
        <div className='pb-4'>
            <div className="w-full text-gray-400 flex justify-around text-xl">
                <div
                    className={`pb-4 cursor-pointer relative group ${isDSA ? 'text-red-500' : 'hover:text-gray-300'} transition-colors duration-300`}onClick={() => ChangeisDSA(true)}>
                    <span>Data Structures & Algorithms</span>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-700 transform transition-all duration-300 ease-in-out ${isDSA ? 'scale-x-100' : 'scale-x-0'} group-hover:opacity-70`} />
                </div>
                <div className={`pb-4 cursor-pointer relative group ${!isDSA ? 'text-red-500' : 'hover:text-gray-300'} transition-colors duration-300`}onClick={() => ChangeisDSA(false)}>
                    <span>Embedded Systems</span>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-700 transform transition-all duration-300 ease-in-out ${!isDSA ? 'scale-x-100' : 'scale-x-0'} group-hover:opacity-70`} />
                </div>
            </div>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {/* {problems.map((problem, index) => (
                    <Problem key={index} {...problem} />                       // here we will map the problems 
                ))} */}
            </div>
        </div>
    );
};

export default ProblemSelection;