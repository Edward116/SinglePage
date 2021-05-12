import React from 'react';
import s from './ProfileInfo.module.css'
import Loader from "../../../AnotherThings/Loader/Loader";
import AboutUser from "./AboutUser";


const ProfileInfo = (props) => {
 if(!props.profile){
     return <Loader/>
 }
    return (
            <div>
                <div className={s.image}>
                    <img src="https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg" alt='...' />
                </div>
                <div>
                    <AboutUser {...props}/>
                </div>
            </div>
    );

}


export default ProfileInfo;
