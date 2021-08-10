import Cookies from 'js-cookie';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import GithubIcon from '../assets/GithubIcon';
// eslint-disable-next-line
import GoogleIcon from '../assets/GoogleIcon';
import Navbar from '../Components/Navbar';
import "./Login.css";


const Field = ({id,type,placeholder,label})=>{
    return (
        <div className="form-field">
        <label htmlFor={id}>{label}</label>
        <input type={type} name="email" id={id} />
    </div>
    )
}

function Login(props) {


    const githubLogin = ()=>{
        window.location=`https://github.com/login/oauth/authorize?client_id=554f1ed9afd292a68dc1&redirect_uri=http://localhost:5000/github/callback`;
    }

    const history = useHistory();

    React.useEffect(()=>{
        if(props.token){
            Cookies.set('AUTH_TOKEN',props.token);
            history.push('/');


            
        }
    },
    // eslint-disable-next-line
    [])
    return (
        <div className="login">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome Dev Community-Clone 🖥 🤓</title>
            </Helmet>
            <Navbar/>
            <div className="login__layout">
            <div className="login__card">
                <div className="login__card__content">
                    <h1 className="reg__title">Welome to Dev Community</h1>
                    <p><a href="/">Dev Community</a> is a community of 670,771 amazing developers</p>
                </div>
                <div className="login__actions">
                    <div className="login__providers">
                        <button className="btn github_btn" onClick={githubLogin}><GithubIcon/> Sign Up with Github</button>
                        {/* <button className="btn google_btn"><GoogleIcon/> Sign Up with Google</button> */}
                    </div>
                </div>
                <div className="login__hr">
                    <span>Have a password? Continue with your email address</span>
                </div>
                <form action="/">
                   <Field type={"text"} id={"email"} label="Email"/>
                   <Field type={"password"} id={"pass"} label="Password"/>
                   <div className="rembember-field">
                       <input type="checkbox" name="remember" id="remember" />
                       <label htmlFor="remember">Remember me</label>
                   </div>
                   <input type="submit" value="Continue" />
                </form>
                <p className="forgot_password">
                    <a href="/">I forgot password</a>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Login
