import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
            <div>
                <div className={s.image}>
                    <img src="https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg" />
                </div>
                <div>ava + desc</div>
            </div>
    );

}


export default ProfileInfo;
