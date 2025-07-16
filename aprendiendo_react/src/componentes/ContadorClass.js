import React, {Component} from 'react';

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {contador: 0}
    }

    incrementar(cantidad){
        console.log('+1');
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador + cantidad
            }
            //console.log(estadoAnterior);
        });
    }

    disminuir(cantidad){
        this.setState((estadoAnterior)=>{
            return{
                contador: estadoAnterior.contador - cantidad
            }
        });
        console.log('-1');
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Decrementar</button>
            </div>
        )
    }
}

export default Contador;

