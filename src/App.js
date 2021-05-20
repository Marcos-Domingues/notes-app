import { Component } from "react";
import "./assets/App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }
  CriarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)

  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({nota:arrayNotas})
  }

  render() {
    return (
      <section>
          <div className="cadastro-notas">
            <FormularioCadastro criarNota={this.CriarNota.bind(this)} />
          </div>
          <div className="quadro-notas">
            <ListaDeNotas 
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}/>
          </div>
      </section>
    );
  }
}

export default App;
