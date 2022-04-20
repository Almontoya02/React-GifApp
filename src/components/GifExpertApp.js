import React, { useState } from "react";
import { AddCategory } from "./AddCategory.tsx";
import { GridGif } from "./GridGif.tsx";

const GifExpertApp = ()=>{
    //const categories =["Acción", "Aventura","Animación"];
    const [categories,setCategories] = useState(["Seven Deadly Sins"]);
    /**const handleAdd = ()=>{
        //setCategories([...categories,"Anime"]);
        setCategories(cats=>[...cats,"Anime"])
    }**/
    return <>
       <div className="containerMain">
       <h1>
            GifExpertApp
        </h1>
        
        <AddCategory setCategories={setCategories}></AddCategory>
        <ol>
            {
                categories.map(cat=>(
                    <GridGif
                        key={cat}
                        category={cat}
                    />
                    
                    )
                )
            }
        </ol>

       </div>
    </>
}

export default GifExpertApp