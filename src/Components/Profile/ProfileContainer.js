import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/Reducers/ProfileReducer";
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../HOC/AuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlData = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile})(withUrlData);
