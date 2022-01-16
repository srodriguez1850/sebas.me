import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './portfolio.css'
// import '../assets/main.css'

import Header from './header'
import Grid from './grid'
import Footer from './footer'

export default class Portfolio extends Component {
	render() {
		return (

			<div id="wrapper">
        <Helmet defer={false}>
          <title>Sebastian S. Rodriguez | Portfolio</title>
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </Helmet>
        
          <Header />

          <div id="main">
            <div className="inner">
              <header>
                <h1>Software Engineer and UX Researcher</h1>
                <p>Human-Computer Interaction ABD PhD @ <a href="https://cs.illinois.edu/"><strong>UIUC</strong></a><br></br>Previously UX Research Intern @ <a href="https://tech.fb.com/"><strong>Facebook</strong></a><br></br>
                Previously Research Fellow @ <a href="https://www.arl.army.mil/"><strong>Army Research Laboratory</strong></a><br></br>
                </p>
              </header>
              
              <Grid />

            </div>
          </div>

          <Footer />

      </div>
		)
	}
}