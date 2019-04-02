import React from 'react';

import './Form.css'
export default class Form extends React.Component {

    render() {
        const { typeInput, placeholder, cambia, name } = this.props

        return (
            <input name={name} onChange={cambia} type={typeInput} placeholder={placeholder}></input>
        )
    }
}

/*
APPjs
 authLogin={() => this.setState({ login: true, })}
            login={this.state.login}

Routerjs
import Login from './Screen/Login'

<Route path="/login/" render={this.props.login ? () => <Redirect to='/messages/' /> : () => <Login authLogin={this.props.authLogin} />} />


Loginjs
this.authLogin = this.authLogin.bind(this)

 this.props.authLogin();
            */
