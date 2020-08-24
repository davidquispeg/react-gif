import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{
    //api: d94ljYrePx90uQdzSgvVpKkbmPYT0olj
    const [categories, setCategories] = useState(["Dragon Ball"]);
    // const handleAdd=()=>{
    //     setCategories(cats=>[...cats,"HunterXHunter"]);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />            
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={category} category = {category} />
                    ))
                }
            </ol>
        </>
    );
}
export default GifExpertApp;