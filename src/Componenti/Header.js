import React from 'react';
import './Header.css';
export default class Header extends React.Component{
    render(){
        return(
            <div className="background-one header">
                <h2>ThanQ</h2>
                <img src={require('./../img/icon_search.svg')} />
            </div>
        )
    }
}

