//Props
import React from 'react';

function ChidDemo(props) {
    console.log("props",props)
    return (
        <div>
        <button onClick={props.greetHandler}>CallParent</button>    
        </div>
    );
}

export default ChidDemo;