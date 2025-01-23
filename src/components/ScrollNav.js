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
            <div className='external-links'> 
                <a
                    href="https://raw.githubusercontent.com/BrendaNamuh/personal-website/master/src/media/CV_BrendaNamuhoranye(2024)" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => handleClick('cv')}
                    className={`nav-link ${activeLink === 'cv' ? 'active' : ''}`}
                >
                    CV
                </a>
                <a
                    href="https://github.com/BrendaNamuh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => handleClick('github')}
                    className={`nav-link ${activeLink === 'github' ? 'active' : ''}`}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/brenda-namuhoranye-0a0277213/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => handleClick('linkedin')}
                    className={`nav-link ${activeLink === 'linkedin' ? 'active' : ''}`}
                >
                    LinkedIn
                </a>
        </div>
        </div>
    );
};

export default ScrollNav;
