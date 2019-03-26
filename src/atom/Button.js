import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const { titoloBottone, funzione } = this.props
        return (
            <div>
                <button onClick={funzione} className="button background-two" type="submit" value="Props"><h3>{titoloBottone}</h3></button>
            </div>
        );
    }
}

