import React from 'react';
import SingleChat from './../Componenti/SingleChat'


export default class Favorite extends React.Component {
    render() {
        return (
            <div>
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
                <SingleChat favoriteBool={true} />
            </div>

        )
    }
}