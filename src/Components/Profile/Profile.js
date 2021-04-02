import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (

            <div>
                <div className={s.image}>
                    <img src="https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg" />
                </div>
                <div>ava + desc</div>
                <MyPost/>
            </div>
    );

}


export default Profile;
