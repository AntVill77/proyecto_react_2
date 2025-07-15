import React from 'react';
import {Titulo} from './Titulo';

const Usuario = () => {

const pais = null;
const amigos = ['Alex', 'Manuel', 'César'];

  return(
     <div>
        <Titulo usuario = "Ant"/>
        <Titulo usuario = "Manuel" color = "blue"/>
    <p>Que tenga un buen día</p>
    {pais && <p>Tú eres de: {pais}</p>}
    <ul>
      {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
    </ul>
    </div>
  );
};

export default Usuario;