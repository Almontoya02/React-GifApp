import React, {useState,useEffect} from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GridGif = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
   // getGifs();
    return (
        <>
            <div className="ContainerGifs">
                <h3><b>{category}</b></h3>
                {loading&&<p>loading</p>}
                <div className="card-grid animate__animated animate__bounceInLeft">
                    
                    <ol >
                            {
                                images.map((img)=>(
                                    <GifItem key={img.id} {...img}></GifItem>
                                ))
                            }
                    </ol>

                </div>
            </div>
        </>
    )
}
