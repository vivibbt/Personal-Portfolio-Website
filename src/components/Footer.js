import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from '@material-ui/core/Link';

import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 

        <Link href="https://www.instagram.com/vivianzzhao/" target="_blank" >
          <InstagramIcon/>
        </Link>
        <Link href="https://github.com/vivibbt" target="_blank" >
          <GithubIcon/>
        </Link>
        <Link href="https://www.linkedin.com/in/vivian-zhao-9204b31a3/" target="_blank" >
          <LinkedInIcon/>
        </Link>

         </div>
      <p> &copy; 2023 vivianzhao.com</p>
    </div>
  )
}

export default Footer