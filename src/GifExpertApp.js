import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleApp = () => {
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr></hr>

            {/* <button onClick={
                handleApp
            }>Agregar</button> */}
            <ol>
                {
                    // categories.map( (cat, i) => { 
                    //     return <li key={cat}>{cat}</li> 
                    // })
                    categories.map( (cat, i) =>
                        <GifGrid
                            key={ cat }
                            category={ cat }
                        ></GifGrid> 
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;