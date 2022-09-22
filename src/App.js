import React, {Component} from 'react';
import './style.css'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      //faz com que o numero do cronometro seja mutavel
      numero: 0,
      //faz com que o nome do botao do cronometro seja mutavel
      btn: 'start'
    }
    //botao de inico/pausa do timer
    this.start = this.start.bind(this);
    //botao de limpar o timer
    this.clear = this.clear.bind(this);
    //variavel de pausa
    this.timer = null;
  }


  start(){
    let state = this.state;
    //se houver tempo sendo conduzido dentro do timer
    if(this.timer !== null){
      //pausa o timer
      clearInterval(this.timer);
      //retorna o valor para null para que se possa startar de novo
      this.timer = null;
      //altera o valor do botao para Start
      state.btn = 'Start';
    }else{
      //setInterval conduz o intervalo para inserir o novo segundo
    this.timer = setInterval(() => {
      //recebe o state atual do numero
      let state = this.state;
      //altera o state atual do numero somando +1 
      state.numero += 0.1;
      //atualiza o state 
      this.setState(state)
    }, 100);
    //altera o valor do botao para Stop
    state.btn = 'Stop';
    }
    //retorna para o estado do constructor
    this.setState(state)
  }

  clear(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    //retorna o valor do numero para 0
    state.numero = 0;
    //retorna o valor do botao para start
    state.btn = 'Start';
    //retorna o state ao original
    this.setState(state)
  }

  render(){
    return (
      <div className="container">
      <img className='img' src={require('./assets/cronometro.png')}/>
      <a className='timer'>{this.state.numero.toFixed(1)}</a>
      <div className='areaBtn'>
        <a className='botao' onClick={this.start}>{this.state.btn}</a>
        <a className='botao' onClick={this.clear}>Clear</a>
      </div>
      </div>
    );
  }
}