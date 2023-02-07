import React from 'react'
import './profile.css'

export default function Profile() {
    return (
        <>
        
        <div class="card">
  <img class = 'profile-image' src="https://res.cloudinary.com/dgnio63sm/image/upload/v1675383041/E4FB0142-660E-4BD1-A317-82C09A7E440D_1_105_c_duedle.jpg" alt="John"></img>
  <h1>John Papa</h1>
  <p class="title">CEO & Founder, Papa Johns</p>
  <p>I might be the coolest guy. I once ate 40 pizzas in 30 days.</p>
        </div>
        <div class="museum-display">
            <div className='feature-display m-b-m'>
                <div className='display-info'>
                    <h2 className='display-title'>Zadar sunset</h2>
                    <h4 className='display-description'>SooOoOoO gorgeous! By: Author</h4>
                </div>

                <div class='museumimage' alt='zadar water'>
                    <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675383015/3D5645D8-B0C6-41AA-B76A-1E6C694CC08B_1_105_c_pztw8y.jpg'>

                    </img>
                </div>
            </div>

            <a href=''> <div className='feature-display m-b-m'>
                <div className='display-info'>
                    <h2 className='display-title'>Boats N' Water</h2>
                    <h4 className='display-description'>Boat on water in Zadar! By: Author</h4>
                </div>

                <div class='museumimage' alt=''>
                    <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675383057/7A78B1BB-2B1E-40DB-8596-3CCB37EB5A58_1_105_c_lhkl5v.jpg'>

                    </img>

        
                </div>
            </div>
            <h2 onClick={() => window.location.href ='/profile'} id='logout' class='logout'>Logout</h2>
            </a>

        </div>
        </>


    )

}
