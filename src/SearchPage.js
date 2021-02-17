import React from 'react';
import request from 'superagent';
import './App.css';
import Spinner from './Spinner.js';
import PokeList from './PokeList.js'
export default class SearchPage extends React.Component {
  state = {
    pokemonData: [],
    totalPokemon: 0,
    perPage: 10,
    query: '',
    loading: false,
    currentPage: 1
  }

  // what do we want to happen on load in this app?
  componentDidMount = async () => {
    await this.fetchPokemon();
  }

  // it's called whenever state or props change
  // componentDidUpdate = async (prevProps, prevState) => {
  //   const oldPageNumber = prevState.currentPage;
  //   const newPageNumber = this.state.currentPage;

  //   if (oldPageNumber !== newPageNumber) {
  //     await this.fetchPokemon();
  //   }
  // }

  fetchPokemon = async () => {
    console.log('the user clicked search!', this.state.query)
    
    this.setState({ loading: true });

    // we AWAITED a PROMISE
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);

    this.setState({ 
      loading: false,
      pokemonData: data.body.results,
      totalPokemon: data.body.count
    });
  }

  // we labeled our function ASYNCHRONOUS
  handleClick = async () => {
    await this.setState({ currentPage: 1 });

    await this.fetchPokemon();
  }

  handleQueryChange = async (e) => {
    console.log('the query changed', e.target.value)
    this.setState({ 
      query: e.target.value,
     });
  }

  handlePerPage = (e) => {
    this.setState({ perPage: e.target.value })
  }

  handleNextClick = async () => {
    // go increment state
    // this unfortunately doeasn't happen immediately
    // "this setState is batched"
    await this.setState({
      currentPage: this.state.currentPage + 1
    });

    // now that the state is incremented, make a new fetch
    await this.fetchPokemon()
  }

  handlePreviousClick = async () => {
    await this.setState({
      currentPage: this.state.currentPage - 1
    });

    await this.fetchPokemon();
  }

  render() {
    const {
      pokemonData,
      loading,
    } = this.state;
    
      // we can still do sorting, filtering here. it will happen whenever state changes
      // do anything that you want to happen on every single render

      const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);
      return (
        <>
        <label>
          Search
           <input onChange={this.handleQueryChange} />
           Results per page:
           <select onChange={this.handlePerPage}>
             <option value={10}>10</option>
             <option value={50}>50</option>
             <option value={75}>75</option>
             <option value={100}>100</option>
             </select>
        </label>

        <button onClick={this.handleClick}>Go!</button>
        <h3>Page {this.state.currentPage}</h3>
        <button onClick={this.handlePreviousClick} disabled={this.state.currentPage === 1}>Previous</button>
        <button disabled={this.state.currentPage === lastPage} onClick={this.handleNextClick}>Next</button>
        <div className="list">
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