import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsItemsElements = props.dialogsItems.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
    let dialogsElements = props.dialogs.map(m => <Message message={m.message}  key={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItemsElements}
            </div>
            <div className={s.dialog}>
                {dialogsElements}
            </div>
        </div>
    );
}
export default Dialogs;