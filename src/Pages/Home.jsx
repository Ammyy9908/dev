import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from '../Components/Article'
import Aside from '../Components/Aside'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Sidenav from '../Components/Sidenav'
import { appendArticles, setArticles, setDrop, setListings, setPageCount, setTab, setTags } from '../redux/actions/_appActions'
import "./Home.css"



function Home(props) {


    React.useEffect(()=>{
        const getArticles = async ()=>{
            try{
                const r = await axios.get(`https://dev.to/api/articles?page=${props.pageCount}&per_page=30`);
                console.log(r.data);
                return r.data;
            }
            catch(e){
                console.log(e);
            }
        }

        const getListings = async ()=>{
            try{
                const r = await axios.get('https://dev.to/api/listings');
                console.log(r.data);
                return r.data;
            }
            catch(e){
                console.log(e);
            }
        }

        const getTags = async ()=>{
            try{
                const r = await axios.get('https://dev.to/api/tags?per_page=100',{
                    
                });
                console.log(r.data);
                return r.data;
            }
            catch(e){
                console.log(e);
            }
        }

        getArticles().then((articles)=>{
            console.log("Articles",articles);

            props.setArticles(articles);
        })

        getListings().then((listings)=>{
            console.log(listings)
            props.setListings(listings);
        })

        getTags().then((tags)=>{
            console.log(tags)

            props.setTags(tags);
        })
    },[props.activeTab]);

    React.useEffect(()=>{
        if(props.dropdown){
            props.setDrop(false);
        }
    },
    // eslint-disable-next-line
    []);
    
    if(props.type){
        props.setTab(props.type);
    }
    else{
        props.setTab(null);
    }




    //

    const getNextPage = async ()=>{
        try{
            props.setPageCount(props.pageCount+1);
            const r = await axios.get(`https://dev.to/api/articles?page=${props.pageCount+1}&per_page=30`);
            console.log(r.data);
            return r.data;
        }
        catch(e){
            console.log(e);
        }
    }

        const handleScrolling = (e)=>{
            var maxScroll = (e.target.scrollHeight - e.target.offsetHeight);
            var halfScroll = maxScroll/2;

            console.log(maxScroll,halfScroll);
            console.log("current scroll=> ",e.target.scrollTop)

            if(e.target.scrollTop===maxScroll){
                console.log("The scroll comes at half!");
                
                getNextPage().then((nextPageData)=>{
                    console.log("next page data",nextPageData);
                    props.appendArticles(nextPageData);
                })
            }
        }
    return (
        <div className="home">

                <Helmet>
                <meta charSet="utf-8" />
                <title>Dev Community-Clone 🖥 🤓</title>
            </Helmet>
            <Navbar/>

            <Container>
                <div className="home__body" onScroll={handleScrolling}>
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

                                {
                                    props.articles && props.articles.map((article,i)=>{
                                        if(i===0){
                                            return  <Article top={true} cover={article.main_image} article={article}/>
                                        } 
                                        return <Article top={false} article={article}/>
                                    })
                                }
                                
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
    activeTab:state.appReducer.activeTab,
    dropdown:state.appReducer.dropdown,
    articles:state.appReducer.articles,
    pageCount:state.appReducer.pageCount
})

const mapDispatchToProps = (dispatch)=>({
    setTab:(activeTab)=>dispatch(setTab(activeTab)),
    setDrop:(dropdown)=>dispatch(setDrop(dropdown)),
    setArticles:(articles)=>dispatch(setArticles(articles)),
    setListings:(listings)=>dispatch(setListings(listings)),
    setTags:(tags)=>dispatch(setTags(tags)),
    setPageCount:(pageCount)=>dispatch(setPageCount(pageCount)),
    appendArticles:(articles)=>dispatch(appendArticles(articles))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
