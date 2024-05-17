import React, { Component } from 'react';

class Register extends Component {
    constructor()
    {
        super();
        this.state={"name":"ravi",address:"pune"}

        console.log("constructor");
    }
    componentDidMount()
    {

    }
    clickMe()
    {
        alert("clicked")
        //this.setState({"name":"raj"})
    }
    render() {
        return (
            <div>
                class Component
                <h1>hello{this.state.name}</h1>
                    <h2>address{this.state.address}</h2>
               <button onClick={this.clickMe()}>click me</button>
            </div>
        );
    }
}

export default Register;