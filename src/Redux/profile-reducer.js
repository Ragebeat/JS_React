const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = () =>{
    return {type: ADD_POST}
};
export const updateNewPostText = (text) =>{
    return {type:UPDATE_NEW_POST_TEXT,newText:text}
};export const setUserProfile = (profile) =>{
    return {type:SET_USER_PROFILE, profile}
};

let initialState = {
    posts: [
        {id: 1, message: "Hellow everyone", likes: 15},
        {id: 2, message: "It's my first post", likes: 20},
        {id: 3, message: "Yohohoh", likes: 2},
        {id: 4, message: "Nya", likes: 200},
    ],
    newPostText:"",
    profile:null,
    isFetching:true
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: state.newPostText, likes: 0
            };
            return {
                ...state,
                newPostText : "",
                posts : [...state.posts,newPost ]
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText:action.newText
            };
        case SET_USER_PROFILE:
            return {...state,
                profile:action.profile
            };
        default:
            return state;
    }
};

export default profileReducer;