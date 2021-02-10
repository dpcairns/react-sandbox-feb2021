import React from 'react';
import './App.css';
import iceCreams from './ice-cream.js';
import IceCreamList from './IceCreamList.js';

// Import the necessary styles, or include them 
export default class App extends React.Component {
  state = {
    // 0) initialize some state
    flavor: '',
  }
  

  render() {
      // this will get called whenever state of props changes
      const filteredIceCreams = iceCreams.filter((iceCream) => {
        // if there are no flavors selected, show all
        if (!this.state.flavor) return true; // include this flavor

        if (iceCream.category === this.state.flavor) return true; // include this flavor

        return false; // don't include this flavor
      });

      return (
        <>
          <IceCreamList filteredIceCreams={filteredIceCreams} />
        <form>
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

        </>
    );
  }
}