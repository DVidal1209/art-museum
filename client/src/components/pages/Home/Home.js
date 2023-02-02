import React from 'react'
import hero from '../../../images/hero.jpeg'
import './home.css'

export default function Home() {
  return (
    <>
    <div id='hero'>
      <h1>Thought provoking text</h1>
    </div>

    <section id='features'>
      <div className='feature-showcase'>
        <h2 className='feature-title'>Your Museum</h2>
        <h4 className='feature-description'>Your place to express yourself creatively</h4>
      </div>

      <div className='feature-showcase'>
        <h2 className='feature-title'>Your Exhibits</h2>
        <h4 className='feature-description'>A themed section for your art</h4>
      </div>

      <div className='feature-showcase'>
        <h2 className='feature-title'>The Plaza</h2>
        <h4 className='feature-description'>Discover other artists</h4>
      </div>
    </section>
    </>
  )
}
