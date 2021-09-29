import React, { Component } from "react";
import "../CSS/form.css";
import "../CSS/button.css";
export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      usuario: "",
      correo: "",
    };
  }

  agregarUsuario = (e) => {
    e.preventDefault();

    // utilizarla
    this.props.addUsuario(this.state.nombre,this.state.usuario,this.state.correo);

    this.inicializarEstados();
  };

  inicializarEstados = () => {
    this.setState({
      nombre: "",
      usuario: "",
      correo: "",
    });
  };

  asignarEstados = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form id="FormularioReact" onSubmit={this.agregarUsuario}>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="nombre"
            required={true}
            value={this.state.nombre}
            onChange={this.asignarEstados}
          />
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="usuario"
            required={true}
            value={this.state.usuario}
            onChange={this.asignarEstados}
          />
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="correo"
            required={true}
            value={this.state.correo}
            onChange={this.asignarEstados}
          />
          <div>
            <button class="success" type="submit">Agregar</button> 
            <button class="warning" type="reset">Limpiar</button>
          </div>
        </form>
      </div>
    );
  }
}
