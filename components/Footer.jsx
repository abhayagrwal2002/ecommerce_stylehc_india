import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {


  return (
    <div className="footer-container">
      <p>2022 @Hardik Creations | Designer Clothing. All rights reserverd :-
        Designed by Abhay Singhal
      </p>
      <p>Follow Our Instagram Account</p>
      <p className="icons">
        
        <Link href="https://www.instagram.com/stylehc_india/">
          
          <button type="button"className='instagram'>
          <AiFillInstagram/>
          </button>
        </Link>
        
      </p>
    </div>
  )
}

export default Footer