import React from 'react'
import s from './DialogsFriends.module.css'
import {NavLink} from "react-router-dom";


const DialogsFriends = (props) => {




    return (
            <div className={s.friends}>
                {props.dialogsPage.friendsData.map(data => {
                    return(
                        <div className={s.dialogsNames}>
                            <NavLink to={'/dialogs/' + data.id}
                                     activeClassName={s.active}>{data.name}</NavLink>
                        </div>
                    );
                })}

            </div>

    );

}

export default DialogsFriends