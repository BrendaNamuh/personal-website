import logo from './logo.svg';
import './App.css';
import ScrollNav from './components/ScrollNav';
import Pendulum from './components/Pendulum';
import React, { useState } from 'react';

//To display video demo of project  
const videoSources = [
  "https://raw.githubusercontent.com/BrendaNamuh/personal-website/src/media/visual-ml-demo.mp4",
  "https://raw.githubusercontent.com/BrendaNamuh/personal-website/src/media/genepath-demo.mp4",
  "https://raw.githubusercontent.com/BrendaNamuh/personal-website/src/media/hide-it-demo.mp4",
  '',
  '',
  '',


];
//Re-direct to project webpage or project's repo
const videoLinks = [
  "https://brendanamuh.github.io/Visual-ML/",
  "https://github.com/BrendaNamuh/TravelingSalesman",
  "https://github.com/BrendaNamuh/Hide-It/tree/hide-it-2.0",
  '',
  '',
  ''


];

function App() {
  const [activeLink, setActiveLink] = useState('home'); // State for the active link

  return (
    <>
  <div id='home' className="opening-frame">
  <ScrollNav activeLink={activeLink} setActiveLink={setActiveLink} />
            <div className='main-frame'>
          <Pendulum size={28} />
        <div className='about-me-frame'>
          <div className='main-about-me'>
            Hi, I'm Brenda,<br/> a software engineer currently<br/> based in Montréal, Canada.
          </div>
          <div className='more-about-me'>
          I am interested in building impactful systems that address social and scientific challenges. I’ve previously contributed to the Bagot Lab at McGill University and worked at The Canadian Press. Don't hesitate to reach out—I’d love to connect! 
          <br/><br/><span style={{fontSize:'0.92em'}}>
              <a href="https://raw.githubusercontent.com/BrendaNamuh/personal-website/src/media/CV_BrendaNamuhoranye(2024).pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                CV
              </a>&nbsp;&nbsp; 
              <a href="https://github.com/BrendaNamuh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                GitHub
              </a>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/brenda-namuhoranye-0a0277213/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                LinkedIn
          </a>&nbsp; 
          </span>
          </div>
        
        </div>
    </div>

  </div>

  <div id='projects' className="project-frame">

  <ScrollNav activeLink={activeLink} setActiveLink={setActiveLink} />

        
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
  </div>
    
</>
  );
}

export default App;
