import React, { Component } from 'react';

class Login extends Component {
    constructor()
    {
        super()
        this.state={name:'ravi'}
       // this.setName=this.setName.bind(this)

    }
    setName(_name)
    {
        console.log("this",this)
        this.setState({name:'ravi'})
    }
    render() {
        return (
            <div>
              {this.state.name}  
              <button onClick={this.setName('ram')}>click me</button>
            </div>
        );
    }
}

export default Login;