import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <div className={s.upImg}>
                <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                my posts
                <div>
                    newpost
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile