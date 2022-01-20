import React from 'react'
import '../styles.css'
import '../styles/home.css'
import HomeAnim from './animations/HomeAnim'
import Nav from './Nav'

function Home () {
    return (
        <>
        {/* <Nav /> */}
        <div className='html'>
            <div className='body home'>
                <div className='wrapper'>
                    {/* first container */}
                    <section className='sectionOne'>
                      <div className='container container_solid'>
                        <div className='title_wrapper'>
                            <h1>ERIN LOUISE
                                <br />
                                DEVELOPER/ DESIGNER/ CREATIVE TECHNOLOGIST
                            </h1>
                            {/* <h1>DEVELOPER/ DESIGNER/ CREATIVE TECHNOLOGIST</h1> */}
                            {/* <HomeAnim /> */}
                        </div>
                      </div>
                    </section>
                    {/* second container */}
                    <section className='sectionTwo'>
                        <div class="container container_image" aria-hidden="true">
                            <div class="title_wrapper">
                            <h1>ERIN LOUISE
                                <br />
                                <span>DEVELOPER/ DESIGNER/ CREATIVE TECHNOLOGIST</span>
                            </h1>
                                {/* <h1>DEVELOPER/ DESIGNER/ CREATIVE TECHNOLOGIST</h1> */}
                            </div>
                        </div>
                        <div className='about'>
                          <h2>ABOUT</h2>
                        </div>
                        <div className='p_container'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              Pharetra sit amet aliquam id. Egestas sed tempus urna et pharetra 
                              pharetra massa. Quisque egestas diam in arcu cursus euismod quis 
                              viverra. Convallis convallis tellus id interdum velit laoreet id. 
                              Facilisi cras fermentum odio eu feugiat pretium nibh. Porttitor 
                              lacus luctus accumsan tortor. Sed turpis tincidunt id aliquet 
                              risus feugiat in. Habitasse platea dictumst quisque sagittis. 
                              Egestas integer eget aliquet nibh praesent tristique magna sit. 
                              Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Vel 
                              pretium lectus quam id leo in vitae.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home