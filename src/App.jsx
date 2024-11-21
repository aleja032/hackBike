import { useState } from 'react'
import './assets/styles/App.css';
import Prueba1 from './components/Prueba1'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  let id = '004cd3021ac57f1c632ceb235d1c81c3';
  return (
    <>
      <Prueba1 bikeId={id}/>
    </>
  )
}

export default App
