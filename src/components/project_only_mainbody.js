import '../styles/project_card_only.css';
import {db} from '../firebase-config';
import {collection, getDocs} from "firebase/firestore";
import React, { useEffect } from "react"
import Card from './project_card';
import Skills from './skills';
import Aos from 'aos';



export default function Project_MainBody(){

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
            {project.map(project=><Card key={project.id} name={project.data.Name} description={project.data.Description} img={project.data.Img} Link={project.data.link} dependencies={project.data.dependencies} alive={project.data.running}/>)}
            </div>
                 
        </main>        
    )
}
