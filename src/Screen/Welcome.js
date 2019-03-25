import React from 'react';
import Button from './../Atom/Button';
import background0 from './images/background0.jpg'
import background1 from './images/background1.jpg'
import background2 from './images/background2.jpg'

import './Welcome.css'

const backgrounds = [background0, background1, background2]
const quotes = ['Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability -Patrick Pancioni','"Talent wins games, but teamwork and intelligence win championships" -Michael Jordan','Coming together is a beginning. Keeping together is progress. Working together is success" -Henry Ford']
var i = 0;

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: backgrounds[0],
            quote: quotes[0],
        }
    }

    changeBackground = () => {
        if (i === backgrounds.length-1) {
            i = 0
        }
        else {
            i++;
        }
        this.setState({ background: backgrounds[i], quote: quotes[i]});
      }
    componentDidMount() {
        setInterval(this.changeBackground,3000)
    }

    componentWillUnmount() {
        clearInterval()
    }
    render() {
        let welcome = {
            backgroundImage: 'url('+ this.state.background +')',
        }

        return (
            <div className="welcome" style={welcome}>
                <h2> ThanQ</h2>
                <p>{this.state.quote}</p>
                <Button titoloBottone='Welcome' />
            </div>

        )
    }
}