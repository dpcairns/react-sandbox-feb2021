import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class DetailPage extends Component {
    state = {
        pokemonData: {}
    }

    componentDidMount = async () => {        
        this.setState({ loading: true });
    
        // the API doesn't let us easily search by name. only by an ugly ID. if we want to query by name, we have to get creative!
        // one possibility is to just get the item in the array, and sort that array. This will probably get us a match
        // const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokebase=${this.props.match.params.pokemonName}&sort=asc`);
    
        // console.log('=============================\n')
        // console.log('|| data.body.results', data.body.results)
        // console.log('\n=============================')
        // this.setState({ 
        //   loading: false,
        //   pokemonData: data.body.results[0],
        // });

        // another option is just to use .find on the results to guarantee that we get the right thing from the array
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
    
        this.setState({ 
          loading: false,
          // TODO: update this when back end team updates the API.
          pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }

    render() {
        // how do i get access to the id that's in the URL?
        // in the past, that meant this new URLSearchParams(window.location.search)
        // but now, we can lean on react-router for this.
        console.log('=============================\n')
        console.log('|| this.state.pokemonData', this.state.pokemonData)
        console.log('\n=============================')
        return (
            <div>
                <h2>Welcome to the detail page!</h2>
               {
                this.state.loading
                    ? <Spinner /> 
                    : <div>
                        <img src={this.state.pokemonData.url_image} alt="pokemon" />
                       <p>{this.state.pokemonData.pokemon}</p>
                       <p>{this.state.pokemonData.attack}</p>
                       <p>{this.state.pokemonData.defense}</p>
                       <p>{this.state.pokemonData.type_1}</p>
                       <p>{this.state.pokemonData.type_2}</p>
                       <p>{this.state.pokemonData.shape}</p>
                       <p>{this.state.pokemonData.ability_1}</p>
                       <p>{this.state.pokemonData.ability_2}</p>

                   </div>
               }
            </div>
        )
    }
}
