import React, { Component } from 'react';
import { Router } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
     <article>
          <NavBar />
          <div className="row" ></div>
          <div className="col s12 m3 l3" >
            <Profile />  
              </div>  
          
          <div className="col s12 m8 l7">
              <Bio />
              <Education />
              <Skills />
              <Experience />
              <Projects />
          </div>
            
     </article>
        )
    }
}