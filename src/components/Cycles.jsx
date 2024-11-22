import { useEffect } from 'react';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBikes } from '../redux/thunk';

function Cycles() {
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
} export default Cycles