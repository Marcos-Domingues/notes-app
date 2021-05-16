import  React, { Component } from "react"
import "./style.css"

export default class FormularioCadastro extends Component{
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  
  }
  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render(){
    return(
      <form
      onSubmit={this._criarNota.bind(this)}>
      <input type="text" placeholder="Titulo" onChange={this._handleMudancaTitulo.bind(this)} />
      <textarea cols="30" rows="10" placeholder="Texto" onChange={this._handleMudancaTexto.bind(this)}></textarea>
      <button>Criar nota</button>
    </form>
    )
  }

}