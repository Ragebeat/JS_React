import dialogsReducer from "./dialogs-reducer";
const FOLLOW = 'FOLLOW';
const UNFOLLOW= 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
const SET_USERS_COUNT= 'SET_USERS_COUNT';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';

export const followAC = (userId) =>{
    return {type: FOLLOW, userId}
};
export const unFollowAC = (userId) =>{
    return {type:UNFOLLOW, userId}
};
export const setUsersAC = (users) =>{
    return {type: SET_USERS, users}
};
export const setUsersCountAC = (usersCount) =>{
    return {type: SET_USERS_COUNT,  usersCount}
};
export const setCurrentPageAC = (currentPage) =>{
    return {type:SET_CURRENT_PAGE, currentPage}
};

let initialState = {
    users:[],
    pageSize:3,
    totalUsersCount:0,
    currentPage:1
};

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed:true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed:false};
                    }
                    return u;
                })
            };
        case SET_USERS:{
            return {...state, users:[...action.users]};
        }
        case SET_USERS_COUNT:{
            return {...state, totalUsersCount: action.usersCount};
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        default:
            return state;
    }
};

export default usersReducer;