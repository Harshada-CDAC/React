import React from 'react';

function User(props) {
    console.log("props",props)
    return (

        <div>
         {props.name} 
         {props.address}  
        </div>
    );
}

export default User;