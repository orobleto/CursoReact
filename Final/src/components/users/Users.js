import React, { Component } from "react";
import User from './User';
class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.usersList.map(
        e => <User user = {e}/>
    );
  }
}

export default Users;
