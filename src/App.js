import React from 'react';
import './App.css';
import style from  './App.module.css';
import style2 from  './App2.module.css';
import birdImage from './bird.jpeg';
import MyCoolHeader from './MyCoolHeader.js';
import MyAmazingArticle from './MyAmazingArticle.js';
import MySpecialFooter from './MySpecialFooter.js';

function add(num1, num2) {
  return num1 + num2
}

export default class App extends React.Component {
  render() {
      return (
        <>
          <h1 className={style.article}>Time to click the legos together!</h1>
            <MyCoolHeader 
              name="dani" 
              greeting="thanks" 
              myCoolColor="lightgreen" />
            <div className={style2.article}>Your sum is: {add(4, 8)}</div>
            <MyAmazingArticle myCoolAwesomeImage={birdImage} />
            <MySpecialFooter phone="345-456-5431" />
            <MySpecialFooter phone="867-5309" />
            <MySpecialFooter phone="9999999" />
            <MySpecialFooter phone="333322211" />

        </>
      );
  }
}