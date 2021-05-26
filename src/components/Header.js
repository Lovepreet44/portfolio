import React from 'react';
import Typed from 'react-typed';

//import Particles from 'react-particles-js';
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
            <h1>this is header section here...</h1>
            <Typed
            className="type-text"
            strings={["Web design","Web development","SEO","Marketing","Many more languages"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            
            </div>    
        </div>
    )
}

export default Header

