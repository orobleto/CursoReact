import React from 'react';


function FuncionContenedor(props) {
  return (
    <div className="contenedor">
      <div className="titulo">
        <h1>
          {props.titulo}
        </h1>
      </div>
      <div className="subtitulo">
        <h2>
          {props.subtitulo}
        </h2>
      </div>
      <div className="cuerpo">
        <h3>
          {props.cuerpo}
        </h3>
      </div>
    </div>
  );
}


class ClaseContenedor extends React.Component {

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
            {this.props.cuerpo}
          </h3>
        </div>
      </div>
    );
  };

}

function App() {
  return (
    <div className="ClaseInicio">
      Propiedades desde React js:
      <div>Desde una Funcion:</div>
      <FuncionContenedor
        titulo="Titulo F"
        subtitulo="Sub Titulo F"
        cuerpo="Cuerpo F"
      />
      <div>Desde una Clase:</div>
      <ClaseContenedor
        titulo="Titulo C"
        subtitulo="Sub Titulo C"
        cuerpo="Cuerpo C"
      />
    </div>
  );
}

export default App;
