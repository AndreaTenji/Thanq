import React from 'react';
import ChatHeader from './../Componenti/ChatHeader'
import SingleMessage from './../Atom/SingleMessage'
import ChatInput from './../Componenti/ChatInput'
import { Redirect } from 'react-router-dom'
import Modal from './../Componenti/Modal'


export default class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            favorite: null,
            refresh: null,
            isOpen: false,
        }
    }

    toggleModal = () => {
      this.setState({isOpen: !this.state.isOpen})
    }
    // componentDidMount() {
    //     let numId = null
    //     const { data } = this.props

    //     for (let i = 0; i < data.contactsChat.length; i++) {
    //         if (data.contactsChat[i].id == this.props.match.params.id) {
    //             numId = i
    //             break
    //         }
    //     }

    //     this.setState({
    //         favorite: this.props.data.contactsChat[numId].favourite
    //     })
    // }

    render() {
        let numId = null

        for (let i = 0; i < this.props.data.contactsChat.length; i++) {
            if (this.props.data.contactsChat[i].id == this.props.match.params.id) {
                numId = i
                break
            }
        }
        if (numId == null) {
            return <Redirect to='/error/' />
        }

        const id = this.props.data.contactsChat[numId]


        return (
            <div>
                <div style={{ height: ' 100vh', backgroundColor: 'white' }}>
                    <div style={{ position: 'fixed', width: '100vw' }}>
                        <ChatHeader
                            // name={prova}
                            name={id.name}
                            surname={id.surname}
                            jobRole={id.job}
                            favorite={id.favorite}
                            //actionDelateChat={ () => {
                            //    console.log(id.messages)
                            //    id.messages = null;
                            //    console.log(id.messages)
                            //    this.setState({ refresh: !this.state.refresh })
                            //}}
                            actionDelateChat={ 
                              this.toggleModal
                            }
                          
                            actionFavorite={() => {
                                id.favorite = !id.favorite;
                                this.setState({ favorite: id.favorite })
                                
                            }}
                            imageProfileURL={id.profileImageURL}
                        />

                        <Modal show={this.state.isOpen}
                          onClose={this.toggleModal}>
                          Sìììì cancellamo tuttooooooo!!!
                        <button onClick={() => {
                          id.messages = null;
                          this.setState({refresh: !this.state.refresh});
                          console.log("DAJE AMO CANCELLATO TUTTO");
                          this.toggleModal()
                          }}>DAJE</button>
                        </Modal>
                    </div>

                    <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '80px', paddingBottom: '100px' }}>

                        {(id.messages) ? id.messages.map((el, i) =>
                            <SingleMessage
                                key={i}
                                orario={el.time}
                                messaggio={el.text}
                                type={el.sender !== id.id} />
                        ) : null
                        }
                    </div>
                </div>
                <div style={{ position: 'fixed', top: '90vh' }}>
                    <ChatInput
                        renderState={() => this.setState({ refresh: !this.state.refresh })}
                        idPersonal={this.props.data.currentUser}
                        data={id} />
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