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
import DetailPage from './DetailPage.js';

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
                            component={HomePage} 
                        />
                        <Route 
                            path="/pokemon" 
                            exact
                            component={SearchPage} 
                        />                        
                        <Route 
                            path="/pokemon/:pokemonName" 
                            exact
                            component={DetailPage} 
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