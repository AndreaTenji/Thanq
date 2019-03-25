   import React from 'react';

   export default class Messaggio extends React.Component{
    constructor(props)
    {
        super(props)
        {

        }
    }
    render()
    {
        return(
            <div className="SingleChat">
            <h1>{this.props.UtenteNick}</h1>
            <h3>{this.props.UtenteMessage}</h3>
            </div>
        )
    }
   }
  
