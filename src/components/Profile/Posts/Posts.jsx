import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}  key={p.id}/>);
    let newPostElement = React.createRef();
    let onAddPost =  () =>{
        props.AddPost();
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.lastposts}>
                {postsElements}
            </div>
        </div>);
}

export default Posts;