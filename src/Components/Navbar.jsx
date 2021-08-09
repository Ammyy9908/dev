import React from 'react'
import "./Navbar.css";
import Chat from "../assets/Chat";
import Bell from "../assets/Bell";
import Logo from '../assets/Logo';
import { connect } from 'react-redux';
import { setDrop } from '../redux/actions/_appActions';
import { Link, useHistory } from 'react-router-dom';

function IconButton({Icon}){
    return(
        <button className="icon_btn"><Icon/></button>
    )
}

function Navbar(props) {

    const handleDrodpwn = (e)=>{
        if(e.target.classList.contains("user__nav__avatar")){
            props.setDrop(!props.dropdown)
        }
    }
    const history = useHistory();
    const regNav = ()=>{
        history.push('/register');
    }

    const loginNav = ()=>{
        history.push('/login');
    }
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <a href="/" className="site__logo">
                        <Logo/>
                    </a>
                    <div className="navbar__search">
                        <form action="">
                            <input type="text" placeholder="Search..."/>
                        </form>
                    </div>
                </div>
                <div className="header__right">
                    <div className="nav__auth__buttons">
                        <button onClick={loginNav}>Log in</button>
                        <button onClick={regNav}>Create account</button>
                    </div>
                    {props.user && <><button className="create_post">Create Post</button>
                    <IconButton Icon={Chat}/>
                    <IconButton Icon={Bell}/>
                    <div className="user__nav__avatar" onClick={handleDrodpwn}>
                    {props.dropdown &&<div className="dropdown">
                          <div className="drop__header">
                              <Link to="/profile"><h3>Sumit Bighaniya</h3></Link>
                              <span>@sammy786</span>
                          </div>
                          <div className="dropdown__body">
                              <a href="/">Dashboard</a>
                              <a href="/">Create a post</a>
                              <a href="/">Reading list</a>
                              <a href="/">Settings</a>
                              <hr />
                              <a href="/signout-confirm">Logout</a>
                          </div>
                      </div>}
                    </div>
                    </>}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    setDrop:(dropdown)=>dispatch(setDrop(dropdown))
})

const mapStateToProps = (state)=>({
    dropdown:state.appReducer.isDrop,
    user:state.appReducer.user
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
