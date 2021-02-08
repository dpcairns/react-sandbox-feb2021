import React from 'react';

export default class MySpecialFooter extends React.Component {
    render() {
        return (
            <div> I am the footer! Call us at {this.props.phone}</div>
        );
    }
  }