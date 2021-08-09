import React from 'react'
import { connect } from 'react-redux';
import CakeIcon from '../assets/CakeIcon';
import EmailIcon from '../assets/EmailIcon';
import GithubIcon from '../assets/GithubIcon';
import LocationIcon from '../assets/LocationIcon';
import Container from '../Components/Container';
import Navbar from '../Components/Navbar'
import { setDrop } from '../redux/actions/_appActions';
import "./Profile.css"

function Profile(props) {
    React.useEffect(()=>{
        if(props.dropdown){
            props.setDrop(false);
        }
    },[]);
    return (
        <div className="profile">
             <Navbar/>
             <div className="profile__background">
                    <div className="profile__layout">
                        <header className="profile__header">
                            <div className="profile__header__top">
                                <span className="user__avatar__image">
                                    <img src={props.user.avatar_url} alt={props.user.name} />
                                </span>
                                <div className="profile__header__action">
                                    <button>Edit profile</button>
                                </div>
                            </div>
                            <div className="profile__header__details">
                                <h1>{props.user.name}</h1>
                                <p>{props.user.bio}</p>
                                <div className="profile__header__meta">
                                <span className="profile__header__meta__item">
                                        <LocationIcon/>
                                        {props.user.location}
                                    </span>
                                    <span className="profile__header__meta__item">
                                        <CakeIcon/>
                                        Joined on 15 Aug 2020
                                    </span>
                                    <a href={"mailto:"+props.user.email} className="profile__header__meta__item meta__link">
                                        <EmailIcon/>
                                        {props.user.email}
                                    </a>
                                    <a href={props.user.url} className="profile__header__meta__item meta__link">
                                        <GithubIcon/>
                                    </a>
                                </div>
                            </div>
                            <div className="profile__header__bottom">
                                <div className="profile__education">
                                    <strong>Education</strong>
                                    <p>BE ISE</p>
                                </div>
                            </div>
                        </header>
                    </div>
            </div>
             
        </div>
    )
}
const mapStateToProps = (state)=>({
    user:state.appReducer.user,
    // activeTab:state.appReducer.activeTab,
    dropdown:state.appReducer.dropdown
})

const mapDispatchToProps = (dispatch)=>({
    // setTab:(activeTab)=>dispatch(setTab(activeTab)),
    setDrop:(dropdown)=>dispatch(setDrop(dropdown))
})
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
