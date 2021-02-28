import React from "react";
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div>
            <div className={s.upImg}>
                <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' alt=""/>
            </div>
            <div className={s.avatar}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo