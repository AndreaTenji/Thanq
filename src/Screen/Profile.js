import React from 'react';
import ProfileImage from './../Atom/ProfileImage'
import Separator from './../Atom/Separator'
import DivSetting from './../Componenti/DivSetting'
import { TextSettings, TextSemiBoldGrey } from './../Atom/Texts'
export default class Profile extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            Name: 'Roberto',
            Surname: 'Manchi',
            Job: 'Social Media',
            ImageProfileURL: 'Roberto',
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ padding: '30px', flex: 2 }}>
                        <ProfileImage
                            imageProfileURL={'image-katia123456'}
                            size='90px'
                        />
                    </div>
                    <div style={{ paddingLeft: '30px', flex: 5 }}>
                        <TextSettings Text={this.state.Name + ' ' + this.state.Surname} />
                        <TextSemiBoldGrey Text={this.state.Job} />
                    </div>
                </div>
                <Separator />
                <div style={{ paddingLeft: '30px' }}>
                    <TextSettings Text={'Settings'} />
                    <div style={{ paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>

                        <DivSetting Func={this.props.actionSetting} Text={'Change Password'} />
                        <DivSetting Func={() => alert('Change Profile')} Text={`Change profile's image`} />
                        <DivSetting Func={() => alert('Change Background')} Text={`Change chat's background`} />
                        <DivSetting Func={() => alert('Change Text')} Text={`Change text size`} />

                    </div>

                </div>
                <Separator />

                <div style={{ paddingTop: '10px', paddingLeft: '50px' }}>
                    <DivSetting Func={() => alert('About')} Text={`About`} />
                </div>


                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <TextSettings Text={'Logout'} />
                </div>

            </div>



        )
    }
}