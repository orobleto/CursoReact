import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const {user} = this.props
    return (
        <div key={user.id} style = {{borderStyle:'groove'}}>
        <div>
          {user.name}
        </div>
        <div>
          {user.email}
        </div>
      </div>
    );
  }
}

export default User;
