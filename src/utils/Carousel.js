import React, { Component } from 'react';
import '../Screen/Welcome.css';

const quotes = ['Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability -Patrick Pancioni','"Talent wins games, but teamwork and intelligence win championships" -Michael Jordan','Coming together is a beginning. Keeping together is progress. Working together is success" -Henry Ford']

export default class Carousel extends Component {
    render() {
        return (
            <div className='loginbody'>
                <p>"Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability
                    -Patrick Pancioni
                </p>
                <p>"Talent wins games, but teamwork and intelligence win championships" -Michael Jordan</p>
                <p>"Coming together is a beginning. Keeping together is progress. Working together is success" -Henry Ford</p>
            </div>
        )
    }
}