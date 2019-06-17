import React from 'react';
import { withRouter } from 'react-router-dom';
import api from '../helpers/api';

import { FormComp } from '../styles/';

class LoginPage extends React.Component {
    state ={
        username: '',
        password: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        try {
            const {username, password} = this.state;
            const result = await api.post('/login', {
                username,
                password,
            })
            this.setState({
                username: '',
                password: ''
            })

            // save token in localStorage
            localStorage.setItem('token', result.data.token);
            this.props.history.push('/jokes')
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <FormComp>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button type="submit">Login</button>

                </form>
            </FormComp>
        )
    }
}

export default withRouter(LoginPage);