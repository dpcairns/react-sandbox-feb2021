import React from 'react';
import './App.css';
import request from 'superagent';
import Spinner from './Spinner.js';

export default class SearchPage extends React.Component {
  state = {
    quotes: [],
    loading: false,
    sortBy: 'character',
    query: ''
  }

  // our function is labeled async because it does asynchronous work inside -- it talks to some other computer on the internet
  componentDidMount = async () => {
    await this.loadQuotes();
  }

  // our function is labeled async because it does asynchronous work inside -- it talks to some other computer on the internet
  handleClick = async () => {
    await this.loadQuotes();
  }

  loadQuotes = async () => {  
    // this is a good time to launch a loading spinner
    this.setState({ 
      loading: true,
      quotes: []
     });
    // make a request to the futurama api
    // i AWAIT this request so that JS knows to stop running until the response comes back
    // JS uses PROMISES to deal with asynchronous stuff

    const data = await request.get('http://futuramaapi.herokuapp.com/api/quotes');
    // this code doesn't execute until the promise is RESOLVED

    // this is a good time to make the loading spinner go away
    this.setState({ 
      loading: false,
      quotes: data.body
     });
  }

  handleChange = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
      this.state.quotes.sort(
          (a, b) => 
          // we use brackets here because we don't know ahead of time what the user wants us to sort by. That will change every time the iuser selectss from the dropdown. When state changes, we will sort the data again. We use brackets to show that the property we're sorting by is dynamic
            a[this.state.sortBy]
              .localeCompare(b[this.state.sortBy])
      );

      // lets only include in our final array quotations that have the user's query inside of them. So if the user typed 'hello', the array would include 'hello world' but not 'goobye world'.
      const filteredQuotes = this.state.quotes.filter(quote => quote.quote.includes(this.state.query))

      return (
        <>
        {/* if this.state.loading is true, show the spinner */}
        Sort By
          <select onChange={this.handleChange}>
            <option value="quote">quote</option>
            <option value="character">character</option>
          </select>
          <input onChange={this.handleInputChange}/>
          {this.state.loading && <Spinner />}
          {/* we now only want to display quotes after they have been filtered */}
          {filteredQuotes.map(quote => <div key={quote.quote}>
            <p>{quote.character}</p>
            <img src={quote.image} alt="character" />
            <p>{quote.quote}</p>
          </div>)}
        </>
      );
  }
}