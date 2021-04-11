import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "../Reducers/ProfileReducer";
import dialogsReducer from "../Reducers/DialogsReducer";
import usersReducer from "../Reducers/UsersReducer";
import authReducer from "../Reducers/authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store