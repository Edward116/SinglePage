import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {Redirect} from 'react-router-dom'
const Profile = (props) => {


    return (

            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostContainer/>
            </div>
    );

}


export default Profile;
