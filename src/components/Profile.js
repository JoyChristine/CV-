import React, { Component } from 'react'
import tom from '../components/img/tom.jpg';
import { HashLink as Link } from 'react-router-hash-link';

import css from '../App.css';
export default class Profile extends Component {
    render() {
        return ( 
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator "src={tom} alt="Profilepic" />
                        <Link className="btn-floating halfway-fab waves-effect waves-light-red">
                            <i className="material-icons activator fab-backdrop">jj</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">YOUR NAME</span>
                        <span className="card-title activator grey-text text-darken-4">Occupation</span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text-darken-2">
                            follow
                            <i className="material-icons right fab fa-twitter"></i>
                            {/* <Link className="btn-floating-right">
                            <i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i>
                        </Link> */}
                        </span>
                    
                        <div className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</div>
                    </div>
                </div>
   
             
            
            </div>
        );
    }
}