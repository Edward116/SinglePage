import {connect} from "react-redux";
import DialogsFriends from "./DialogsFriends";

const mapStateToProps = (state) => {
    return {
        friendsData: state.dialogsPage.friendsData
    }
}

export default connect(mapStateToProps, {})(DialogsFriends);

