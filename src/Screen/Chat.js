import React from 'react';
import ChatHeader from './../Componenti/ChatHeader'
import SingleMessage from './../Atom/SingleMessage'
import ChatInput from './../Componenti/ChatInput'

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        return (
            <div>
                <div style={{ height: ' 100vh', backgroundColor: 'white' }}>
                    <div style={{ position: 'fixed', width: '100vw' }}>
                        <ChatHeader
                            name={this.props.match.params.id}
                            surname={this.state.surname}
                            jobRole={this.state.jobRole}
                            favorite={this.state.favorite}
                            actionFavorite={() => alert('prova')}
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