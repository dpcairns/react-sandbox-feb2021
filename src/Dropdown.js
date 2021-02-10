import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
           <select
            value={this.props.flavor}
            onChange={this.props.handleFlavorChange}
          >
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="banana">Banana</option>
          </select> 
        )
    }
}
