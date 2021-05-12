import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unfollow, followingProgress, getUsers
} from "../../Redux/Reducers/UsersReducer";
import Loader from "../../AnotherThings/Loader/Loader";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount
} from "../../Redux/Reducers/usersSelectors";




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

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}*/

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        followingProgress,
        getUsers
    })
)(UsersClass)



