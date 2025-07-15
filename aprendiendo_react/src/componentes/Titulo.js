import React from 'react';

const Titulo = ({usuario = 'usuario', color = 'yellow'}) => {

    return (<h1 className='titulo' style={{color: color}}>Hello World {usuario}</h1>);
}
 
export {Titulo};