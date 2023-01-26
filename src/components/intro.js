import '../styles/startpage.css';
import React, { useEffect } from "react"


export default function Intro(){  
  function toLinkedin(){
    window.location.href="https://www.linkedin.com/in/talha-rashid-489tr/"
  }
  function toGithub(){
    window.location.href="https://github.com/TR-Sudo"
  }
  function toResume(){
    window.location.href="https://firebasestorage.googleapis.com/v0/b/rashid-swebsite.appspot.com/o/Talha%20Al%20Rashid's%20Resume.pdf?alt=media&token=7916e24a-c790-4b1a-853e-2e6090b4a69c"
  }
  const [msg,setMsg]=React.useState([])
  
  useEffect(()=>{
    var animatedDiv = document.querySelector('.arrow');
    window.addEventListener('scroll', (e)=>{
          if (window.scrollY > 30) {
            animatedDiv.style.opacity = 0;
          }
          else{
            animatedDiv.style.opacity=1;
          }
      });
  },[])

  return (
    <div className="StartPage">
      <h1 className="IntroText">Welcome 🖥️</h1>
      <h1 className="IntroMsg">Hello, and welcome to my website! My name is <a>Talha Al Rashid</a> and I'm a <a className='SDE'>Software Development Engineer</a>, and I'm glad you're here. If you have any questions, feel free to contact me. Take a look around and let me know what you think. I hope you enjoy your visit</h1>
      <div className='Icons'>
          <a><img src='../images/resume.png' onClick={toResume} alt="Resume"></img></a>
          <img className='GithubIcon' onClick={toGithub} src='../images/github.png' href="https://github.com/TR-Sudo" alt="Github"/>
          <img className="LinkedinIcon" onClick={toLinkedin} src='../images/linkedin.png' href="https://www.linkedin.com/in/talha-rashid-489tr/" alt="Linkedin"/>
      </div>
      <div className='arrow'><i class="fa fa-angle-down fa-3x" aria-hidden="true"></i></div>
    </div>
  );
}
 