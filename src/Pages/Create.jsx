import React from 'react'
import CloseIcon from '../assets/CloseIcon'
import Logo from '../assets/Logo'
import "./Create.css"
function Create() {
    return (
        <div>
            <div className="create__header">
                <div className="header__left">
                <span className="form__logo">
                    <a href="/">
                        <Logo/>
                    </a>
                </span>
                <h3>Create Post</h3>
                </div>

                <nav className="header__nav">
                    <ul>
                        <li><button className="active_form_tab">Edit</button></li>
                        <li><button>Preview</button></li>
                    </ul>
                </nav>

                <div className="close__create__form">
                    <button>
                        <CloseIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Create
