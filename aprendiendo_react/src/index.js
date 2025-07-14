import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const nombre = 'Ant';
const color = 'blue';
const sesion = true;
const pais = 'Mexico'
const amigos = ['Alex', 'Manuel', 'César'];

const JSX = (
  <>
  {sesion === true ? 
  <div>
<h1 className='titulo' style={{color: color}}>Hello World {nombre}</h1>
    <p>Que tenga un buen día</p>
    {pais && <p>Tú eres de: {pais}</p>}
    <ul>
      <li>{amigos[0]}</li>
      <li>{amigos[1]}</li>
      <li>{amigos[2]}</li>

      {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
    </ul>
    </div>
  :
   <p>No has iniciado sesion</p>}

    </>
);

/*const verificarSesion = (sesion) => {
    if(sesion === true){
      return JSX;
    }else{
      return <h1>No has iniciado sesión</h1>
    }
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
 // verificarSesion(sesion)
 // JSX
//);

root.render(
  JSX
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
