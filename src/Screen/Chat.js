import React from 'react';
import ChatHeader from './../Componenti/ChatHeader'
import SingleMessage from './../Atom/SingleMessage'
import ChatInput from './../Componenti/ChatInput'
import { Redirect } from 'react-router-dom'



export default class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            favorite: null,
            refresh: null,
        }
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
                            actionDelateChat={() => {
                                console.log(id.messages)
                                id.messages = null;
                                console.log(id.messages)
                                this.setState({ refresh: !this.state.refresh })
                            }}
                            actionFavorite={() => {
                                id.favorite = !id.favorite;
                                this.setState({ favorite: id.favorite })
                            }}
                            imageProfileURL={id.profileImageURL}
                        />
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