import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';
import Header from './Header.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
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