import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText} from './Redux/state'
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./Redux/state";

 export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App  state = {state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root'));
}
