import { useState, useEffect } from 'react';
import heart from '../assets/icons/heart.svg';
import comment from '../assets/icons/comment.svg';
import { setComment } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { clearLocalStorage } from '../localStorage/localStorage';

import { fetchAllBikes } from '../redux/thunk';

function Prueba1 ({bikeId}){
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const commentLocal = useSelector((state) => state.bikes.commentsLocalStorage);
    let data = useSelector((state) => state.bikes.infoBikes);
    let loading = useSelector((state) => state.bikes.status);

    const handleComment = (e) => {
        e.preventDefault();  
        // console.log("valor:", e.value);
        console.log("valor:", newComment);

        dispatch(setComment({
            id: bikeId, 
            name: 'Anónimo',
            body: newComment,
        }));
        setNewComment('');
    };
    const Limpiar = () => {
        clearLocalStorage();
    }
    useEffect(() => {
        dispatch(fetchAllBikes());
    }, []);

    // console.log(loading ? 'cargando..' :  'ya cargo');
        console.log(data);

    // console.log('datos: ', data.network.stations);

    return(
        <>
        {/* {   data.network.stations.map(item => (
                                    <p key={index}>{item}</p> 
                                ))
        }  */}
        <div className="border d-flex flex-column custom">
            <div className="row gx-0 mt-2">
                <div className="col-4 text-center p-2 d-flex justify-content-center align-items-center custom-fz">
                    <img src={heart} alt="Heart" className="me-1 icon" />
                    Likes
                </div>
                <button  
                    className="col-4 text-center p-2 d-flex justify-content-center align-items-center custom-fz btn" 
                    data-bs-toggle="collapse"  
                    data-bs-target={`#${bikeId}`} 
                    aria-expanded="false" 
                    aria-controls={bikeId}> 
                    <img src={comment} alt="Comentarios" className='me-2' />
                    Commentarios
                </button>
                <div className="col-4 text-center p-2 d-flex justify-content-center align-items-center custom-fz">
                     Shares
                </div>
            </div>

            <div className="row gx-0 custom-width">
                <div className="col-12">
                    <div className="collapse" id={bikeId}>
                        <div className="card card-body custom-scroll">
                            <button onClick={Limpiar}>Limpiar</button>
                                <form className="d-flex align-items-end" onSubmit={handleComment}>
                                        <div className="d-flex flex-column custom-inputs">
                                            <label htmlFor="comment" className="form-label mb-1">Anonimo</label>
                                            <input  type="text"
                                                    placeholder="Escribe un comentario"
                                                    name="comment"
                                                    // value={newComment}
                                                    onChange={(e) => setNewComment(e.target.value)}
                                                    className="form-control custom-input"
                                                    required
                                            />
                                        </div>

                                    <button type="submit" className="ms-3 custom-enviar">
                                        Enviar
                                    </button>
                                </form>
                                {   commentLocal.map((item, index) => (
                                   item.id === bikeId ? <p key={index}>{item.body} - {item.name}</p> : 'No hay comentarios ingresados'
                                ))
                            } 
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </>

    )
}export default Prueba1