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
            <h1>{this.props.Nome}</h1>
            <h3>{this.props.Message}</h3>
            </div>
        )
    }
   }
  
