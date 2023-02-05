import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer class='footer'>
        <div class='footer-content'></div>
        <h3>Footer content</h3>
        <p> When i went up and grabbed an apple I realized that I didn't do a git pull first so I could not grab the apple from the tree. Dang.
        </p>
        <ul class='socials'>
        <>
        <li><a href='https://twitter.com/?lang=en'><i class='fa fa-twitter'></i></a></li>
        <li><a href='https://www.youtube.com/'><i class='fa fa-youtube'></i></a></li>
        <li><a href='https://www.instagram.com/'><i class='fa fa-instagram'></i></a></li>
        </>
        <div class= 'footer-menu'>
          <ul class='f-menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/museums'>Museums</a></li>
            <li><a href='/login'>Login/Sign-up</a></li>
          </ul>
        </div>
          
    </ul >
    </footer >
    </>
  )
}
