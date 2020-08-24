import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

//Estos son CustomHooks y funcionan como los functional Components
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //Los useEffects no pueden ser async
    useEffect(()=>{
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    },[category])
    
    return state;
}
