import React from 'react';
import request from 'superagent';
import './App.css';

export default class SearchPage extends React.Component {
  state = {
    pokemon: []
  }

  // we labeled our function ASYNCHRONOUS
  handleClick = async () => {
    // we AWAITED a PROMISE
    const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');

    // we logged out the results of our "Hitting the endpoint"
    console.log('=============================\n')
    console.log('|| data', data.body.results)
    console.log('\n=============================')

    this.setState({ 
      pokemon: data.body.results,
    })
  }

  render() {
      return (
        <>
        <label>
          Search
           <input />
        </label>

        <button onClick={this.handleClick}>Go!</button>
        <h1>All our pokemon are CLIENT-SIDE</h1>
        <div>
          {
            // for each poke in pokemon
            this.state.pokemon.map(poke => 
            <div key={poke.pokemon}>
              <div>
              <img src={poke.url_image} alt="poke" />
              </div>
              {poke.pokemon} : {poke.type_1}
            </div>)
          }
        </div>
       </>
      );
  }
}