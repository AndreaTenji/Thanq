import React from 'react';
import { TextRegularGrey } from './../Atom/Texts'
import IconNext from './../Componenti/images/icon_next.svg'
import { TextSettings, TextSemiBoldGrey } from './../Atom/Texts'



export default class ChangePassword extends React.Component {

    render() {
        const { Text, } = this.props

        return (

            <div>
                <div onClick={this.props.actionBack} >
                    <img
                        src={IconNext}
                        alt="Icon next"
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextRegularGrey Text={Text} />

                    <TextSettings Text={'Logout'} />
                </div>

            </div>

        )
    }
}