import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () =>{
    return {type: ADD_POST}

};
export const updateNewPostText = (text) =>{
    return {type:UPDATE_NEW_POST_TEXT,newText:text}
};

export const profileReducer = (state, action) =>{
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