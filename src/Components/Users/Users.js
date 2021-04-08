import React from "react";
import s from './users.module.css'
import image from '../../AnotherThings/Images/img.png'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div >
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {props.onPageChanged(p)} }> {p} </span>
                })}
            </div>
            {
                props.users.map(u => <div className={s.userItem}>
                    <span className={s.userButton}>
                        <div>
                            <img src={u.photos.small || image} className={s.userPhoto}/>
                        </div>
                        <div >
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>

                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                    </span>
                    <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                    </span>

                </div>)
            }
        </div>
    );
}

export default Users;