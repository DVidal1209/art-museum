import React from 'react'
import './museums.css'

// const SingleImageFeature = (props) => {}

export default function Museums(props) {
  return (
    <div class="museum-display">
      <a href='' className='feature-display m-b-m'>
        <div className='display-info'>
          <h2 className='display-title'>Seoul city</h2>
          <p>By: Author</p>
          <h4 className='display-description'>Experimenting with city scapes and color!</h4>
        </div>

        <div class='museumimage' alt='seoul city'>
          <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675389354/C77B3A94-5F35-4BE3-B050-C7E8CF55BDF6_1_105_c_jad26c.jpg'/>
        </div>
      </a>

      <a href=''> <div className='feature-display m-b-m'>
        <div className='display-info'>
          <h2 className='display-title'>Cafe hopping</h2>
          <p>By: Author</p>
          <h4 className='display-description'>Experimenting with coffee!</h4>
        </div>

        <div class='museumimage' alt=''>
          <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675383272/85282FAA-54CA-4E27-BCEA-558CB43B3CCE_1_105_c_q2u1pb.jpg'/>
        </div>
      </div>
      </a>
    </div>
  )
};
