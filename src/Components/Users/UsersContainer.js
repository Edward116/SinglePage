import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../Redux/Reducers/UsersReducer";
import * as axios from "axios";
import s from "./users.module.css";
import image from "../../AnotherThings/Images/img.png";


class UsersClass extends React.Component {


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

    render() {
        return (
            <Users {...this.props}
                   onPageChanged={this.onPageChanged}
            />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        usFollow: (userId) => {
            dispatch(followAC(userId))
        },
        usUnfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;

