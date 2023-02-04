import '../styles/startpage.css';
import React, { useEffect } from "react"


export default function BackToTop(){  
  function backToTop(){
    window.scrollTo(0,0);
  }
  useEffect(()=>{
    var animatedDiv2 = document.querySelector('.backtotop');
    window.addEventListener('scroll', (e)=>{
          if (window.scrollY > 30) {
            animatedDiv2.style.opacity = 1;
          }
          else{
            animatedDiv2.style.opacity=0;
          }
      });
  },[])

  return (
      <div className='backtotop' onClick={backToTop}><i className="fa fa-arrow-up fa-3x" aria-hidden="true"></i></div>
  );
}