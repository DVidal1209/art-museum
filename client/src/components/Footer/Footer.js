import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer class='footer'>
        <div class='footer-content'>
          <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675730246/IMG-0089_hdu77m.png' alt='BB Plaza mini-logo' />
          <h3>Find Us Here</h3>
          
          <ul class='footer-bananafrog'>
              <li><a href='https://twitter.com/?lang=en' target={'_blank'}><img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675735230/iconmonstr-twitter-4-240_lcpyvb.png' /></a></li>
              <li><a href='https://www.youtube.com/' target={'_blank'}><img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675735230/iconmonstr-youtube-6-240_ddpx6h.png' /></a></li>
              <li><a href='https://www.instagram.com/' target={'_blank'}><img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675735230/iconmonstr-instagram-14-240_bfylvg.png' /></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
