import {userAPI} from "../Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW= 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
const SET_USERS_COUNT= 'SET_USERS_COUNT';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export const Follow = (userId) =>{
    return {type: FOLLOW, userId}
};
export const unFollow = (userId) =>{
    return {type:UNFOLLOW, userId}
};
export const setUsers= (users) =>{
    return {type: SET_USERS, users}
};
export const setUsersCount = (usersCount) =>{
    return {type: SET_USERS_COUNT,  usersCount}
};
export const setCurrentPage = (currentPage) =>{
    return {type:SET_CURRENT_PAGE, currentPage}
};
export const toggleIsFetching = (isFetching) =>{
    return {type:TOGGLE_IS_FETCHING, isFetching}
};
export const toggleFollowingProgress = (isFetching, userId) =>{
    return {type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
};

let initialState = {
    users:[],
    pageSize:20,
    totalUsersCount:10,
    currentPage:1,
    isFetching:true,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id => id !== action.userId)};
        default:
            return state;
    }
};

export const getUsers = (pageNumber,pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(pageNumber,pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
};

export default usersReducer;