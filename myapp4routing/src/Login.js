import React, {useState} from 'react';

function Login(props) {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const onChangeName=(event)=>{
        console.log("name",event.target.name)
        setName(event.target.value)

    }
   const onChangePasword=(event)=>{
    console.log("password",event.target.value)
    setPassword(event.target.value)
    }
    const submitFormData=(event)=>{
        console.log("name",name)
        console.log("password",password)
        event.preventDefault()

    }
    return (
        <div>
             <form onSubmit={submitFormData}>
                 <div>
                    <label>Enter Username</label>
                    <input value={name} onChange={onChangeName} placeholder="Enter your name"></input>
                </div>

                <div>
                    <label>Enter Password</label>
                    <input value={password} onChange={onChangePasword} placeholder="Enter Password"></input>
                </div>

            <button type='submit'>Submit</button>

            </form>
            
        </div>
    );
}

export default Login;