import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unfollow, followingProgress, getUsers
} from "../../Redux/Reducers/UsersReducer";
import Loader from "../../AnotherThings/Loader/Loader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";




class UsersClass extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }


    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        }

    render() {


        return (<>
                {this.props.isFetching ? <Loader/> :
                    <Users {...this.props}
                           onPageChanged={this.onPageChanged}
                    />}
            </>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersClass)


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    followingProgress,
    getUsers
})(AuthRedirectComponent);

export default UsersContainer;

