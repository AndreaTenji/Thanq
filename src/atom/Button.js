import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const { titoloBottone } = this.props
        return (
            <div>
                <button className="button background-two" type="submit" value="Props">{titoloBottone}</button>
            </div>
        );
    }
}

