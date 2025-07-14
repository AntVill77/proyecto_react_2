import React from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';



const sesion = true;


const App = () => {
  return (
  <>
  {sesion === true ? 
  <>
<Usuario/>
<Usuario/>
<Usuario/>
    </>
  :
   <p>No has iniciado sesion</p>}

    </>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 <App/>
)



