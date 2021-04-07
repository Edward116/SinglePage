import React from "react";
import s from './users.module.css'
import * as axios from "axios";
import image from '../../AnotherThings/Images/img.png'

class Users extends React.Component{



    componentDidMount() {
        this.getUsers();
    }


    getUsers = () => {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
        }


onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })

}

    render(){

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div >
                    <div>
                        {pages.map(p => {
                            return <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={() => {this.onPageChanged(p)}}> {p} </span>
                        })}
                    </div>
                {
                    this.props.users.map(u => <div className={s.userItem}>
                    <span className={s.userButton}>
                        <div>
                            <img src={u.photos.small || image} className={s.userPhoto}/>
                        </div>
                        <div >
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.usUnfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.usFollow(u.id)
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
}

export default Users;