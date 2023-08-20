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
                <h1>Software and XR Engineer</h1>
                <p>
                Analytics Engineer @ <a href="https://engineering.fb.com/category/data-infrastructure/" target="_blank" rel="noreferrer"><strong>Meta</strong></a><br/>
                Previously @ <a href="https://www.arl.army.mil/" target="_blank" rel="noreferrer"><strong>U.S. Army Research Laboratory</strong></a><br/>
                </p>

                <p>
                Ph.D., Computer Science @ <a href="https://cs.illinois.edu/" target="_blank" rel="noreferrer"><strong>University of Illinois at Urbana-Champaign</strong></a><br/>
                B.S., Computer Engineering @ <a href="https://www.mccormick.northwestern.edu/electrical-computer/" target="_blank" rel="noreferrer"><strong>Northwestern University</strong></a>
                </p>

                <h2>
                ss.rodriguez1850 [at] gmail [dot] com
                </h2>
              
              <ul className="icons">
                <li><a className="icon" target="_blank" rel="noreferrer" href="./docs/cv.pdf"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cv-cv-resume-flatart-icons-outline-flatarticons.png" alt="Download CV" width="32" title="CV" /></a></li>
                <li><a className="icon" target="_blank" rel="noreferrer" href="./docs/resume.pdf"><img src="https://img.icons8.com/ios/96/000000/resume.png" alt="Download Resume" width="32" height="32" title="Resume" /></a></li>
                <li><a className="icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/srodriguez1850/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn Profile" width="32" height="32" title="LinkedIn" /></a></li>
                <li><a className="icon" target="_blank" rel="noreferrer" href="https://github.com/srodriguez1850"><img src="https://img.icons8.com/material-outlined/192/000000/github.png" alt="GitHub Profile" width="32" height="32" title="GitHub" /></a></li>
                <li><a className="icon" target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=RdD2ZP8AAAAJ"><img src="https://img.icons8.com/material-outlined/96/000000/google-scholar.png" alt="Google Scholar Profile" width="32" height="32" title="Google Scholar" /></a></li>
              </ul>
              </header>

              <hr />

              <h1>Experience</h1>

              <Experience entries={Data.experience} />

              <hr />

              <h1>Projects</h1>

              <Grid />

              <hr />

              <h1>Research</h1>

              {/*<Container>*/}
              <Row xs={1}>
              {Data.research.map(entry => {
                return(<Paper key={entry.title} img={entry.img} title={entry.title} institution={entry.institution} papers={entry.papers} categorized={entry.categorized}/>)
              })}
              </Row>
              {/*</Container>*/}

            </div>

          </div>

          <Footer />

      </div>
		)
	}
}