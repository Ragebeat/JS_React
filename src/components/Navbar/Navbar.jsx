import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    let friendsElements = props.state.friends.map(f => <Friends name={f.name} key={f.id} avatar={f.avatar}/>);
    return (<nav className={s.nav}>
        <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        <br/><br/><br/><br/><br/>
            <h2 className={s.h2}>Friends</h2>
            {friendsElements}
    </nav>);
}

export default Navbar;