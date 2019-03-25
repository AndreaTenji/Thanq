import React from 'react';
import Button from './../Atom/Button';
import Quotes from './../Atom/Quotes';
import './Welcome.css'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h2> Thanq</h2>

                <Button titoloBottone='Welcome' />

                <Quotes />
            </div>

        )
    }
}