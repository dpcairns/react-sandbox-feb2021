import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
        <header>
            <NavLink exact activeClassName="selected" to="/">
                Home
                </NavLink>
            {
                this.props.location.pathname !== '/search' 
                    && <NavLink exact activeClassName="selected" to="/search">
                    Search
                </NavLink>
            }
            {/* if the page we're on happens to be the search page, also render this link */}
            {
               this.props.location.pathname === '/search' && <a href="https://google.com">Google</a>
            }
        </header>
        )
    }
})