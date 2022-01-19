import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../styles/nav.css'
import '../styles.css'


function Nav () {
    return (
        <div className='html'>
            <div className='body'>
                <div className='wrapper'>
                    <nav className='flex-nav'>
                        <ul>
                            <li><Link to="/" className='link'>Home</Link></li>
                            <li><Link to="/about" className='link'>About</Link></li>
                            <li><Link to="/projects" className='link'>Projects</Link></li>
                            <li><Link to="/skills" className='link'>Skills</Link></li>
                            <li><Link to="/contact" className='link'>Contact</Link></li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Nav