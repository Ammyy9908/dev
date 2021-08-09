import React from 'react'
// eslint-disable-next-line
import { useHistory } from 'react-router-dom';
import GithubIcon from '../assets/GithubIcon';
// eslint-disable-next-line
import GoogleIcon from '../assets/GoogleIcon';
import Navbar from '../Components/Navbar';
import "./Register.css"

function Register() {
  
    return (
        <div className="register">
            <Navbar/>
            <div className="register__layout">
            <div className="register__card">
                <div className="register__card__content">
                    <h1 className="reg__title">Welome to Dev Community</h1>
                    <p><a href="/">Dev Community</a> is a community of 670,771 amazing developers</p>
                </div>
                <div className="register__actions">
                    <div className="register__providers">
                        <button className="btn github_btn"><GithubIcon/> Sign Up with Github</button>
                        {/* <button className="btn google_btn"><GoogleIcon/> Sign Up with Google</button> */}
                    </div>
                </div>
                <div className="register__hr">
                    <span>Already have an account? <a href="/login">Login</a></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register
