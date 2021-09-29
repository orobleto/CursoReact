import React, { Component } from "react";
import "../CSS/tarjeta.css";
import "../CSS/boton.css";


export default class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      usuario: this.props.usuario,
      correo: this.props.correo,
      elemento: this.props.usuario,
      mostrarUsuario: false,
    };
  }
  CambiarElemento = () => {
    this.setState({
      elemento: this.state.mostrarUsuario
        ? this.props.usuario
        : this.props.correo,
      mostrarUsuario: !this.state.mostrarUsuario,
    });
  };

  render() {
    return (
      <div class="card">
        <div class="card-side front">
          <div>{this.state.nombre}</div>
        </div>
        <div class="card-side back">
          <div>{this.state.elemento}</div>
          <br />
          <button class="button-swing" onClick={this.CambiarElemento}>
            Mostrar {this.state.mostrarUsuario ? "Usuario" : "Correo"}
          </button>
        </div>
      </div>
    );
  }
}
