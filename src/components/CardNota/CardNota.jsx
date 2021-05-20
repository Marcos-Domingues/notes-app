import React, { Component } from 'react';
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/images/delete.svg";

export default class CardNota extends Component {

  apagar(){
    const indice = this.props.indice
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header>
          <div id="div-title">
            <h3>{this.props.titulo}</h3>
            {/* only works with SVGR */}
            <DeleteSVG onClick={this.apagar.bind(this)} />
          </div>
        </header>
        <p>{this.props.texto}</p>
      </section>
    )
  }
}