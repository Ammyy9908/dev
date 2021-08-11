import React from 'react';
import { connect } from 'react-redux';
import "./Aside.css"


function ListCard({title,category}){
    return (
        <a href="/">
            <div className="card--title">{title}</div>
            <div className="list-type">{category}</div>
        </a>
    )
}


function Section({title,listings}){
    return (
<section className="listings-section">
                <div className="section-header">
                    <h3>{title}</h3>
                   {title==="Listings"&& <div className="see_all">
                        <a href="/">See all</a>
                       
                    </div>}
                </div>
                

                    <div className="list-cards">
                            
                           {
                               listings && listings.slice(0,6).map((listing,i)=>{
                                   return <ListCard title={listing.title} category={listing.category}/>
                               })
                           }
                        </div>
            </section>
    )
}
function Aside(props) {
    return (
        <div className="aside">
            <Section title="Listings" listings={props.listings}/>
          
        </div>
    )
}


const mapStateToProps = (state)=>({
    listings:state.appReducer.listings
})

export default connect(mapStateToProps,null)(Aside)
