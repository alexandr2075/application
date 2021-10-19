import React from 'react';
import Preloader from './Common/Preloader';
import classes from './Profile.module.css';
import ProfileStatus from './ProfileStatus';



const Profile = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className = {classes.photos}>
            <img src= {props.profile.photos.small} alt="" />
            <ProfileStatus status = {props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default Profile;