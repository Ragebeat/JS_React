import {addPostActionCreator, updateNewPostText} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        AddPost: () =>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) =>{
            dispatch(updateNewPostText(text));
        }

    }
}
const PostsContainer = connect (mapStateToProps,mapDispatchToProps)(Posts);
export default PostsContainer;