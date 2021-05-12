import {addMessage} from "../../../Redux/Reducers/DialogsReducer";
import {connect} from "react-redux";
import DialogsMessages from "./DialogsMessages";
import {withAuthRedirect} from "../../../HOC/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)
(DialogsMessages)

