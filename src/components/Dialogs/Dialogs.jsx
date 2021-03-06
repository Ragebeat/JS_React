import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsItemsElements = props.dialogsItems.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>);
    let dialogsElements = props.dialogs.map(m => <Message message={m.message}  key={m.id} author={m.author}/>);
    let AddMessage =  () =>{
        props.AddMessage();
    };
    let onMessageChange = (e) =>{
        props.updateNewMessageText(e.target.value);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItemsElements}
            </div>
            <div className={s.dialog}>
                {dialogsElements}
                <div>
                    <div>
                         <textarea placeholder="Enter message" onChange={onMessageChange} value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={AddMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;