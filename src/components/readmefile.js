import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import '../styles/readme_body.css'
import 'github-markdown-css/github-markdown-light.css';
import 'aos/dist/aos.css';


export default function ReadMeBody() {
  const {repoName} = useParams();
  const [readme, setReadme] = useState('');

  useEffect(() => {
    Aos.init({duration:1000})
    axios
      .get(`https://api.github.com/repos/tr-sudo/${repoName}/readme`, {
        headers: {
          Accept: 'application/vnd.github+json'
        }
      })
      .then(response => {
        const decodedContent = atob(response.data.content);
        setReadme(decodedContent);
      })
      .catch(error => {
        console.log(error);
      });
  }, [repoName]);

  return (
    <div className='Readme_body' data-aos="fade-up">
        <ReactMarkdown children={readme} className='markdown-body'/>
    </div>
  );
}
