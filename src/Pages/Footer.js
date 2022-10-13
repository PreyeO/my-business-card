import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineInstagram,AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='socials'>
      <footer>
     <a href ='https://twitter.com/pomusuku/' target="_blank" rel="noreferrer"><AiOutlineTwitter style={{width:30, height:25, backgroundColor:'#49a1eb', marginRight:20}}/>
     </a> 
     <a href ='https://github.com/PreyeO' target="_blank" rel="noreferrer"><AiOutlineGithub style={{width:30, height:25, backgroundColor:'white', color:'black', marginRight:20}}/></a>
     <a href ='https://www.instagram.com/omusukupreye/' target="_blank" rel="noreferrer"><AiOutlineInstagram style={{width:30, height:25, backgroundColor:'black', marginRight:20}}/></a>
     <a href ='https://www.facebook.com/omusuku.preye1/' target="_blank" rel="noreferrer"><AiOutlineFacebook style={{width:30, height:25, backgroundColor:'#4968ad'}}/></a>
     </footer>
    </div>
  )
}

export default Footer
