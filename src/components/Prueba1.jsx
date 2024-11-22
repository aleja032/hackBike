import { useState, useEffect } from 'react';
import heart from '../assets/icons/heart.svg';
import comment from '../assets/icons/comment.svg';
import Cards from './Cards';

import { setComment } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { clearLocalStorage } from '../localStorage/localStorage';

import { fetchAllBikes } from '../redux/thunk';

function Prueba1() {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();
    let data = useSelector((state) => state.bikes.infoBikes);
    let loading = useSelector((state) => state.bikes.status);

    useEffect(() => {
        dispatch(fetchAllBikes());
    }, []);

    console.log("info: " ,loading);
    return (
        <>  {
            loading ?  
                data?.network?.stations?.map((station, index) => (
                <Cards key={index} station= {station}/>
                 )) 
            : 
                'Cargando...'
            }
        </>

    )
} export default Prueba1