import {authAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}

const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getUserData = () => async (dispatch) => {
    const data = await authAPI.me()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, email, login, true))
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)

    if (data.data.resultCode === 0) {
        dispatch(getUserData())
    }

    let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Some error'
    dispatch(stopSubmit("login", {_error: message}))


}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }

}


export default authReducer;


