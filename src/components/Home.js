import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Bio from './Bio';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import NavBar from './NavBar';


export default class Home extends Component {
    render() {
        return (
            <>
            <NavBar />
            <div className="nav_container">
                <div className="row">
                    <div className="col s12 m7 l2">
                        <Profile />
                    </div>
                    <div className="col s12 m8 l9">
                        <Bio />
                        <Education />
                        <Skills />
                        <Experience />
                        <Projects />
                        
                    </div>
                </div>
            </div>
            </>
        );
    }
}