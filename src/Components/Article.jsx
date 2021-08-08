import React from 'react';
import CommentIcon from '../assets/CommentIcon';
import HeartIcon from '../assets/HeartIcon';
import "./Article.css"

function Article() {
    return (
        <article className="article">
            <a href="/">Building A Minimal AutoSuggest</a>
            <div role="presentation">
            <a href="/madsstoumann/building-a-minimal-autosuggest-4big" className="article__cover"><span class="hidden">Building A Minimal AutoSuggest</span></a>

            <div className="article__body">
                <div className="article__body__top">
                    <div className="article__story__meta">
                        <div className="story__author__avatar"></div>
                        <div className="story__author__meta">
                            <p>Sumit Bighaniya</p>
                            <a href="/">sammy78639</a>
                        </div>
                    </div>
                </div>
                <div className="article__body__main">
                    <h3><a href="/"><span>Article Title</span></a></h3>
                    <div className="article__tags">
                        <a href="/">
                            <span className="tag__prefix">/</span>
                            Tag 1
                        </a>
                        <a href="/">
                            <span className="tag__prefix">/</span>
                            Tag 1
                        </a>
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
