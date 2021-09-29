import React, { Component } from "react";
import Formulario from "./Componentes/Formulario";
import Usuario from "./Componentes/Usuario";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./CSS/menu.css";
//https://reactrouter.com/web/guides/quick-start
//npm install react-router-dom
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }
  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((usuariosJson) => this.setState({ usuarios: usuariosJson }));
  }

  addUsuario = (nombre, usuario, correo) => {
    const USUARIO = {
      id: this.state.usuarios.length + 1,
      name: nombre,
      username: usuario,
      email: correo,
    };
    this.agregarJSONPLACEHOLDER(USUARIO);
    this.setState({ usuarios: [...this.state.usuarios, USUARIO] });
  };

  agregarJSONPLACEHOLDER = (usuario) => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const HEADER = {
      method: "POST",
      body: JSON.stringify({ usuario }),
      headers: { "content-type": "application/json" },
    };
    fetch(URL, HEADER)
      .then((response) => response.json())
      .then((usuario) => console.log(usuario))
      .catch((e) => console.log(e));
  };
  render() {
    return (
      <Router>
        <nav className="menu">
          <NavLink to="/" className="enlace" activeClassName="activo" exact>
            Inicio
          </NavLink>

          <NavLink to="/agregar" className="enlace" activeClassName="activo">
            Formulario
          </NavLink>

          <NavLink to="/usuarios" className="enlace" activeClassName="activo">
            Usuarios
          </NavLink>
        </nav>
        <Switch>
          <Route path="/agregar">
            <Formulario addUsuario={this.addUsuario} />
          </Route>
          <Route path="/usuarios">
            {this.state.usuarios.map((e) => (
              <Usuario
                key={e.id}
                nombre={e.name}
                usuario={e.username}
                correo={e.email}
              />
            ))}
          </Route>
          <Route path="/">
            <Formulario addUsuario={this.addUsuario} />
            {this.state.usuarios.map((e) => (
              <Usuario
                key={e.id}
                nombre={e.name}
                usuario={e.username}
                correo={e.email}
              />
            ))}
          </Route>
        </Switch>
      </Router>
    );
  }
}
