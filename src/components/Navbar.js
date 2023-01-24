import { useState } from 'react';
import '../styles/navbar.css';

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
                    <li><a href="Home">Home</a></li>
                    <li className='controller_nav' onClick={() => { toggle() }} style={{ display: 'block' }}><a>Projects</a></li>
                    <li className='deployed_nav'><a href="Deployed">Deployed</a></li>
                    <li className='project_nav'><a href="Projects">All Projects</a></li>
                    <li className='contact_button'><a href="Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}