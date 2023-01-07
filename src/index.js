import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./routes/app.js"
import ProjectBody from './routes/project_page'
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/projects' element={<ProjectBody/>}/>
        <Route path='/Home' element={<App/>}/>
        <Route path='/Contact' element={<App/>}/>
      </Routes>
  </BrowserRouter>
  <Footer>
    <Footer/>
  </Footer>
  </React.StrictMode>
);