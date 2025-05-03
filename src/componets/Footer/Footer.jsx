import React from 'react'
import './Footer.css'
import twitter_icon  from  '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={twitter_icon } alt="" />
          <img src={youtube_icon } alt="" />
          <img src={instagram_icon } alt="" />
          <img src={facebook_icon } alt="" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Center</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Term Of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>© 2025 Netflix Clone. All rights reserved.created by Chandra Kant Khatua....</p>
      </div>
  )
}

export default Footer