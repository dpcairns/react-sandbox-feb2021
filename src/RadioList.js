import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RadioList extends Component {
    render() {
        return (
            <div>
            {
                // because i want this to be reusable, typesArray is a bad name
                this.props.options.map(type => <label>
                {type}
                <input
                type="radio" 
                onChange={this.props.handleRadio}
                name="type" 
                value={type} 
                checked={this.props.radio === type} />
                </label>)
            }
          <Link to="/">Home</Link>
            </div>
        )
    }
}
