import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Sveta" id="1"/>
                <DialogsItem name="Masha" id="2"/>
                <DialogsItem name="Yura" id="3"/>
                <DialogsItem name="Misha" id="4"/>
                <DialogsItem name="Karl" id="5"/>
                <DialogsItem name="Yohohohh" id="6"/>
            </div>
            <div className={s.dialog}>
                <Message message="Hello!"/>
                <Message message="How are You?"/>
                <Message message=":):):)"/>
            </div>
        </div>
    );
}

const DialogsItem = (props) => {
    let path="/dialogs/"+props.id;
    return (
        <div className={s.item}><NavLink to={path} activeClassName={s.active}>{props.name}</NavLink></div>
    );
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

export default Dialogs;