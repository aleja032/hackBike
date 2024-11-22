import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/modalComments.css';
import heart from '../assets/icons/heart.svg';
import heartFill from '../assets/icons/heartFill.svg';
import reply from '../assets/icons/reply.svg';
import { setComment } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { clearLocalStorage } from '../localStorage/localStorage';
import comment from '../assets/icons/comment.svg';

function Cards({ station }) {
  const [bool, setBool] = useState(true);
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const commentLocal = useSelector((state) => state.bikes.commentsLocalStorage);

  const handleComment = (e) => {
      e.preventDefault();
      console.log("valor:", newComment);

      dispatch(setComment({
          id: station.id,
          name: 'Anónimo',
          body: newComment,
      }));
      setNewComment('');
  };

  const Limpiar = () => {
      clearLocalStorage();
  }

  return (
  <div className="">
    <Card className='card__info mb-3'>
      <Card.Body className='text-start'>
        <Card.Title className='text-center mb-2'>{station.name}</Card.Title>
        <strong>Direccion: <span className='modal__data'>{station.extra.address}</span></strong>

        <Card.Text>
        <strong>Descripción: <span className='modal__data'> {station.extra.description}</span></strong>
        </Card.Text>
         <div className="d-flex align-items-center">
            <strong className='me-2'>Cant: <span className='modal__data'> {station.free_bikes}</span></strong>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z" />
            </svg>
          </div>

        <div className=" d-flex flex-column modal__comments ">
                <div className="row gx-0 mt-2">
                    <button className="col-4 text-center p-2 d-flex justify-content-center align-items-center border-none btn btn__interaction"
                     onClick={(e) => (bool ? setBool(false) : setBool(true))}
                    >
                        <img src={bool ? heart : heartFill} alt="Heart" className="me-1 icon" />
                        Likes
                    </button>
                    <button
                        className="col-4 text-center p-2 d-flex justify-content-center align-items-center border-none btn btn__interaction"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${station.id}`}
                        aria-expanded="false"
                        aria-controls={station.id}>
                        <img src={comment} alt="Comentarios" className='me-2' />
                        Commentarios
                    </button>
                    <div className="col-4 text-center p-2 d-flex justify-content-center align-items-center border-none">
                       <img src={reply} alt="replicar" className='me-2'/>
                        Shares
                    </div>
                </div>
        </div>
      </Card.Body>
        <div className="row gx-0">
          <div className="col-12">
              <div className="collapse" id={station.id}>
                  <div className="card card-body custom-scroll">
                      {/* <button onClick={Limpiar}>Limpiar</button> */}
                      <form className="d-flex align-items-end justify-content-center" onSubmit={handleComment}>
                          <div className="d-flex flex-column custom-inputs">
                              <label htmlFor="comment" className="form-label mb-1">Anonimo</label>
                              <input type="text"
                                  placeholder="Escribe un comentario"
                                  name="comment"
                                  value={newComment}
                                  onChange={(e) => setNewComment(e.target.value)}
                                  className="form-control custom-input"
                                  required
                              />
                          </div>

                          <button type="submit" className="ms-3 custom-enviar">
                              Enviar
                          </button>
                      </form>
                      {commentLocal.map((item, index) => (
                          item.id === station.id ? <p key={index} className='border-top mt-2'><strong>{item.name}</strong> -- {item.body} </p> : null
                      ))
                      }
                  </div>
              </div>
          </div>
        </div>
      </Card>

    
  </div>
  );
}

export default Cards;