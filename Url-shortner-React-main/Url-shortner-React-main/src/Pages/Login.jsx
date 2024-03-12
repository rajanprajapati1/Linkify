import React, { useEffect, useState } from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;
import { UseAuth } from '../Contexts/CustomHook'; 
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [Formdata, setformdata] = useState({
        email: '',
        password: ''
    })
    const { SetUser ,Loading , SetLoading} = UseAuth();

    const HandleLogin = async (e) => {
        e.preventDefault()
        try {
            SetLoading(true)
            const response = await axios.post('http://localhost:8001/api/v1/user/login', {
                email: Formdata.email,
                password: Formdata.password
            }, {
                withCredentials: true
            });
           setTimeout(() => {
            console.log(response?.data)
            SetUser(response?.data?.success)
            localStorage.setItem('user', JSON.stringify(response?.data?.username))
            localStorage.setItem('email', JSON.stringify(response?.data?.email))
            localStorage.setItem('token', JSON.stringify(response?.data?.token))
            setformdata({
                email: '',
                password: ''
            })
            SetLoading(false)
           }, 2000);
        } catch (error) {
            console.log(error)
        }
    }
    const HandleInput = (field, value) => {
        setformdata((prev) => ({ ...prev, [field]: value }));
    }

    return (
        <>
        <div className='LOGINForm'>
            <div className="form">
                <form method="post" onSubmit={HandleLogin}>
                    <center><h1>Welcome</h1></center>
                    <center>
                        <h1>Login To Linkify</h1>
                    </center>
                    <input type="text" placeholder='Email' name='email' value={Formdata.email} onChange={(e) => HandleInput('email', e.target.value)} /> <br />
                    <input type="password" placeholder='Password' name='password' value={Formdata.password} onChange={(e) => HandleInput('password', e.target.value)} />
                    <small>Forget Password ?</small>
                    <button type="submit">Login</button>
                    <NavLink to={"/signup"}>Dont Have Account ? Click here To Create New Account ?</NavLink>
                    <br />
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
