import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseAuth } from '../Contexts/CustomHook'

const Navbar = () => {
    const {User,HandleLogout} = UseAuth()

    return (
        <div className='Navbar'>
            <div className="left">
                <h1>Linkify <img src="https://cdn-icons-png.flaticon.com/512/4906/4906292.png" alt="logo" /> </h1>
            </div>
            <div className="center">
                <ul>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/Hire"}>Hire Me</NavLink>
                    <NavLink to={"/Pricing"}>Pricing</NavLink>
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </ul>
            </div>
            <div className="right">
               {User ? <>
               <img src="https://cdn-icons-png.freepik.com/256/3237/3237472.png" alt="wdwk" />
               <button className='User_btn'  >
                    {JSON.parse(localStorage.getItem('user'))}
                </button>
                <NavLink onClick={HandleLogout}>
                    Logout
                </NavLink> </>  : <> <NavLink  to={"/login"}>
                    Login
                </NavLink>
                <NavLink to="/signup">
                    Signup
                </NavLink> </>}
            </div>
        </div>
    )
}

export default Navbar
