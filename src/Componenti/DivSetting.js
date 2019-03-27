import React from 'react';
import './ChatInput.css'
import { TextRegularGrey } from './../Atom/Texts'
import IconNext from './../Componenti/images/icon_next.svg'


export default class DivSetting extends React.Component {

    render() {
        const { Text, Func } = this.props

        return (
            <div onClick={Func} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextRegularGrey Text={Text} />
                <img
                    src={IconNext}
                    alt="profile" />

            </div>
        )
    }
}