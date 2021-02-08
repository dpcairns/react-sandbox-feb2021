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

const dogs = [
  {
    name: 'spot',
    age: 3,
  },
  {
    name: 'jeep',
    age: 2,
  },
  {
    name: 'rover',
    age: 1,
  },
]

class Dog extends React.Component {
  render() {
    return <div>
    <p>My name is {this.props.dog.name}</p>
    <p>and i am {this.props.dog.age} years old</p>
  </div>
  }
}

export default class App extends React.Component {
  render() {
    // const dogList = dogs.map(dog => <div>
    //     <p>My name is {dog.name}</p>
    //     <p>and i am {dog.age} years old</p>
    //   </div>
    // );

    // dogList is an array of Dog components
    const dogList = 
      // dogs is an array of dog objects with a name and age
      dogs.map(
        // dog is a single dog object with a name and age
        dog => 
          // Dog is a react component
            // dog is a prop name
          <Dog dog={
            // dog is the dog object from line 51 that we're passing as a prop
            dog
          } />)

    console.log(dogList)
    
      return (
        <>
          { dogList }
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