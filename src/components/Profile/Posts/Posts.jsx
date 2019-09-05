import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostText} from "../../../Redux/state";

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}  key={p.id}/>);
    let newPostElement = React.createRef();
    let AddPost =  () =>{
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostText(text));
    };
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.lastposts}>
                {postsElements}
            </div>
        </div>);
}

export default Posts;