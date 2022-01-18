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
                        <li className='about'><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav