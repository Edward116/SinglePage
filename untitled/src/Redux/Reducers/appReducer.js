import {getUserData} from "./authReducer";

    const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState =  {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_INITIALIZED:
            return {...state,
                initialized: true}
        default:
            return state;
    }

}

 const successInit = () => ({type: SET_INITIALIZED})

export const initialize = () => (dispatch) =>{
    let promise = dispatch(getUserData())

    promise.then(() => {
        dispatch(successInit())
    })


}



export default appReducer;


