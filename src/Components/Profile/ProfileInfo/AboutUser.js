import React from "react";
import './AboutUser.css'

const AboutUser = (props) => {
    let p = props.profile
    return (
        <div className='aboutUser'>
            <div className='usPhoto'>
                <div>
                    <img
                        src={p.photos.large} alt='Ava'/>
                </div>


            </div>
            <div className='usName'>
                <span>{p.fullName}</span>
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