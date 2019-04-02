import React from 'react';
import ProfileImage from './../Atom/ProfileImage'
import Separator from './../Atom/Separator'
import DivSetting from './../Componenti/DivSetting'
import { TextSettings, TextSemiBoldGrey } from './../Atom/Texts'
import { IconJob } from './../Atom/Icons'
export default class Profile extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            Name: 'Roberto',
            Surname: 'Greco',
            Job: 'Social Media',
            ImageProfileURL: 'Roberto',
        }
    }


    render() {
        const { profile } = this.props
        console.log(profile)
        return (
            <div style={{ backgroundColor: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ padding: '30px', flex: 2 }}>
                        <ProfileImage
                            imageProfileURL={profile.profileImageURL}
                            size='90px'
                        />
                    </div>
                    <div style={{ paddingLeft: '30px', flex: 6 }}>
                        <TextSettings Text={profile.name + ' ' + profile.surname} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IconJob size='40px' />
                            <TextSemiBoldGrey Text={profile.job} />
                        </div>

                    </div>
                </div>
                <Separator />
                <div style={{ paddingLeft: '30px' }}>
                    <TextSettings Text={'Settings'} />
                    <div style={{ paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>

                        <DivSetting func={'changepassword'} text={'Change Password'} />
                        <DivSetting func={'changeprofileimg'} text={`Change profile's image`} />
                        <DivSetting func={'changebackground'} text={`Change chat's background`} />
                        <DivSetting func={'changetextsize'} text={`Change text size`} />

                    </div>

                </div>
                <Separator />

                <div style={{ paddingTop: '10px', paddingLeft: '50px' }}>
                    <DivSetting Func={'about'} Text={`About`} />
                </div>


                <div
                    onClick={() => this.props.actionLogout()}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <TextSettings Text={'Logout'} />
                </div>

            </div>



        )
    }
}