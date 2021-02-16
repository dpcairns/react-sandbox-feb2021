import React from 'react';
import request from 'superagent';
import './App.css';

export default class SearchPage extends React.Component {
  state = {
    pokemon: [],
    query: '',
  }

  // what do we want to happen on load in this app?
  componentDidMount = async () => {
    await this.fetchPokemon();
  }

  fetchPokemon = async () => {
    console.log('the user clicked search!', this.state.query)
    // we AWAITED a PROMISE
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);

    // we logged out the results of our "Hitting the endpoint"

    this.setState({ 
      pokemon: data.body.results,
    });
  }

  // we labeled our function ASYNCHRONOUS
  handleClick = async () => {
    await this.fetchPokemon();
  }

  handleQueryChange = async (e) => {
    console.log('the query changed', e.target.value)
    this.setState({ 
      query: e.target.value,
     });
  }

  render() {
      // we can still do sorting, filtering here. it will happen whenever state changes
      return (
        <>
        <label>
          Search
           <input onChange={this.handleQueryChange} />
        </label>

        <button onClick={this.handleClick}>Go!</button>
        <h1>All our pokemon are SERVER-SIDE</h1>
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