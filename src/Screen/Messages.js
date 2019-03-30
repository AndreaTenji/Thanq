import React from 'react';
import { Link } from 'react-router-dom'
import SingleChat from './../Componenti/SingleChat'

export default class Messages extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (


            <div>

                {this.props.messages.map((el, i) =>
                    <Link to={`/chat/${el.Surname}`}>
                        <SingleChat
                            key={i}
                            Name={el.Name}
                            Surname={el.Surname}
                            Job={el.Job}
                            LastMessage={el.LastMessage}
                            favoriteBool={false}
                        />
                    </Link>)
                }
            </div>




        )
    }
}