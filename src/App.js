import React from 'react';
import './App.css';

// Import the necessary styles, or include them 
export default class App extends React.Component {
  state = {
    // data model for the app
    someNumber: 0,
    doubleNumber: 0
  }

  increment = () => {
    // what do  i want the next state of someNumber to be?
    this.setState({ 
      // key to set
      someNumber: 
      // value to set
      this.state.someNumber + 1,
    })
  }
  
  render() {
      return (
        <div className="counter">
          <div>My number: {this.state.someNumber}</div>
          {/* on click, call this.increment */}
          <button onClick={this.increment}>Increment</button>
        </div>
    );
  }
}