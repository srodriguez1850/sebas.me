import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
            <div class="inner">
              <section>
                <h3>srodri44 [at] illinois [dot] edu</h3>
                <ul class="icons">
                  <li><a target="_blank" rel="noreferrer" href="content/docs/resume.pdf" class="icon style2 fa-file"><span class="label">Resume</span></a></li>
                  <li><a target="_blank" rel="noreferrer" href="https://github.com/srodriguez1850" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
                  <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/srodriguez1850/" class="icon brands style2 fa-linkedin"><span class="label">LinkedIn</span></a></li> 
                </ul>
              </section>
              <ul class="copyright">
                <li>&copy; Sebastian S. Rodriguez. All rights reserved</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                <li>Last Updated: January 2022</li>
              </ul>
            </div>
          </footer>
		)
	}
}