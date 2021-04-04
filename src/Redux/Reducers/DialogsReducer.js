const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState =  {
    messageData: [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'Whats wrong?'}
    ],
    friendsData: [
        {id: 1, name: 'Ed'},
        {id: 2, name: 'Ser'},
        {id: 3, name: 'Art'}
    ],
    dialogText: ''

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            state.messageData.push
            ({message: state.dialogText});

        case UPDATE_MESSAGE_TEXT:
            state.dialogText = action.newMessageText;

        default:
            return state;
    }

}

export default dialogsReducer;


