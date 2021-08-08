import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from '../Components/Article'
import Aside from '../Components/Aside'
import Navbar from '../Components/Navbar'
import Sidenav from '../Components/Sidenav'
import { setTab } from '../redux/actions/_appActions'
import "./Home.css"

function Container({children}){
    return (
        <div className="container">{children}</div>
    )
}

function Home(props) {
    console.log(props)
    if(props.type){
        props.setTab(props.type);
    }
    else{
        props.setTab(null);
    }
    return (
        <div className="home">
            <Navbar/>

            <Container>
                <div className="home__body">
                    <div className="left__aside">
                        <Sidenav/>
                    </div>
                    <div className="posts__container">
                        <header>
                            <h1>Posts</h1>
                            <nav>
                                <ul>
                                    <li><Link to="/" className={props.activeTab==null && "active__tab"}>Feed</Link></li>
                                    <li><Link to="/top/week" className={props.activeTab==="week" && "active__tab"}>Week</Link></li>
                                    <li><Link to="/top/month" className={props.activeTab==="month" && "active__tab"}>Month</Link></li>
                                    <li><Link to="/top/year" className={props.activeTab==="year" && "active__tab"}>Year</Link></li>
                                    <li><Link to="/top/infinity" className={props.activeTab==="infinity" && "active__tab"}>Infinity</Link></li>
                                    <li><Link to="/top/latest" className={props.activeTab==="latest" && "active__tab"}>Latest</Link></li>
                                </ul>
                            </nav>
                        </header>
                        <div className="home__feeds">
                            <div className="rendered__feeds">
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                                <Article/>
                            </div>
                        </div>
                    </div>
                    <div className="right__aside">
                    <Aside/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state)=>({
    user:state.appReducer.user,
    activeTab:state.appReducer.activeTab
})

const mapDispatchToProps = (dispatch)=>({
    setTab:(activeTab)=>dispatch(setTab(activeTab))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
