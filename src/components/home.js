import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
// import './home.css'

// import me from '../images/common/me2021.jpg'
import cv from '../assets/icons/cv.svg'
import github from '../assets/icons/github.png'
import gscholar from '../assets/icons/google-scholar.svg'
import researchgate from '../assets/icons/researchgate.svg'

export default class Home extends Component
{	
  render()
  {
		return (
      <div class="d-flex flex-column align-items-center justify-content-center h-100">
      <Helmet defer={false}>
        <title>Sebastian S. Rodriguez</title>
        <link type="text/css" rel="stylesheet" href="/home.css" />
      </Helmet>

      <img src="../../images/common/me2021.jpg" class="mr-4 rounded-circle" width="250" height="250" alt="Sebastian Rodriguez" />       
      <h1>Sebastian S(amuel) Rodriguez</h1>
      <h4>srodri44 [at] illinois [dot] edu</h4>
      <p>
      <a target="_blank" rel="noreferrer" href="content/docs/cv.pdf"><img src={cv} alt="Download CV" width="auto" height="32" title="CV" /></a>
      <a target="_blank" rel="noreferrer" href="https://github.com/srodriguez1850"><img src={github} alt="GitHub" width="auto" height="32" title="GitHub" /></a>
      <a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=RdD2ZP8AAAAJ"><img src={gscholar} alt="Google Scholar" width="auto" height="32" title="Google Scholar" /></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/srodriguez1850/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" width="auto" height="32" title="LinkedIn" /></a>
      <a target="_blank" rel="noreferrer" href="https://www.researchgate.net/profile/Sebastian_Rodriguez75"><img src={researchgate} alt="ResearchGate" width="auto" height="32" title="ResearchGate" /></a>
      </p>
      <hr />
      <h1><a href="/research">Research</a> | <a href="/portfolio">Portfolio</a></h1>
      </div>
    )
  }
}