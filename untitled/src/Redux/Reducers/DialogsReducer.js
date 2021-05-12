const ADD_MESSAGE = 'ADD_MESSAGE';

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
    ]

};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type){
        case ADD_MESSAGE:
        return {
            ...state, messageData: [...state.messageData, {id: 6, message: action.message}]
        }
        default:
            return state;
    }

}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer;


