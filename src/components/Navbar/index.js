import React from 'react'

const index = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container container">
                <input type="checkbox" name id />
                <div className="hamburger-lines">
                    <span className="line line1" />
                    <span className="line line2" />
                    <span className="line line3" />
                </div>
                <ul className="menu-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#food">Menu</a></li>
                    <li><a href="#team___id">Team</a></li>

                </ul>
                <h1 className="logo">Eat Well</h1>
                </div>
            </nav>
            <section className="showcase-area" id="showcase">
                <div className="showcase-container">
                <h2 className="main-title" id="home">Selamat datang di Eat Well Restaurant</h2>
                <a href="#food" className="btn btn-primary">Menu</a>
                </div>
            </section>
        </div>
    )
}

export default index