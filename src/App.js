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
    cost: '',
  }
  
  // this is our debit card. it can change parent state and it can be passed down to children
  handleFlavorChange = (e) => {
    // this is the teller. it does the actual work
    // this is like a statement? transaction list?
    this.setState({
      flavor: e.target.value
    })
  }

  handleCostChange = (e) => {
    // this is the teller. it does the actual work
    // this is like a statement? transaction list?
    this.setState({
      cost: Number(e.target.value)
    })
  }

  render() {
    console.log(this.state)
      // this will get called whenever state of props changes
      const filteredIceCreams = iceCreams.filter((iceCream) => {
        // if there are no flavors AND NO COSTS selected, show all
        if (!this.state.flavor && !this.state.cost) return true; // include this flavor

        // if there is a flavor selected but not cost selected
        if (this.state.flavor && !this.state.cost) {
          // only filter by matching flavors
          if (iceCream.category === this.state.flavor) return true; // include this flavor
        }
        
        // if there is a cost selected but no flavor
        if (this.state.cost && !this.state.flavor) {
          // filter based on matching costs
          if (iceCream.cost === this.state.cost) return true; // include this flavor
        }

        // if there is both a cost and a flavor selected
        if (this.state.cost && this.state.flavor) {
          // filter based on both of these categories  
          // tech debt: we should use category everywhere since that's the data model
          if (iceCream.cost === this.state.cost && iceCream.category === this.state.flavor) return true;
        }

        // if all checks fail, do NOT include this item in our filtered array
        return false; // don't include this flavor
      });

      return (
        <>
          <IceCreamList 
          filteredIceCreams={filteredIceCreams} 
          />
          Flavor
          <Dropdown
            currentValue={this.state.flavor}
            // passing the debit card
            handleChange={this.handleFlavorChange}
            options={['vanilla', 'chocolate', 'banana']}
          />
          Cost
          <Dropdown
            currentValue={this.state.cost}
            // passing the debit card
            handleChange={this.handleCostChange}
            options={[1, 2, 3]}
          />
        </>
    );
  }
}