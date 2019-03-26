import React from 'react';
import Button from './../Atom/Button';
import background0 from './images/background0.png'
import background1 from './images/background1.png'
import background2 from './images/background2.png'

import './Welcome.css'

const backgrounds = [background0, background1, background2]
const quotes = [`"Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability"`, '"Talent wins games, but teamwork and intelligence win championships"', '"Coming together is a beginning. Keeping together is progress. Working together is success"']
const nameQuotes = [`- Patrick Pancioni`, '- Michael Jordan', '- Henry Ford']
var i = 0;

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: backgrounds[0],
            quote: quotes[0],
            nameQuotes: nameQuotes[0],
        }
    }

    changeBackground = () => {
        (i === backgrounds.length - 1) ? (i = 0) : (i++)

        this.setState({
            background: backgrounds[i],
            quote: quotes[i],
            nameQuotes: nameQuotes[i]
        });
    }
    componentDidMount() {
        setInterval(this.changeBackground, 8000)
    }

    componentWillUnmount() {
        clearInterval()
    }
    handleClick() {
        alert(this.state.message);
      }
    render() {
        let welcome = { backgroundImage: 'url(' + this.state.background + ')', backgroundSize: 'cover' }

        return (
            <div className="welcome" style={welcome}>
                <h2> ThanQ</h2>
                <Button titoloBottone='Welcome' onClick={()=>this.handleClick()}/>
                <div className='quote'>
                    <h4>{this.state.quote}</h4>
                    <p>{this.state.nameQuotes}</p>
                </div>

            </div>

        )
    }
}