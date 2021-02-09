import React from 'react';
import './App.css';

// Import the necessary styles, or include them 
export default class App extends React.Component {
  state = {
    // 0) initialize some state
    name: '',
    flavor: '',
  }
  
  // 4) in the change handler, grab the event (e)
  handleNameChange = (e) => {
    // 5) call this.setState with an object
    this.setState({ 
      // 6) the key is the key in state we want to change
      name: 
      // 7) the value is the new value from the user that want to set the state to
      e.target.value // whatever the user has typed
     });
  }

  handleVIPClick = () => {
    this.setState({ name: 'lady gaga' })
  }

  render() {
    console.log(this.state);

      return (
        <>
        <form>
            Name
            {/* 1) tie the value of the input to the state */}
            <input 
              value={this.state.name}
              // 2) define a change handler for our input
              onChange={this.handleNameChange} 
            />
            Flavor
            <select
              value={this.state.flavor}
              onChange={e => {
                this.setState({
                  flavor: e.target.value
                })
              }}
            >
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
              <option value="banana">Banana</option>
            </select>
            <button>Submit</button>
        </form>
        <button onClick={this.handleVIPClick}>VIP</button>
        </>
    );
  }
}