import React from "react";
import "./App.css";
import Form from "./components/forms/Form";
import Users from "./components/users/Users";
import usersList from "./resources/usersList.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // usersList: usersList,
      usersList: [],
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => response.json())
      .then((e) => this.setState({ usersList: e }));

    /*     fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.text())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) */
  }

  addUser = (name, email) => {
    const newUser = {
      id: this.state.usersList.length,
      name: name,
      email: email,
    };
    this.setState({ usersList: [...this.state.usersList, newUser] });

    const url = "https://jsonplaceholder.typicode.com/users/";

/*     console.log("Nuevo Usuario"); */
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        newUser,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  render() {
    return (
      <p>
        <div style={{ textShadow: "2px 2px 5px #6545a0", textAlign: "center" }}>
          <h1> Proyecto React js</h1>
        </div>

        <div>
          <Form addUser={this.addUser} />
        </div>
        <div>
          <Users usersList={this.state.usersList} />
        </div>
      </p>
    );
  }
}

export default App;
