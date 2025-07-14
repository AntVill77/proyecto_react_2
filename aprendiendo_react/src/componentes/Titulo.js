import React from 'react';

const TituloAzul = () => {
    const nombre = 'Ant';
    const color = 'blue';
    return (<h1 className='titulo' style={{color: color}}>Hello World {nombre}</h1>);
}

const TituloRojo = () => {
    const nombre = 'Ant';
    const color = 'red';
    return (<h1 className='titulo' style={{color: color}}>Hello World {nombre}</h1>);
}
 
export {TituloAzul, TituloRojo};