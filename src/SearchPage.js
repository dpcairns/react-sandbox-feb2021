import React from 'react';
import request from 'superagent';
import './App.css';
import Spinner from './Spinner.js';
import PokeList from './PokeList.js'
export default class SearchPage extends React.Component {
  state = {
    pokemonData: [],
    query: '',
    loading: false,
  }

  // what do we want to happen on load in this app?
  componentDidMount = async () => {
    await this.fetchPokemon();
  }

  fetchPokemon = async () => {
    console.log('the user clicked search!', this.state.query)
    
    this.setState({ loading: true });

    // we AWAITED a PROMISE
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortDirection}`);

    this.setState({ 
      loading: false,
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
    const {
      pokemonData,
      loading,
    } = this.state;
    
      // we can still do sorting, filtering here. it will happen whenever state changes
      // do anything that you want to happen on every single render
      return (
        <>
        <label>
          Search
           <input onChange={this.handleQueryChange} />
        </label>

        <button onClick={this.handleClick}>Go!</button>
        <h1>All our pokemon are SERVER-SIDE</h1>
        <div>
          {/* if statements don't work in JSX. Therefore, we have to use this weird "short circuit" syntax to conditionally render the spinner. This says: if this.state.loading is true, render the Spinner component */}
          { loading 
          ? <Spinner />
          : <PokeList pokemonData={pokemonData} />
          
          }
        </div>
       </>
      );
  }
}