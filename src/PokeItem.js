import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class PokeItem extends Component {    
    render() {    
        return (
            <Link to={this.props.pokemon.pokemon}>
                <div key={this.props.pokemon.pokebase}>
                    <div>
                    <img src={this.props.pokemon.url_image} alt="poke" />
                    </div>
                    {this.props.pokemon.pokemon} : {this.props.pokemon.type_1}
                </div>
            </Link>
        )
    }
}
