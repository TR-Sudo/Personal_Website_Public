import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./routes/home.js"
import ProjectBody from './routes/project_page'
import Deployed_ProjectBody from './routes/deployed_projects'
import Footer from './components/footer';
import Navbar from './components/Navbar'
import Contact_Body from './routes/contact';
import Background from './components/background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Background/><Navbar/><Home/><Footer/></div>}/>
        <Route path='/projects' element={<div><Background/><Navbar/><ProjectBody/><Footer/></div>}/>
        <Route path='/Deployed' element={<div><Background/><Navbar/><Deployed_ProjectBody/><Footer/></div>}/>
        <Route path='/Home' element={<div><Background/><Navbar/><Home/><Footer/></div>}/>
        <Route path='/Contact' element={<div><Background/><Navbar/><Contact_Body/></div>}/>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);