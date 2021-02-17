import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return this.props.pokemonData.map(pokemon => <PokeItem pokemon={pokemon} />)
    }
}
