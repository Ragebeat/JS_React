import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}  key={p.id}/>)
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.lastposts}>
                {postsElements}
            </div>
        </div>);
}

export default Posts;