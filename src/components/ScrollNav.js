import React from 'react';
import './ScrollNav.css'; 

const ScrollNav = ({ activeLink, setActiveLink }) => {
    const handleClick = (link) => {
        setActiveLink(link); // Update the active link
        console.log('Active link set to: ', link);
    };

    return (
        <div className='nav-scroll'>
            <a
                href='#home'
                onClick={() => handleClick('home')}
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            >
                Home
            </a>
            <a
                href='#projects'
                onClick={() => handleClick('projects')}
                className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            >
                Latest Projects
            </a>
        </div>
    );
};

export default ScrollNav;
