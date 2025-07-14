import React from 'react';
import {TituloAzul, TituloRojo} from './Titulo';

const Usuario = () => {

const pais = null;
const amigos = ['Alex', 'Manuel', 'César'];

  return(
     <div>
        <TituloAzul/>
        <TituloRojo/>
    <p>Que tenga un buen día</p>
    {pais && <p>Tú eres de: {pais}</p>}
    <ul>
      {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
    </ul>
    </div>
  );
};

export default Usuario;