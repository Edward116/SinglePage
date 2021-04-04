import {combineReducers, createStore} from "redux";
import profileReducer from "../Reducers/ProfileReducer";
import dialogsReducer from "../Reducers/DialogsReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});


const store = createStore(reducers);

export default store