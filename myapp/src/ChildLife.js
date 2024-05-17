//[3/17 1:55 PM] 3RI Technologies
import React, { Component} from 'react';
import ChidDemo from './ChidDemo';
//import Child from './Child';
 
class ChildLife extends Component {
    constructor(props){
        console.log("Child loading constructor")
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
        console.log("Child loading componentDidMount")
    }
    render() {
        console.log("Child render loading")
        return (
            <div>
                <ChidDemo greetHandler={this.greetParent}></ChidDemo>
            </div>
        );
    }
}
 
export default ChildLife;