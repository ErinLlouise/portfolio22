import React from 'react'
import '../styles.css'
import '../styles/home.css'
import HomeAnim from './animations/HomeAnim'
function Home () {
    return (
        <div className='html'>
            <div className='body home'>
                <div className='wrapper'>
                    <h1>ERIN LOUISE</h1>
                    <HomeAnim />
                </div>
            </div>
        </div>
    )
}

export default Home