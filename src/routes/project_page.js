import Nav from '../components/Navbar';
import React, { useEffect } from "react"
import MainBody from '../components/mainbody';
import '../styles/mainbody.css';

export default function ProjectBody(){

    useEffect(()=>{
        var skillsDiv=document.querySelector('.Parent>.images')
        var aboutmeDiv=document.querySelector('.Parent>.Mainbody>.AboutMe')
        var projectDiv=document.querySelector(".Parent>.Mainbody")
        var animatedDiv = document.querySelector('.Parent');
        window.addEventListener('load',(e)=>{
            animatedDiv.style.opacity=1;
            skillsDiv.style.display="none";
            aboutmeDiv.style.display="none";
            projectDiv.style.width="95%";
            projectDiv.style.marginTop="6%";
        })
        window.addEventListener('scroll', (e)=>{
            if (window.scrollY > 100) {
                animatedDiv.style.opacity = 1;
              }
              else{
                  animatedDiv.style.opacity=1;
            }
        });
    },[])


    return(
        <main>
            <Nav />
            <MainBody/>
        </main>
    )
}