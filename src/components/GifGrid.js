//import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {
    // const [images,setImages]= useState([]);
    const {data,loading} = useFetchGifs(category);
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {loading && <h3 className="animate__animated animate__fadeIn">Cargando...</h3>}
            <div className="card-grid">
                
                {
                    data.map(img=>(
                        <GifGridItem key={img.id} { ...img} />
                        //<GifGridItem key={img.id} img={img} />
                    ))
                }
                
            </div>
        </>
    )
}
export default GifGrid;
