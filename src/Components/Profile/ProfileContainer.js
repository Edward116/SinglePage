import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/Reducers/ProfileReducer";
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15888
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)