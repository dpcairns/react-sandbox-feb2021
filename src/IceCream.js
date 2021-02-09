import React, { Component } from 'react'

export default class IceCream extends Component {
    render() {
        return (
            <li 
                className="cream">
                <p>{this.props.iceCream.name}</p>
                <p>{this.props.iceCream.category}</p>
                <p>${this.props.iceCream.cost}</p>
            </li>
        )
    }
}
