const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState =  {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Whats wrong?'}
    ],
    friendsData: [
        {id: 1, name: 'Ed'},
        {id: 2, name: 'Ser'},
        {id: 3, name: 'Art'}
    ],
    dialogText: ''

};

const dialogsReducer = (state = initialState, action) => {

    let copyState = {...state}

    switch (action.type){
        case ADD_MESSAGE:
            copyState.messageData.push
            ({id: 4, message: state.dialogText});
            copyState.dialogText = ''
            return copyState;

        case UPDATE_MESSAGE_TEXT:

            copyState.dialogText = action.newMessageText;
            return copyState;

        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateTextMessageActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer;


