import React from 'react';
import './Chat.css';
import ChatID1 from './ChatID1';
import ChatInput from './../Componenti/ChatInput'
export default class Chat extends React.Component{
    state ={
        timedate: new Date(),
        Utenteid: null, //will be 1  props
        message:['andrea','come stai?','tutto bene?'],

    }
    render(){
       /* for(var i = 0;i>this.state.message.length;i++){
            <ChatID1 message={this.state.message[i]} data={'11:00'}/>
        }*/
        return(
        <div className="Lista"> 
            <ChatInput />
            <ChatID1 message={'pippo'} data={'11:00'}/>
            <ChatID1 message={'Hola'} data={'11:10'} />
            <ChatID1 message={'Come'} data={'11:15'}/>
            <ChatID1 message={'Stai?'} data={'11:17'}/>
            <ChatID1 message={'Tutto bene?'} data={'11:20'}/>
        
        </div>
       
        )
    
    }
}