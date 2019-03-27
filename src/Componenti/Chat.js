import React from 'react';
import './Chat.css';
import ChatID1 from './ChatID1';

export default class Chat extends React.Component{
    state ={
        Verifica:false,
        message: 'Hola',
        timedate: new Date(),
        Utenteid: null, //will be 1  props
    }
    render(){
        return(
        <div className="Lista"> 
            <ChatID1 />
        </div>
        )
    
    }
}