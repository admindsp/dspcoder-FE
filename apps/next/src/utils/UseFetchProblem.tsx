import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProblemType } from '@/types/Problem';
import { set } from 'zod';

const UseFetchProblem = (isDSA:boolean) => {
    const [problems, setProblems] = useState<ProblemType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProblems = async () => {
            setLoading(true);
            setError(null);
            try{
                // getting data
                const responce = await axios.get('');
                setProblems(responce.data);
            }catch(e: any){
                setError(e);
            }
            finally{
                setLoading(false);
            }
        };
        fetchProblems();
    }, [isDSA]);
    return {problems, loading, error};
}
export default UseFetchProblem;