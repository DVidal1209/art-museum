import React from 'react'
import './home.css'

export default function Home() {
  return (
    <>
      <section id='hero'>
        <h1>Thought provoking text</h1>
      </section>

      <section id='home-content'>
        <div className='m-b-l' id='features'>
          <div className='feature'>
            <h2 className='feature-title'>Your Museum</h2>
            <h4 className='feature-description'>Your place to express yourself creatively</h4>
          </div>

          <div className='feature'>
            <h2 className='feature-title'>Your Exhibits</h2>
            <h4 className='feature-description'>A themed section for your art</h4>
          </div>

          <div className='feature'>
            <h2 className='feature-title'>The Plaza</h2>
            <h4 className='feature-description'>Discover other artists</h4>
          </div>
        </div>

        <div className='feature-display m-b-m right'>
          <div className='display-image'>
          </div>

          <div className='display-info'>
            <h2 className='display-title'>Museums</h2>
            <h4 className='display-description'>Your museum is your personal page. It is where you can express yourself creatively and share your art with the world.</h4>
          </div>
        </div>

        <div className='feature-display m-b-m left'>
          <div className='display-info'>
            <h2 className='display-title'>Exhibits</h2>
            <h4 className='display-description'>Experimenting with a new style or enjoy swapping between certain themes? Put related pieces in an exhibit within your museum!</h4>
          </div>
          
          <div className='display-image'>
          </div>
        </div>

        <div className='feature-display m-b-m right'>
          <div className='display-image'>
          </div>

          <div className='display-info'>
            <h2 className='display-title'>Display Cases</h2>
            <h4 className='display-description'>Have some pieces you're particularly proud of? Show them off in a display case</h4>
          </div>
        </div>
      </section>
    </>
  )
}
