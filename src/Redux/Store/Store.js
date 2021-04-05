import {combineReducers, createStore} from "redux";
import profileReducer from "../Reducers/ProfileReducer";
import dialogsReducer from "../Reducers/DialogsReducer";
import usersReducer from "../Reducers/UsersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});


const store = createStore(reducers);

export default store