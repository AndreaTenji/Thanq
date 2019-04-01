import React from 'react';
import ChatHeader from './../Componenti/ChatHeader'
import SingleMessage from './../Atom/SingleMessage'
import ChatInput from './../Componenti/ChatInput'

export default class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.toggleFavorite = this.toggleFavorite.bind(this)
        this.state = {
            id: 123,
            name: 'Loredana',
            surname: 'Bee',
            jobRole: 'Media Social',
            imageProfile: 'image-katia123456',
            favorite: false,
            messages: { orario: '12:02', messaggio: 'Proviamo', type: true },
        }
    }

    toggleFavorite() {
        this.setState({
            favorite: !this.state.favorite
        })
    }


    render() {

        return (
            <div>
                <div style={{ height: ' 100vh', backgroundColor: 'white' }}>
                    <div style={{ position: 'fixed', width: '100vw' }}>
                        <ChatHeader
                            actionBack={this.props.actionBack}
                            name={this.state.name}
                            surname={this.state.surname}
                            jobRole={this.state.jobRole}
                            favorite={this.state.favorite}
                            actionFavorite={() => this.toggleFavorite()}
                            imageProfileURL={this.state.imageProfile}
                        />
                    </div>
                    <div style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '80px' }}>
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo, fnoasfnsfafs fsfasfsaffsafaso'} type={false} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                        <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
                    </div>
                </div>
                <div style={{ position: 'fixed', top: '85vh' }}>
                    <ChatInput />
                </div>
            </div >

        )
    }
}


//funzione per la data e orario modo 1
/* const padStart = _.padStart;

class SidebarContent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  getHours() {
    return padStart(this.state.date.getHours(), 2, '0');
  }
  getMinutes() {
    return padStart(this.state.date.getMinutes(), 2, '0');
  }

  getSeconds() {
    return padStart(this.state.date.getSeconds(), 2, '0');
  }


  componentDidMount() {

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {

    return ( <
      ul className = "nav"
      ref = {
        (c) => {
          this.nav = c;
        }
      } >
      <
      li className = "today" >
      <
      div className = "clock"
      center = "xs" >
      <
      div center = "xs" >
      <
      span className = "hours" > {
        this.getHours()
      } < /span> <
      span >: < /span> <
      span className = "min" > {
        this.getMinutes()
      } < /span> <
      span >: < /span> <
      span className = "sec" > {
        this.getSeconds()
      } < /span> <
      /div> <
      /div> <
      div className = "date"
      center = "xs" >
      <
      p className = "today-is" > {
        this.state.date.toDateString()
      } < /p> <
      /div> <
      /li> <
      /ul>
    );
  }
}


ReactDOM.render( < SidebarContent / > , document.getElementById("app"));
}

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>

<div id="app" />


*/



//funzione per la data e orario modo 2
/* export default class Chat extends React.Component {

    state = {
        date=""
    };

    componentDidMount(){
        this.getDate();
    }

    getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
    };

    render () {
        const{date} = this.state;
        return<div>{date}</div>;
    }

}*/