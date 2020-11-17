import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div>
                <div class="card-panel teal pt-2">
                  <b>BIOGRAPHY</b> <br></br>
                    <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    </span>
                    <hr></hr>
                    <div className="card-content">
                        <b>Personal Info</b>
                        <div class="bio row">
                            <div class="col s6">
                                <p><strong>Address:</strong> 123 Lorem</p>
                                <p><strong>Email:</strong> test@yahoo.com</p>
                                <p><strong>Phone:</strong> 123 456 7898</p>
                            </div>
                        <div class="col s6">
                            <p><strong>Address:</strong> 123 Lorem</p>
                            <p><strong>Email:</strong> test@yahoo.com</p>
                            <p><strong>Phone:</strong> 123 456 7898</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
       
        );
    }
}
