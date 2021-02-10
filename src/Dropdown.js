import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
           <select
            value={this.props.currentValue}
            onChange={this.props.handleChange}
          >
                {
                  // we are passed an array of options from the parent
                  this.props.options.map(
                    // for each list item
                    listItem => 
                    // we make an html tag using that list item
                    <option value={listItem}> {listItem} </option>)
                }
          </select> 
        )
    }
}
