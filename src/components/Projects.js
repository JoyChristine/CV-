import React, { Component } from 'react'
import tom from '../components/img/tom.jpg';
export default class Projects extends Component {
    render() {
        return ( 
        <div>
            <div className="card-panel">
            <div class="row ">
                <div class="col s4">
                <img className="activator"src={tom} style={{width: '90%'}} alt="Profilepic" />
                <span className="dark-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum quas totam ipsum sit placeat ipsa saepe asperiores culpa reiciendis quaerat, qui veniam commodi fugit. Laboriosam nisi incidunt aliquam fuga.</span>
                </div>
                <div class="col s4">
                <img className="activator"src={tom} style={{width: '90%'}}alt="Profilepic" />
                <span className="black-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quidem quos optio, dolore provident in quam architecto voluptas nisi iure reiciendis excepturi vel cupiditate nam quia aperiam odit unde debitis.</span>
                </div>
                <div class="col s4">
                <img className="activator"src={tom} style={{width: '90%'}}alt="Profilepic" />
                <span className="dark-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, itaque praesentium officiis harum eum odio vitae fugiat delectus culpa eos cumque ut, odit labore eaque fuga amet ipsa, repudiandae quos.</span>
                </div>
            </div>
            </div>
           


        </div>)
        }
    }