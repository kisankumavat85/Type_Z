import React from 'react'

import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-network-p">
        <p>STAY IN TOUCH</p>
      </div>
      <div className="social-network-div">
        <a target="_blank" href="https://www.instagram.com/kisan_kumavat/"><div><i class="fab fa-instagram"></i></div></a>
        <a target="_blank" href="https://twitter.com/TypeZ85"><div><i class="fab fa-twitter"></i></div></a>
        <a target="_blank" href="https://www.facebook.com/kishan.kumawat.7965"><div><i class="fab fa-facebook-square"></i></div></a>
        <a target="_blank" href="https://www.linkedin.com/in/kisan-kumavat-966186190/"><div><i class="fab fa-linkedin-in"></i></div></a>
      </div>
      <div className="copyright-div">
        <p>© 2021 Copyright @ Type Z</p>
      </div>
    </div>
  )
}

export default Footer
