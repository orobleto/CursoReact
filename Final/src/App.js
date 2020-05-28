import React from "react";
import "./App.css";
import Form from "./components/forms/Form";
import Users from "./components/users/Users";
import usersList from "./resources/usersList.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: usersList,
    };
  }

  addUser = (name,email) => {
    const newUser = {
      id : this.state.usersList.length ,
      name: name,
      email: email
    };
    this.setState({usersList: [...this.state.usersList, newUser]})
    console.log('Nuevo Usuario')


  }

  render() {
    return (
      <p>
        <div style={{ textShadow: "2px 2px 5px red", textAlign: "center" }}>
          <h1> Proyecto React js</h1>
        </div>

        <div>
          <Form addUser = {this.addUser}/>
        </div>
        <div>
          <Users usersList = {this.state.usersList}/>
        </div>
      </p>
    );
  }
}

export default App;
