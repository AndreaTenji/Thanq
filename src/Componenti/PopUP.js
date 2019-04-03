import React from 'react'
import PropTypes from 'prop-types';

export default class PopUp extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
          }
        
        const style = {
            backgroundColor: 'white',
            width: '60%',
            padding: '40px',
            color: 'grey',
            borderRadius: '2px'
        }

        return (
          
            <div style={style}>
                <h2> {this.props.title} </h2>

                {this.props.children}
            <button onClick={this.props.onClose}>
            Close
            </button>
            </div>

        )
    }
}

PopUp.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };