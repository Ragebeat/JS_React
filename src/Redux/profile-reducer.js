import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () =>{
    return {type: ADD_POST}
};
export const updateNewPostText = (text) =>{
    return {type:UPDATE_NEW_POST_TEXT,newText:text}
};

let initialState = {
    posts: [
        {id: 1, message: "Hellow everyone", likes: 15},
        {id: 2, message: "It's my first post", likes: 20},
        {id: 3, message: "Yohohoh", likes: 2},
        {id: 4, message: "Nya", likes: 200}
    ],
    newPostText:""
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: state.newPostText, likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.newText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;