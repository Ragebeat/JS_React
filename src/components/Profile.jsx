import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
                 width="100%" alt="pulsar"></img>
        </div>
        <div>
            ava + desc
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    </div>);
}

export default Profile;