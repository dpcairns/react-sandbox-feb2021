import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <header>
                      <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                      <NavLink exact activeClassName="selected"
                      to="/search">Search</NavLink>
                  </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
                <footer>
                    Contact info goes here
                </footer>
            </div>
        )
    }
}