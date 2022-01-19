import React from 'react'
//local files css
import '../styles/nav.css'
//global file css
import '../styles.css'

function Nav () {
    return (
        <div className='html'>
            <div className='body'>
                <div className='wrapper'>
                    <nav className='flex-nav'>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="skills">Skills</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav