import React from 'react';
import './App.css';


class ClaseContenedor extends React.Component {

  state = {
    show: true,
    cuerpo: this.props.cuerpo1,
    cuerpoAnterior: "2"
  }

  CambiarEstado = () => {
    //cambiamos el estado
    this.setState({ show: !this.state.show })
    console.log(this.state.show);
  }

  CambiarCuerpo = () => {
    this.CambiarEstado()
    //cambiamos el estado
    if (!this.state.show) {
      this.setState({ cuerpo: this.props.cuerpo1 })
      this.setState({ cuerpoAnterior: "2" })
    } else {
      this.setState({ cuerpo: this.props.cuerpo2 })
      this.setState({ cuerpoAnterior: "1" })
    }

  }

  render() {
    return (
      <div className="column">
        <div>
          <h1>
            {this.props.titulo}
          </h1>
        </div>
        <div>
          <h2>
            {this.props.subtitulo}
          </h2>
        </div>
        <div>
          <h3>
            {this.state.cuerpo}
          </h3>
        </div>
        <div>
          <button onClick={this.CambiarCuerpo} className="button">  Cambiar Cuerpo a {this.state.cuerpoAnterior}</button>
        </div>
      </div>
    );
  };

}

function App() {
  return (

    <div >
      <div className="header">
        <h1>CSS desde React js</h1>
      </div>
      <ClaseContenedor
        titulo="Titulo Componente 1"
        subtitulo="Sub Titulo Componente 1"
        cuerpo1="Cuerpo1 Componente 1"
        cuerpo2="Cuerpo2 Componente 1"
      />
      <ClaseContenedor
        titulo="Titulo Componente 2"
        subtitulo="Sub Titulo Componente 2"
        cuerpo1="Cuerpo1 Componente 2"
        cuerpo2="Cuerpo2 Componente 2"
      />
      <ClaseContenedor
        titulo="Titulo Componente 3"
        subtitulo="Sub Titulo Componente 3"
        cuerpo1="Cuerpo1 Componente 3"
        cuerpo2="Cuerpo2 Componente 3"
      />
    </div>
  );
}

export default App;
