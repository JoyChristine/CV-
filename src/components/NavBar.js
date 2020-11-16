import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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

                            <Link to="/" data-target="side-nav" className="sidenav-trigger">
                              <i className="fas fa-ellipsis-v"></i>
                            </Link>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/education">
                                    <i className="fas fa-graduation-cap"></i> Education
                                    </Link>
                                    
                                </li><li>
                                    <Link to="/skills">
                                    <i className="fas fa-copy"></i> Skills
                                    </Link>
                                </li><li>
                                    <Link to="/experience">
                                    <i className="fas fa-briefcase"></i> Experience
                                    </Link>
                                </li><li>
                                    <Link to="/projects">
                                    <i className="fas fa-cogs"></i> Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                   </div>
               </nav>
               <ul className="sidenav" id="side-nav">
                   <li>
                        <Link to="/">
                            <i className="fas fa-home"></i> Home
                         </Link>
                    </li>
                    <li>
                        <Link to="/education">
                           <i className="fas fa-graduation-cap"></i> Education
                        </Link>
                    </li> 
                    <li>
                        <Link to="/skills">
                            <i className="fas fa-copy"></i> Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience">
                            <i className="fas fa-briefcase"></i> Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <i className="fas fa-cogs"></i> Projects
                        </Link>
                    </li>
                </ul>
              
            </>
        );
    }
}