import React from 'react';
import './App.css';
import iceCreams from './ice-cream.js';
import IceCreamList from './IceCreamList.js';
import Dropdown from './Dropdown.js';
// Import the necessary styles, or include them 
export default class App extends React.Component {
  state = {
    // 0) initialize some state
    flavor: '',
  }
  
  // this is our debit card. it can change parent state and it can be passed down to children
  handleFlavorChange = (e) => {
    // this is the teller. it does the actual work
    // this is like a statement? transaction list?
    this.setState({
      flavor: e.target.value
    })
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
          <IceCreamList 
          filteredIceCreams={filteredIceCreams} 
          />
          Flavor
          <Dropdown
            flavor={this.state.flavor}
            // passing the debit card
            handleFlavorChange={this.handleFlavorChange}
          />
        </>
    );
  }
}