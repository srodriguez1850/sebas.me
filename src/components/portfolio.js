import React, { Component } from 'react';
import './portfolio.css';

import { Row } from 'react-bootstrap';

import Header from './header'
import Grid from './grid'
import Footer from './footer'
import Experience from './experience'
import Paper from './paper'

import Data from '../data.json'

export default class Portfolio extends Component {
	render() {
		return (
			<div id="wrapper">

          <Header />

          <div id="main">
            <div className="inner">
              <header>
                <h1>Software Engineer and Researcher</h1>
                      
                <p>
                Research Data Scientist @ <a href="https://engineering.fb.com/category/data-infrastructure/"><strong>Meta</strong></a><br/>
                Previously @ <a href="https://tech.fb.com/"><strong>Meta (UXR)</strong></a>, <a href="https://www.arl.army.mil/"><strong>Army Research Laboratory</strong></a><br/>
                </p>

                <p>
                PhD, Computer Science @ <a href="https://cs.illinois.edu/"><strong>University of Illinois at Urbana-Champaign</strong></a><br/>
                BS, Computer Engineering @ <a href="https://www.mccormick.northwestern.edu/electrical-computer/"><strong>Northwestern University</strong></a>
                </p>

                <h2>
                sebastianr [at] meta [dot] com
                <br/>
                s.rodriguez1850 [at] outlook [dot] com
                </h2>
              
              <ul className="icons">
                <li><a target="_blank" rel="noreferrer" href="./docs/cv.pdf"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cv-cv-resume-flatart-icons-outline-flatarticons.png" alt="Download CV" width="32" title="CV" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="./docs/resume.pdf"><img src="https://img.icons8.com/ios/96/000000/resume.png" alt="Download Resume" width="32" height="32" title="Resume" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/srodriguez1850"><img src="https://img.icons8.com/material-outlined/192/000000/github.png" alt="GitHub Profile" width="32" height="32" title="GitHub" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=RdD2ZP8AAAAJ"><img src="https://img.icons8.com/material-outlined/96/000000/google-scholar.png" alt="Google Scholar Profile" width="32" height="32" title="Google Scholar" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/srodriguez1850/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn Profile" width="32" height="32" title="LinkedIn" /></a></li>
              </ul>
              </header>

              <hr />

              <h1>Experience</h1>

              <Row className="row-cols-3">
              {Data.experience.map(entry => {
                return(<Experience key={entry.company+entry.title} img={entry.img} company={entry.company} title={entry.title} year={entry.year} />)
              })}
              </Row>

              <hr />

              <h1>Projects</h1>

              <Grid />

              <hr />

              <h1>Research</h1>

              <Row className="row-cols-1">
              {Data.research.map(entry => {
                return(<Paper key={entry.title} img={entry.img} title={entry.title} institution={entry.institution} papers={entry.papers} categorized={entry.categorized}/>)
              })}
              </Row>

            </div>

          </div>

          <Footer />

      </div>
		)
	}
}