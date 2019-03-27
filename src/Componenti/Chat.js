import React from 'react';
import './Chat.css';
import ChatID1 from './ChatID1';
import ChatInput from './../Componenti/ChatInput'
export default class Chat extends React.Component{
    state ={
        timedate: new Date(),
        Utenteid: null, //will be 1  props
        message:['andrea','come stai?','tutto bene?','ciao'],
    }
    render(){
    const Messaggi =  this.state.message.map(el=>(<ChatID1 message={el} data={Data(this.state.timedate)}/>))
        return(
        <div className="Lista"> 
            <ChatInput />
            {Messaggi}
        </div>
        )
    }
}
function Data(DataOrigine){
    const ore = DataOrigine.getHours()
    const minuti = DataOrigine.getMinutes()
    return ore + ':' + minuti 
}