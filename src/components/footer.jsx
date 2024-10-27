import React, { Component } from 'react'
// import preval from 'preval.macro'

// const month = preval`module.exports = new Date().getMonth();`
// const year = preval`module.exports = new Date().getFullYear();`

// const months = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];

export default class Footer extends Component {
  render () {
    return (
      <>
        <footer id='footer'>
          <div className='inner'>
            <ul className='copyright'>
              <li>&copy; Sebastian S. Rodriguez. All rights reserved.</li>
              <li>
                Design:{' '}
                <a target='_blank' rel='noreferrer' href='https://html5up.net'>
                  HTML5 UP
                </a>
              </li>
              {/* <li>Last Updated: {months[month] + ' ' + year}</li> */}
            </ul>
          </div>
        </footer>
      </>
    )
  }
}
