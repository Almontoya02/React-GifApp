
import { useState,useEffect } from 'react';
import { getGifs } from './../helpers/getGifs';

export const useFetchGifs = ( category )=>{
    const [stateimg, setStateImg] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {//Los efectos no pueden ser async
        getGifs(category).then(imgs=>{
            setStateImg({
                data:imgs,
                loading:false
            })
        })
    }, [category])//se dispara cuando cambie category 
    return stateimg;
}   