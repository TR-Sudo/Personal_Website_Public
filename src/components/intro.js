import '../styles/startpage.css';
import React, { useEffect } from "react"
import {db} from '../firebase-config';
import {collection, getDocs} from "firebase/firestore";


export default function Intro(){  
  function toLinkedin(){
    window.location.href="https://www.linkedin.com/in/talha-rashid-489tr/"
  }
  function toGithub(){
    window.location.href="https://github.com/TR-Sudo"
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
    getIntro()    
  },[])

  function getIntro(){
    const collectionref=collection(db,'intro')
    getDocs(collectionref)
      .then(res=>{
        const docArr= res.docs.map(doc=>({
          data: doc.data(),
          id: doc.id}))
          setMsg(docArr)
      }).catch(e=>console.log(e.message))
  }

  return (
    <div className="StartPage">
      {msg.map(msg=><h1 key={msg.id} className="IntroText">{msg.data.IntroText}</h1>)}
      {msg.map(msg=><h1 key={msg.id} className="IntroMsg">{msg.data.IntroMsg}</h1>)}
      <div className='Icons'>
          {msg.map(msg=><a key={msg.id} href={msg.data.resume}><img src='../images/resume.png' alt="Resume"></img></a>)}
          <img className="LinkedinIcon" onClick={toLinkedin} src='../images/linkedin.png' href="https://www.linkedin.com/in/talha-rashid-489tr/" alt="Linkedin"/>
          <img className='GithubIcon' onClick={toGithub} src='../images/github.png' href="https://github.com/TR-Sudo" alt="Github"/>
      </div>
      <div className='arrow'><i class="fa fa-angle-up fa-4x" aria-hidden="true"></i></div>
    </div>
  );
}
