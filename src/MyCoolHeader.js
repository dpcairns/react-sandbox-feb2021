import React from 'react';

export default class MyCoolHeader extends React.Component {
    render() {
        return (
            <div style={{ background: this.props.myCoolColor }}> 
                <p>Hi, {this.props.name}, I am the header!</p>
                <p>Here is your greeting: {this.props.greeting}</p>
            </div>
        );
    }
  }
  