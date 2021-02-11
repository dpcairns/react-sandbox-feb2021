import React from 'react';
import './App.css';
import request from 'superagent';
import Spinner from './Spinner.js';
export default class App extends React.Component {
  state = {
    quotes: [],
    loading: false
  }

  // our function is labeled async because it does asynchronous work inside -- it talks to some other computer on the internet
  handleClick = async () => {
    // log out the milliseconds since 1970
    console.log(Date.now());
  
    // this is a good time to launch a loading spinner
    this.setState({ loading: true });

    // make a request to the futurama api
    // i AWAIT this request so that JS knows to stop running until the response comes back
    // JS uses PROMISES to deal with asynchronous stuff

    const data = await request.get('http://futuramaapi.herokuapp.com/api/quotes');
    // this code doesn't execute until the promise is RESOLVED

    // this is a good time to make the loading spinner go away
    this.setState({ loading: false });


    // log out the results of the request
    console.log(data.body);

    // long out milliseconds again to prove that time has passed
    console.log(Date.now())  
  }

  render() {
      return (
        <>
        {/* if this.state.loading is true, show the spinner */}
          <button onClick={this.handleClick}>
              Load quotes!
          </button>
          {this.state.loading && <Spinner />}
        </>
      );
  }
}