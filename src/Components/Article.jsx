import React from 'react';
import CommentIcon from '../assets/CommentIcon';
import HeartIcon from '../assets/HeartIcon';
import "./Article.css"
import ReactTimeAgo from 'react-time-ago'

function Article({top,cover,article}) {
    console.log(article)
    return (
        <article className="article">
            <a href="/">Building A Minimal AutoSuggest</a>
            <div role="presentation">
            {top && <a href="/madsstoumann/building-a-minimal-autosuggest-4big" style={{backgroundImage:`url(${cover?cover:"https://source.unsplash.com/random?programmers"})`}} className="article__cover"><span class="hidden">Building A Minimal AutoSuggest</span></a>}

            <div className="article__body">
                <div className="article__body__top">
                    <div className="article__story__meta">
                        <div className="story__author__avatar">
                            <img src={article.user.profile_image_90} alt={article.user.username} />
                        </div>
                        <div className="story__author__meta">
                            <p>{article.user.name}</p>
                            <a href="/"><ReactTimeAgo date={article.published_timestamp} locale="en-US"/></a>
                        </div>
                    </div>
                </div>
                <div className="article__body__main">
                    <h3><a href="/"><span>{article.title}</span></a></h3>
                    <div className="article__tags">
                       
                       

                        {
                            article.tag_list.map((tag,i)=>{
                                return  <a href="/">
                                <span className="tag__prefix">#</span>
                                {tag}
                            </a>
                            })
                        }
                    </div>
                    <div className="article__bottom">
                        <div className="article__details">
                            <a href="/"><HeartIcon/>
                            <span>56 <span>reactions</span></span></a>
                            <a href="/">
                            <CommentIcon/>
                            <span>56 <span>comments</span></span>
                            </a>
                        </div>
                        <div className="story__save">
                            <small>
                                3 min read
                            </small>
                            <button className="save__btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </article>
    )
}

export default Article
