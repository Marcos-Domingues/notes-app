import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css"


class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota 
              indice={index}
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo} 
              texto={nota.texto}/>
            </li>
            );
          })}
      </ul>
    );
  }
}
export default ListaDeNotas;
