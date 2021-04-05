import React from "react";
import s from './users.module.css'

const Users = (props) => {

    if(props.users.length === 0){
    props.setUsers(
        [{
            id: 1,
            photoURL: 'https://lh3.googleusercontent.com/proxy/XJdlikHYqej5hpSr4JOKCbOMyWm6qLff6EF49I6NnF3w19ahgmaAec2NMtm4DlEQuGLrDVt3bZyzs7OaWa7QfcLuSf-5HjxQNdNAoiLOBkBPUgJygbTRuLQ',
            followed: true,
            fullName: 'Eduard',
            status: 'I am learn React',
            location: {city: 'Vinnitsa', country: 'Ukraine'}
        },
            {
                id: 2,
                photoURL: 'https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg',
                followed: false,
                fullName: 'Artem',
                status: 'I am a driver',
                location: {city: 'Kalnyk', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9aFq3WkVXLNr1biEb3eVxvlhrSRcVbSZ2PLfBX20Ryy8mgH1rYKF_Db74FMtfhUR9Ws&usqp=CAU',
                followed: true,
                fullName: 'Sergiy',
                status: 'I am a taxi driver',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4, photoURL: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg',
                followed: false, fullName: 'Sasha', status: 'I am waiter',
                location: {city: 'Illintsy', country: 'Ukraine'}
            }]
    )}


    return (
        <div>
            {
                props.users.map(u => <div>
                    <span>
                        <div>
                            <img src={u.photoURL} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.usUnfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.usFollow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;