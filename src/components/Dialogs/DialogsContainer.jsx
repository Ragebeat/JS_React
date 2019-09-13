import React from 'react';
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
    dialogsItems: state.dialogsPage.dialogsItems,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText
    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        AddMessage: () =>{
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) =>{
            dispatch(updateNewMessageText(text));
        }
    }
};
const DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;