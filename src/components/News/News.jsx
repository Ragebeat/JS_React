import React from 'react';
import s from './News.module.css';

const News = () => {
    let temp = {users:[
            {id: 1, followed:false, fullName: "Dima", status: "I'm studing recact", avatar:'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg', location:{city:'Minsk', country: 'Belarus'}},
            {id: 2, followed:true, fullName: "Misha", status: "I'm happy", avatar:'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg', location:{city:'Moscow', country: 'Russia'}},
            {id: 3, followed:false, fullName: "Masha", status: "I'm studing recact too", avatar:'https://wxpcdn.gcdn.co/dcont/fb/image/crew4_1024.png', location:{city:'Kiev', country: 'Ukraine'}},
            {id: 4, followed:false, fullName: "Sveta", status: "I'm a boss", avatar:'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg', location:{city:'Vologda', country: 'Russia'}},
            {id: 5, followed:false, fullName: "Vika", status: "I'm studing Html", avatar:'https://www.meme-arsenal.com/memes/5290445c9405a6e61b1929dd4b987f69.jpg', location:{city:'Piter', country: 'Russia'}},
            {id: 6, followed:true, fullName: "Nyanya", status: "Nyanya", avatar:'https://psychologist.com.ua/wp-content/uploads/2014/08/20140822_avatar.jpg',location:{city:'N.Novgorod', country: 'Russia'}},
            {id: 7, followed:false, fullName: "Karl", status: "50 lesons Karl", avatar:'https://7zabav.club/wp-content/uploads/2019/03/avatarki_memy_36_02084115-600x600.jpg',location:{city:'Washington', country: 'USA'}},
            {id: 8, followed:true, fullName: "Yohohohh", status: "I searching for job", avatar:'https://greatchat.ru/wp-content/uploads/2018/03/avatarki-dlya-skype1.jpeg', location:{city:'Ulan-bati', country: 'Russia'}}
        ]
    };
    let json1 = JSON.stringify(temp);
    console.log(json1)
    return (
        <div>News</div>
    );
}

export default News;