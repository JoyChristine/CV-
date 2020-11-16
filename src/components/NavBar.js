import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link' 

export default class NavBar extends Component {
    render() {
        return ( 
            <>
            <nav className="light-gray bg-darken-3">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="logo">
                            CV
                        </Link>
                        <Link to="/" data-target="side-nav" className="sidenav-trigger"><i className=""></i></Link>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}