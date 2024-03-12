import React, { useEffect, useState } from 'react'
import { UseAuth } from '../Contexts/CustomHook';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const [Formdata, setformdata] = useState({
        name : '',
        email: '',
        password: ''
    })
    const {SetUser} = UseAuth();

    const HandleSignup = async(e) => {
        e.preventDefault()
        try {
            if(!Formdata.password ||!Formdata.email || !!Formdata.name ){
                alert("empty");
            }
            // /check-login
            const response = await fetch('http://localhost:8001/api/v1/user/Signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name  : Formdata.name ,
                    email : Formdata.email , 
                    password : Formdata.password
                }),
              })
              const data = await response.json();
              console.log(data)
              SetUser(data?.success)

        } catch (error) {
            console.log(error)
        }
    }
    const HandleInput = (field, value) => {
     setformdata((prev)=>({...prev , [field] : value}));
    }
   
    return (
        <div className='LOGINForm'>
            <div className="form">
                <form method="post" onSubmit={HandleSignup}>
                    <center>
                    <h1 style={{marginTop:'25px'}}>Signup to Linkify</h1>
                    </center>
                        <input type="text" className='in-signup' placeholder='Name' name='name' value={Formdata.name} onChange={(e)=>HandleInput('name',e.target.value)} /> 
                        <input type="text" className='in-signup' placeholder='Email' name='email' value={Formdata.email} onChange={(e)=>HandleInput('email',e.target.value)} /> 
                        <input type="password" className='in-signup' placeholder='Password' name='password' value={Formdata.password} onChange={(e)=>HandleInput('password',e.target.value)} />
                    <button type="submit">Signup</button>
                    <NavLink to={"/login"}>Already Have Account ? Login ?</NavLink>
                </form>
        </div>
        </div>
    )
}

export default Signup
