import React, { Component } from 'react'
import tom from '../components/img/tom.jpg';
export default class Profile extends Component {
    render() {
        return ( 
            <div >
<div className="card">
    <div className="card-image">
        <img className="activator "src={tom} alt="them" />
    </div>
</div>
            
            </div>
        )
    }
}