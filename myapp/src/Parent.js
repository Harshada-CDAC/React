import React, { Component } from 'react';
//mport Child from './Child';
import ChildLife from './ChildLife';
 
class Parent extends Component {
    constructor(props){
        console.log("parent loading constructor")
        super(props)
        this.state={
            parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        // alert(`${this.state.parentName}` )
        console.log("greetParent")
    }
    componentDidMount(){
        console.log("parent loading componentDidMount")
    }
    render() {
        console.log("parent render loading")
        return (
            <div>
                <ChildLife></ChildLife>
            </div>
        );
    }
}
 
export default Parent;