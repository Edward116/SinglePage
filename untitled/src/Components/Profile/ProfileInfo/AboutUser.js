import React from "react";
import './AboutUser.css'
import image from '../../../AnotherThings/Images/img.png'
import Status from "./Status";

const AboutUser = (props) => {
    let p = props.profile
    return (
        <div className='aboutUser'>
            <div className='usPhoto'>
                <div>
                    <img
                        src={p.photos.large || image} alt='Ava'/>
                </div>


            </div>
            <div className='usName'>
                <div>
                    <span className='name'>{p.fullName}</span>
                </div>
                <Status status={props.status}
                updateStatus={props.updateStatus}/>
                <div className='usInfo'>
                    <p>aboutMe: {p.aboutMe}</p>
                    <p>contact: {p.contacts.instagram}</p>
                    <p>Looking for a job?: {p.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}


export default AboutUser;