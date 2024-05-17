import React, { useState } from 'react';
//USESTATE
function User(props) {
   
   
   const [userInfo,setUser]=useState(  [{"first_name":"Antonio","last_name":"Nazareth","email":"anazareth0@elpais.com"},
   {"first_name":"Ame","last_name":"Vossgen","email":"avossgen1@edublogs.org"},
   {"first_name":"Nicolis","last_name":"Zink","email":"nzink2@xinhuanet.com"},
   {"first_name":"Cele","last_name":"Rosedale","email":"crosedale3@stumbleupon.com"},
   {"first_name":"Eveline","last_name":"Hinkins","email":"ehinkins4@tamu.edu"}])

    return (
        <div>
            <h1>userInfo</h1>
            {
                userInfo.map(user=>{
                    return(
                    <ul>
                        <li>{user.first_name}</li>
                        <li>{user.last_name}</li>
                        <li>{user.email}</li>


                    </ul>)

                })
            }
           
            
        </div>
    );
}

export default User;