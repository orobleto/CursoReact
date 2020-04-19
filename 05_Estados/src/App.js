import React from 'react';


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
      <div className="contenedor">
        <div className="titulo">
          <h1>
            {this.props.titulo}
          </h1>
        </div>
        <div className="subtitulo">
          <h2>
            {this.props.subtitulo}
          </h2>
        </div>
        <div className="cuerpo">
          <h3>
            {this.state.cuerpo}
          </h3>
        </div>
        <div>
          <button onClick={this.CambiarCuerpo}> Cambiar Cuerpo a {this.state.cuerpoAnterior}</button>
        </div>
      </div>
    );
  };

}

function App() {
  return (
    <div className="ClaseInicio">
      Estados de los componentes desde React js:
      <div>Componente 1</div>
      <ClaseContenedor
        titulo="Titulo Componente 1"
        subtitulo="Sub Titulo Componente 1"
        cuerpo1="Cuerpo1 Componente 1"
        cuerpo2="Cuerpo2 Componente 1"
      />

      <div>Componente 2</div>
      <ClaseContenedor
        titulo="Titulo Componente 2"
        subtitulo="Sub Titulo Componente 2"
        cuerpo1="Cuerpo1 Componente 2"
        cuerpo2="Cuerpo2 Componente 2"
      />
    </div>
  );
}

export default App;
