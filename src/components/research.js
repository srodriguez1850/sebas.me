import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

import Research_Header from './research.header.js'

class Research extends Component {
	render() {
		return (
			<div>
				<Helmet defer={false}>
					<title>Sebastian S. Rodriguez | Research</title>
				</Helmet>
				
				<Research_Header />
			</div>
		)
	}
}
export default Research;