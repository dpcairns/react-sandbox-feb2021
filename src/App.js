import React from 'react';
import './App.css';
import iceCreams from './ice-cream.js';
import IceCream from './IceCream.js';

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

    // this will get called once when the component is defined


  render() {
      // this will get called whenever state of props changes
      const filteredIceCreams = iceCreams.filter((iceCream) => {
        // if there are no flavors selected, show all
        if (!this.state.flavor) return true; // include this flavor

        if (iceCream.category === this.state.flavor) return true; // include this flavor

        return false; // don't include this flavor
      });

      const iceCreamNodes = filteredIceCreams.map(iceCream => 
        <IceCream 
          key={iceCream.name}
          iceCream={iceCream} />);

      console.log(iceCreamNodes)
      return (
        <>
        <ul className="list">
          { iceCreamNodes }
        </ul>
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
              onChange={(e) => {
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

        <div>
          Name: {this.state.name}
        </div>
        <div>
          Flavor: {this.state.flavor}
        </div>

        </>
    );
  }
}