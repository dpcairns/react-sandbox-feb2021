import React from 'react';
import './App.css';
import request from 'superagent';

export default class App extends React.Component {
  state = {
    quotes: []
  }

  // our function is labeled async because it does asynchronous work inside -- it talks to some other computer on the internet
  handleClick = async () => {
    // log out the milliseconds since 1970
    console.log(Date.now());
    
    // make a request to the futurama api
    // i AWAIT this request so that JS knows to stop running until the response comes back
    const data = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    // log out the results of the request
    console.log(data.body);

    // long out milliseconds again to prove that time has passed
    console.log(Date.now())

  }

  render() {
      return (
        <>
          <button onClick={this.handleClick}>
              Load quotes!
          </button>
        </>
      );
  }
}