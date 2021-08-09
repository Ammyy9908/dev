import React from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import "./SignOutConfirm.css"

function SignOutConfirm() {
    const history = useHistory();

    const logout = ()=>{
        history.push('/');
    }
    return (
        <div className="confirm-logout">
            <Navbar/>
            <div className="confirm-logout-wrapper">
                <h1>Are you sure you want to sign out?</h1>
                <button onClick={logout}>Yes,sign out</button>
            </div>
        </div>
    )
}

export default SignOutConfirm
