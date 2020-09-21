import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I'm Jetzel Mae</strong>, a self-taught 
        <br />
        freelance artist from 
        <br />
        the Philippines.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
