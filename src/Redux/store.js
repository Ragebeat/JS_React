import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage :{
            posts: [
                {id: 1, message: "Hellow everyone", likes: 15},
                {id: 2, message: "It's my first post", likes: 20},
                {id: 3, message: "Yohohoh", likes: 2},
                {id: 4, message: "Nya", likes: 200}
            ],
            newPostText:""
        },
        dialogsPage :{
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
        },
        navbar:{
            friends: [
                {id: 1, name: "Sveta", avatar:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},
                {id: 2, name: "Masha", avatar:"https://wxpcdn.gcdn.co/dcont/fb/image/crew4_1024.png"},
                {id: 3, name: "Yura", avatar:"https://7zabav.club/wp-content/uploads/2019/03/avatarki_memy_2_02084008-600x600.png"},
                {id: 4, name: "Misha", avatar:"https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"}
            ]}
    },
    _callSubscriber (){
        console.log("changed");
    },
    getState(){
        return this._state;
    },
    dispatch(action){ // {type : COMMAND-NAME}
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.navbar = navbarReducer(this._state.navbar,action);
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
};


export default store;