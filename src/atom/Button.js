import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        return (
            <div>
                <button className="button background-two" type="submit" value="Login">LOGIN</button>
            </div>
        );
    }

}

