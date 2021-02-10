import React, { Component } from 'react'
// import propTypes from 'prop-types';


export default class IceCream extends Component {
    // propTypes = {
    //     iceCream: propTypes.shapeOf({
    //         name: propTypes.string,
    //         category: propTypes.string,
    //         cost: propTypes.number
    //     })
    // }

    render() {
        return (
            <li 
                className="cream">
                <p>{this.props.iceCreamProp.name}</p>
                <p>{this.props.iceCreamProp.category}</p>
                <p>${this.props.iceCreamProp.cost}</p>
            </li>
        )
    }

    // render() {
        // this is called OBJECT DESCTRUCTURING
        // it is a way of SUCKING THE PROPERTIES out of an object
        // this keeps us from having to copy paste this,.props.iceCreamProp again and again
    //     const {
    //         iceCreamProp: {
    //             name,
    //             category,
    //             cost
    //         }
    //     } = this.props;

    //     return (
    //         <li 
    //             className="cream">
    //             <p>{name}</p>
    //             <p>{category}</p>
    //             <p>${cost}</p>
    //         </li>
    //     )
    // }
}
