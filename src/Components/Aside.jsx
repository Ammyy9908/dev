import React from 'react';
import "./Aside.css"


function ListCard({title}){
    return (
        <a href="/">
            <div className="card--title">{title}</div>
            <div className="list-type">Misc</div>
        </a>
    )
}


function Section({title}){
    return (
<section className="listings-section">
                <div className="section-header">
                    <h3>{title}</h3>
                   {title==="Listings"&& <div className="see_all">
                        <a href="/">See all</a>
                       
                    </div>}
                </div>
                

                    <div className="list-cards">
                            <ListCard title="Heard from a recruiter? Don't know what to do about it? 🤔 ➔ 💰 ➔ 💻"/>
                            <ListCard title="[August 26] 👾 React, REST API, & Express Server Workshop 👾"/>
                            <ListCard title="Walkthrough Wednesday with Lucia Cerchie"/>
                            <ListCard title="Moar Serverless Conference - FREE Ticket Opportunity"/>
                            <ListCard title="Looking for exciting opportunities in AI/ML/Data Science? Try ai-jobs.net 🧠🐱‍💻🤖🚗🚀"/>
                           
                        </div>
            </section>
    )
}
function Aside() {
    return (
        <div className="aside">
            <Section title="Listings"/>
            <Section title="/news"/>
            <Section title="/help"/>
            <Section title="/discuss"/>
            <Section title="/challenges"/>
        </div>
    )
}

export default Aside
