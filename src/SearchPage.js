import React from 'react';
import './App.css';

export default class SearchPage extends React.Component {
  state = {
    pokemon: []
  }

  handleClick = () => {
    this.setState({ 
      pokemon: 
        [
          {
            pokemon:'charizard',
            type_1: 'fire',
            url_image:'http://placekitten.com/300/300'
          },
          {
            pokemon:'bulbasaur',
            type_1:'plant',
            url_image:'http://placekitten.com/200/200',
          },
        ]
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