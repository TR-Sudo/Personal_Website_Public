import '../styles/mainbody.css';
import {db} from '../firebase-config';
import {collection, getDocs} from "firebase/firestore";
import React, { useEffect } from "react"
import Card from './project_card';
import Skills from './skills';
import Aos from 'aos';
import {Deployed_Card} from './project_card';



export default function MainBody(){

    const [msg,setMsg]=React.useState([])
    const [project,setProj]=React.useState([])

    useEffect(()=>{
        Aos.init({duration:1000})
        aboutme()
        projects()    
    },[])

    function aboutme(){
        const collectionref=collection(db,'aboutme')
        getDocs(collectionref)
          .then(res=>{
            const docArr= res.docs.map(doc=>({
              data: doc.data(),
              id: doc.id}))
              setMsg(docArr)
          }).catch(e=>console.log(e.message))
    }
    function projects(){
        const collectionref=collection(db,'projects')
        getDocs(collectionref)
          .then(res=>{
            const docArr= res.docs.map(doc=>({
              data: doc.data(),
              id: doc.id}))
              setProj(docArr)
          }).catch(e=>console.log(e.message))
    }

    return(
        <main className='Parent'>
            <Skills />
            <div className='Mainbody' data-aos="fade-up">
            <div className="AboutMe">
                <div className="Text">
                    <h1>Talha Al Rashid</h1>
                    <p className="msg">BS.c Computer Science (Hons) | Software Development Engineer | Adequate understanding of Machine Learning | <a href="https://www.credly.com/badges/12220984-5d31-43f3-a949-1b9df0a57763/public_url">AWS Certified Developer (Certification) </a></p>
                    {msg.map(msg=><p key={msg.id} className="msg">{msg.data.About_Me}</p>)}                    
                    {msg.map(msg=><p key={msg.id} className="msg">{msg.data.Courses}</p>)}
                </div>
            </div>
            <div className="Projects">
            {project.map(project=><Card key={project.id} name={project.data.Name} description={project.data.Description} img={project.data.Img} Link={project.data.link} dependencies={project.data.dependencies} alive={project.data.running} repo={project.data.repo}/>)}
            </div>
            </div>      
        </main>        
    )
}

export function Deployed_Project_MainBody(){

    const [project,setProj]=React.useState([])

    useEffect(()=>{
        Aos.init({duration:1000})
        projects()    
    },[])
    
    function projects(){
        const collectionref=collection(db,'projects')
        getDocs(collectionref)
          .then(res=>{
            const docArr= res.docs.map(doc=>({
              data: doc.data(),
              id: doc.id}))
              setProj(docArr)
          }).catch(e=>console.log(e.message))
    }

    return(
        <main className='ParentBody'>
            <Skills />
            <div className='Mainbody' data-aos="fade-up">
            {project.map(project=><Deployed_Card key={project.id} name={project.data.Name} description={project.data.Description} img={project.data.Img} Link={project.data.link} dependencies={project.data.dependencies} alive={project.data.running} repo={project.data.repo}/>)}
            </div>                 
        </main>        
    )
}