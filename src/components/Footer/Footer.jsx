import React from "react"
import './Footer.css'
import { SocialIcon } from "react-social-icons"

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <SocialIcon url="https://github.com/Anand-1812" target="_blank" />
        <SocialIcon url="https://x.com/Anand_Kumar1812" target="_blank" />
      </div>
    </div>
  )
}

export default Footer
