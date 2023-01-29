import { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom'

export default function Nav(){
    const [display, setDisplay] = useState('block');

    function toggle() {
        const deployed_nav = document.querySelector('.navbar>ul>.deployed_nav');
        const project_nav = document.querySelector('.navbar>ul>.project_nav');
        const controller_nav = document.querySelector('.navbar>ul>.controller_nav');
        const home_nav = document.querySelector('.navbar>ul>li');
        if (display === 'block') {
            deployed_nav.style.display = 'block';
            project_nav.style.display = 'block';
            controller_nav.style.display = 'none';
            home_nav.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            setDisplay('none');
        } else {
            deployed_nav.style.display = 'none';
            project_nav.style.display = 'none';
            controller_nav.style.display = 'block';
            setDisplay('block');
        }
    }

    return (
        <div>
            <div className='accentColor'></div>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className='controller_nav' onClick={() => { toggle() }} style={{ display: 'block' }}><a>Projects</a></li>
                    <li className='deployed_nav'><Link to="/Deployed">Deployed</Link></li>
                    <li className='project_nav'><Link to="/Projects">All Projects</Link></li>
                    <li className='contact_button'><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}