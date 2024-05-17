import React, { Component } from 'react';
import ChidDemo from './ChidDemo';

class ParentDemo extends Component {
    constructor()
    {
        super()
        this.state={
            parentName:'parent'
        }
    this.greetParent=this.greetParent.bind(this)
    }
    greetParent()
    {
        console.log("this",this)
        alert('this')

       // console.log("greetParent",this.state.parentName)
    }
    greetParentName()
    {
        console.log("this",this)
        alert('this')

       // console.log("greetParent",this.state.parentName)
    }
    render() {
        return (
            <div>
                <ChidDemo greetHandler={this.greetParent} greetHandler1={this.greetParentName}></ChidDemo>
        {/* <ChidDemo greetHandler1={this.greetParentName}></ChidDemo> */}
            
        </div>
        );
    }
}

export default ParentDemo;