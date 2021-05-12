import {addPost, deletePost} from "../../../Redux/Reducers/ProfileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {
    addPost,
    deletePost
})(MyPost);



