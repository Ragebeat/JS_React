import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsItems = [
    {id: 1, name: "Sveta"},
    {id: 2, name: "Masha"},
    {id: 3, name: "Yura"},
    {id: 4, name: "Misha"},
    {id: 5, name: "Karl"},
    {id: 6, name: "Yohohohh"}
]
let dialogs = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are You?"},
    {id: 3, message: ":):):)"}
]

let posts = [
    {id:1, message:"Hellow everyone", likes:15},
    {id:2, message:"It's my first post",likes:20},
    {id:3, message:"Yohohoh",likes:2},
    {id:4, message:"Nya",likes:200}
]
ReactDOM.render(<App  posts = {posts} dialogs = {dialogs} dialogsItems={dialogsItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
