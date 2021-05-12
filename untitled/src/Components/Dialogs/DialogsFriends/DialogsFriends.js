import React from 'react'
import s from './DialogsFriends.module.css'
import {NavLink} from "react-router-dom";


const DialogsFriends = (props) => {




    return (
            <div className={s.friends}>
                {props.friendsData.map(data => {
                    return(
                        <div className={s.dialogsNames} key={data.id}>
                            <NavLink to={'/dialogs/' + data.id}
                                     activeClassName={s.active}>{data.name}</NavLink>
                        </div>
                    );
                })}

            </div>

    );

}

export default DialogsFriends