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
        const { data } = this.props

        for (let i = 0; i < data.contactsChat.length; i++) {
            if (data.contactsChat[i].id == this.props.match.params.id) {
                numId = i
                break
            }
        }

        const id = data.contactsChat[numId]

        if (numId == null) {
            return <Redirect to='/error/' />
        }

        return (
            <div>
                <div style={{ height: ' 100vh', backgroundColor: 'white' }}>
                    <div style={{ position: 'fixed', width: '100vw' }}>
                        <ChatHeader
                            // name={prova}
                            name={id.name}
                            surname={id.surname}
                            jobRole={id.job}
                            favorite={this.state.favorite}
                            actionFavorite={() => {
                                id.favorite = !id.favorite;
                                this.setState({ favorite: id.favorite })
                            }}
                            imageProfileURL={id.profileImageURL}
                        />
                    </div>
                    <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '80px', paddingBottom: '100px' }}>

                        {id.messages.map((el, i) =>
                            <SingleMessage
                                key={i}
                                orario={el.time}
                                messaggio={el.text}
                                type={el.sender == id.id} />
                        )
                        }
                    </div>
                </div>
                <div style={{ position: 'fixed', top: '90vh' }}>
                    <ChatInput />
                </div>
            </div >
        )
    }
}

// export default class Chat extends React.Component {

//   

//     toggleFavorite() {
//         this.setState({
//             favorite: !this.state.favorite
//         })
//     }


//     render() {

//         return (
//             <div>
//                 <div style={{ height: ' 100vh', backgroundColor: 'white' }}>
//                     <div style={{ position: 'fixed', width: '100vw' }}>
//                         <ChatHeader
//                             name={this.props.match.params.id}
//                             surname={this.state.surname}
//                             jobRole={this.state.jobRole}
//                             favorite={this.state.favorite}
//                             actionFavorite={() => alert('prova')}
//                             imageProfileURL={this.state.imageProfile}
//                         />
//                     </div>
//                     <div style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '80px' }}>
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo, fnoasfnsfafs fsfasfsaffsafaso'} type={false} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                         <SingleMessage orario='12:02' messaggio={'Proviamo di nuovo'} type={true} />
//                     </div>
//                 </div>
//                 <div style={{ position: 'fixed', top: '85vh' }}>
//                     <ChatInput />
//                 </div>
//             </div >

//         )
//     }
// }