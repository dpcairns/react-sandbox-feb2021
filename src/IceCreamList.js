import React, { Component } from 'react'
import IceCream from './IceCream.js';

export default class IceCreamList extends Component {

    render() {
        // const { filteredIceCreams } = this.props;

        return (
            <ul className="list">
                { this.props.filteredIceCreams.map(iceCreamObject => 
            <IceCream
            key={iceCreamObject.name}
            iceCreamProp={iceCreamObject} // passing props!
            />)}
            </ul>
        )
    }
}
