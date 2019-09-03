import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
                width="100%" alt="pulsar"></img>
        </div>
        <div>
            ava + desc
        </div>
        <Posts />
    </div>);
}

export default Profile;