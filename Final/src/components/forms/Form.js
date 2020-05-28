import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }

    enviar = (e) => {
        e.preventDefault();
       
        this.props.addUser(this.state.name, this.state.email)
        console.log(this.state);
    }

    asignar = (e) => {
        e.preventDefault();

        this.setState({

            [e.target.name]: e.target.value
        });

    }

    render() {
        return (
            <div>

                <form onSubmit={this.enviar}>
                    <div>
                        <input
                            onChange={this.asignar}
                            value={this.state.name}
                            name="name"
                            id="name"
                            type="text"
                            placeholder="user"
                            required={true}></input>
                    </div>
                    <div>
                        <input
                            onChange={this.asignar}
                            value={this.state.email}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="email"
                            required={true}></input>
                    </div>
                    <input
                        type="submit"
                        value="Enviar"></input>
                </form>
            </div>
        );
    }
}



export default Form;