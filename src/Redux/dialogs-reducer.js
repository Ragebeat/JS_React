const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () =>{
    return {type: ADD_MESSAGE}
};
export const updateNewMessageText = (text) =>{
    return {type:UPDATE_NEW_MESSAGE_TEXT,newText:text}
};
let initialState = {
    dialogs: [
        {id: 1, message: "Hello!", author:"opponent"},
        {id: 2, message: "How are You?", author:"opponent"},
        {id: 3, message: ":):):)", author:"opponent"},
        {id: 4, message: "Yo", author:"You"},
        {id: 5, message: "I'm the best!", author:"You"}
    ],
    dialogsItems: [
        {id: 1, name: "Sveta", avatar:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},
        {id: 2, name: "Masha", avatar:"https://wxpcdn.gcdn.co/dcont/fb/image/crew4_1024.png"},
        {id: 3, name: "Yura", avatar:"https://7zabav.club/wp-content/uploads/2019/03/avatarki_memy_2_02084008-600x600.png"},
        {id: 4, name: "Misha", avatar:"https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"},
        {id: 5, name: "Karl", avatar:"https://7zabav.club/wp-content/uploads/2019/03/avatarki_memy_36_02084115-600x600.jpg"},
        {id: 6, name: "Yohohohh", avatar:"https://greatchat.ru/wp-content/uploads/2018/03/avatarki-dlya-skype1.jpeg"}
    ],
    newMessageText:""
}
const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6, message: state.newMessageText, author:"You"
            };
            return{
                ...state,
                newMessageText: "",
                dialogs: [...state.dialogs,newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return{...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export default dialogsReducer;