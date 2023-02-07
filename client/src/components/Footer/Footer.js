import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer class='footer'>
        <div class='footer-content'>
          <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675730246/IMG-0089_hdu77m.png' alt='BB Plaza mini-logo' />
          <h3>Contact Us</h3>
          <p> When i went up and grabbed an apple I realized that I didn't do a git pull first so I could not grab the apple from the tree. Dang.
          </p>
          <ul class='footer-bananafrog'>
            <>
              <li><a href='https://twitter.com/?lang=en' target={'_blank'}><img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675735230/iconmonstr-twitter-4-240_lcpyvb.png' /></a></li>
              <li><a href='https://www.youtube.com/' target={'_blank'}><img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675735230/iconmonstr-youtube-6-240_ddpx6h.png' /></a></li>
              <li><a href='https://www.instagram.com/' target={'_blank'}><img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675735230/iconmonstr-instagram-14-240_bfylvg.png' /></a></li>
            </>
            <div class='footer-menu'>
              <ul class='f-menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/museums'>Museums</a></li>
                <li><a href='/login'>Login/Sign-up</a></li>
              </ul>
            </div>
          </ul >
        </div>
      </footer >
    </>
  )
}
