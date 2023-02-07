import React from 'react'
import './home.css'

export default function Home() {
  return (
    <>
      <section id='hero'>
        <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675730246/IMG-0089_hdu77m.png' alt='BB Plaza mini-logo' />
        <h3>Welcome to the Plaza</h3>
      </section>

      <section id='home-content'>
        <div className='m-b-l' id='features'>
          <a className='feature' href = '#museums'>
            <h2 className='feature-title'>Your Museum</h2>
            <h4 className='feature-description'>Your place to express yourself creatively</h4>
          </a>

          <a className='feature' href='#exhibits'>
            <h2 className='feature-title'>Your Exhibits</h2>
            <h4 className='feature-description'>A themed section for your art</h4>
          </a>

          <a className='feature' href='#gallery'>
            <h2 className='feature-title'>Your Gallery</h2>
            <h4 className='feature-description'>Discover other artists</h4>
          </a>
        </div>

        <div className='feature-display m-b-m right' id='museums'>
          <img
          className='display-image'
          src='https://res.cloudinary.com/dgnio63sm/image/upload/z_1.4/a_270/v1675132596/42a2eaf8-ed90-43c5-9a75-c97612cf78bd_1_105_c_fuqe0h.jpg'
          alt='Museums Image'
          />

          <div className='display-info'>
            <h2 className='display-title'>Museums</h2>
            <h4 className='display-description'>Your museum is your personal page. It is where you can express yourself creatively and share your art with the world.</h4>
          </div>
        </div>

        <div className='feature-display m-b-m left' id='exhibits'>
          <div className='display-info'>
            <h2 className='display-title'>Exhibits</h2>
            <h4 className='display-description'>Experimenting with a new style or enjoy swapping between certain themes? Put related pieces in an exhibit within your museum!</h4>
          </div>
          
          <img className='display-image' src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675383122/9E2814EA-0D7F-4143-89F4-A4C69B2767B7_1_105_c_xlrhq4.jpg'/>
        </div>

        <div className='feature-display m-b-m right' id='gallery'>
          <img
          className='display-image grayscale'
          src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675383057/7A78B1BB-2B1E-40DB-8596-3CCB37EB5A58_1_105_c_lhkl5v.jpg'
          alt='Exhibits Image'
          />

          <div className='display-info'>
            <h2 className='display-title'>Galleries</h2>
            <h4 className='display-description'>Any of your art that is not inside a specific exhibit gets put into your gallery</h4>
          </div>
        </div>
      </section>
    </>
  )
}
