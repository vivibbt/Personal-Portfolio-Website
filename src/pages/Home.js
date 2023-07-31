import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link"
import '../styles/Home.css'

export default function Home() {
  return (
  // <body >
    <div className='home-top '>
      <div className='about'>
        <p className="fs-2" id="tagline">
          <h2>Hi, I'm Vivian Zhao. </h2>
        </p>
        <div className='intro'>
          <p> 
            I am a software engineer whose career objective is to apply my knowledge of computer science and software development principles to design and develop high-quality software solutions. 
          </p>
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
      </div>
      <div className='skills'> 
        <h1>Skills</h1> 
        <ol className='list'>
          <li className='item'>
            <h2> Platforms/Frameworks </h2>
            <span> ReactJS, HTML, CSS, Yarn, NPM, BootStrap, Swift</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>  Python, Java, Swift, C/C++, JavaScript, HTML, CSS, ReactJS, OCaml </span>
          </li>
          <li className='item'>
            <h2> Relevant Skills</h2>
            <span> 
              Source Version Control (Git, GitHub), Hardware and Software Optimization,
              Frontend/Backend Web Development, iOS App Development, Functional Programming</span>
          </li>
        </ol>
      </div>
    </div>
  // </body>
    
  )
}
