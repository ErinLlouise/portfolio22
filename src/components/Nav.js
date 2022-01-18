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
                        <li><a href="#">Item 01</a></li>
                        <li><a href="#">Item 02</a></li>
                        <li><a href="#">Item 03</a></li>
                        <li><a href="#">Item 04</a></li>
                        <li><a href="#">Item 05</a></li>
                        <li><a href="#">Item 06</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav