import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/state";

const Dialogs = (props) => {
    let dialogsItemsElements = props.state.dialogsItems.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>);
    let dialogsElements = props.state.dialogs.map(m => <Message message={m.message}  key={m.id} author={m.author}/>);
    let newMessageElement = React.createRef();
    let AddMessage =  () =>{
        props.dispatch(addMessageActionCreator());
    };
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageText(text));
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
                         <textarea onChange={onMessageChange} value={props.state.newMessageText} ref={newMessageElement} cols="30"
                                   rows="3"/>
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