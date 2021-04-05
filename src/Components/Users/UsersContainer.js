import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/Reducers/UsersReducer";

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

