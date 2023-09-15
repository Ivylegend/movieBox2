import React from 'react';
import './Socials.css';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"

const Socials = () => {
  return (
    <div className='app__socials'>
        <FaFacebook className='facebook'/>
        <FaInstagram className='insta' />
        <FaTwitter className='twitter'/>
        <FaYoutube className='youtube'/>
    </div>
  )
}

export default Socials