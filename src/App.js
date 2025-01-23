import logo from './logo.svg';
import './App.css';
import ScrollNav from './components/ScrollNav';
import Pendulum from './components/Pendulum';
import React, { useState } from 'react';

//To display video demo of project  
const videoSources = [
  'https://raw.githubusercontent.com/BrendaNamuh/personal-website/master/src/media/secret_library_demo.mp4',
  "https://raw.githubusercontent.com/BrendaNamuh/personal-website/master/src/media/visual-ml-demo.mp4",
  "https://raw.githubusercontent.com/BrendaNamuh/personal-website/master/src/media/genepath_demo.mp4",
  "https://raw.githubusercontent.com/BrendaNamuh/personal-website/master/src/media/hide-it-demo.mp4",
  
];
//Re-direct to project webpage or project's repo
const videoLinks = [
  "https://brendanamuh.github.io/book-club-app/",
  "https://brendanamuh.github.io/Visual-ML/",
  "https://gene-path-d3bfbe1e5603.herokuapp.com/",
  "https://github.com/BrendaNamuh/Hide-It/tree/hide-it-2.0",
  
];

function App() {
  const [activeLink, setActiveLink] = useState('home'); // State for the active link

  return (
    <>
  <div  className="opening-frame">
  <ScrollNav activeLink={activeLink} setActiveLink={setActiveLink} />
  {/* HOME PAGE */}
    {activeLink === 'home' && (
      <div className='main-frame'>
              <Pendulum size={28} />
            <div className='about-me-frame'>
              <div className='main-about-me'>
                Hi, I'm Brenda,<br/> a software engineer currently<br/> based in Montréal, Canada.<br/>
              </div>
              <div className='more-about-me'>
              I am interested in building impactful systems that address social and scientific challenges. I am currently working at The Canadian Press, where I focus on identifying biases in news stories using NLP and developing other internal tools to support journalists.<br/><br/>Don't hesitate to reach out—I’d love to chat! 
              </div>
            
            </div>
        </div>
    )}
  {/* PROEJECTS PAGE */}

  {activeLink === 'projects' && (
    <div className='video-grid'> 
      {videoSources.map((source,index)=> (
        <a 
        className='video-rectangle' 
        key={`demo_${index}`}
        target="_blank"
        href={videoLinks[index]}
        rel="noopener noreferrer"
        >
          <video
              autoPlay
              loop
              width="100%"
              muted 
          >
          <source src={source} type="video/mp4" />
          Your browser does not support this video tag.
          </video>
        </a>

      ))}
    </div>
  )}
  </div>    
</>
  );
}

export default App;
