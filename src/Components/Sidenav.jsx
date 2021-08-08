import React from 'react'
import Home from "../assets/Home";
import ReadIcon from "../assets/ReadIcon";
import ListIcon from "../assets/ListIcon";
import PodCastIcon from "../assets/PodCastIcon";
import VideoIcon from "../assets/VideoIcon";
import FAQ from "../assets/FAQ";
import DevShopIcon from "../assets/DevShopIcon";
import SponserIcon from "../assets/SponserIcon";
import AboutIcon from "../assets/AboutIcon";
import ContactIcon from "../assets/ContactIcon";
import LikeIcon from "../assets/LikeIcon";
import PrivacyIcon from "../assets/PrivacyIcon";
import TermIcon from "../assets/TermIcon";
//DevShopIcon
//SponserIcon
//AboutIcon
//ContactIcon
//LikeIcon
//PrivacyIcon
//TermIcon
import "./Sidenav.css"
import TwitterIcon from '../assets/TwitterIcon';
import FacebookIcon from '../assets/FacebookIcon';
import GithubIcon from '../assets/GithubIcon';
import InstagramIcon from '../assets/InstagramIcon';
import TwitchIcon from '../assets/TwitchIcon';
import SettingIcon from '../assets/SettingIcon';
//FacebookIcon

const List = ({title,Icon})=>{
    return(
        <li><a href="/"><Icon/> {title}</a></li>
    )
}

const Tag = ({title})=>{
    return (
        <div className="tag-list">
            <a href="/">/{title}</a>
        </div>
    )
}

function Sidenav() {

    const options = [
        {
            title:"Home",
            icon:Home
        },
        {
            title:"Reading List",
            icon:ReadIcon
        },
        {
            title:"Listings",
            icon:ListIcon
        },
        {
            title:"Podcats",
            icon:PodCastIcon
        },
        {
            title:"Videos",
            icon:VideoIcon
        },
        {
            title:"FAQ",
            icon:FAQ
        },
        {
            title:"DEV Shop",
            icon:DevShopIcon
        },
        {
            title:"Sponsors",
            icon:SponserIcon
        },
        {
            title:"About",
            icon:AboutIcon
        },
        {
            title:"Contact",
            icon:ContactIcon
        },
    ]

    const otherOptions = [
        {
            title:"Code of conduct",
            icon:LikeIcon
        },
        {
            title:"Privacy Policy",
            icon:PrivacyIcon
        },
        {
            title:"Terms of use",
            icon:TermIcon
        },
        
    ]
    return (
        <div className="sidenav">
            <nav className="top__sidenav">
                <h2>Dev community</h2>
                <ul>
                   {
                       options.map((option,i)=>{
                           return <List title={option.title} Icon={option.icon}/>
                       })
                   }
                </ul>
            </nav>
            <nav className="middle__sidenav">
                <h2>Other</h2>
                <ul>
                   {
                       otherOptions.map((option,i)=>{
                           return <List title={option.title} Icon={option.icon}/>
                       })
                   }
                </ul>
            </nav>

            <div className="social__links">
                <a href="/"><TwitterIcon/></a>
                <a href="/"><FacebookIcon/></a>
                <a href="/"><GithubIcon/></a>
                <a href="/"><InstagramIcon/></a>
                <a href="/"><TwitchIcon/></a>
            </div>

            <div className="bottom__sidenav">
                <header>
                    <h3>My Tags</h3>
                    <a href="/"><SettingIcon/></a>
                </header>

                <div className="my__tags">
                   <Tag title="Web Development"/>
                   <Tag title="CSS"/>
                   <Tag title="ReactJS"/>
                   <Tag title="python"/>
                   <Tag title="Web Development"/>
                   <Tag title="CSS"/>
                   <Tag title="ReactJS"/>
                   <Tag title="python"/>
                   <Tag title="Web Development"/>
                   <Tag title="CSS"/>
                   <Tag title="ReactJS"/>
                   <Tag title="python"/>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
