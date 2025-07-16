import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorClass from './componentes/ContadorClass';


const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
  <>
  {sesion === true ? 
  <div>
<Usuario/>
<ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2}/>
<button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
    </div>
  :
  <div>
   <p>No has iniciado sesion</p>
   <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
  {
  /*
   <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</button>
   */
  }
    </div>
}
</>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 <App/>
)



