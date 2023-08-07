import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

import PaperLink from './paperlink'

export default class Paper extends Component {
	render() {
		return (
			<>
				<Col className="paper">
	            	<span className="image left"><Image src={`${this.props.img}`} alt="" rounded /></span>
	            	<h2 className="paper">{this.props.title}</h2>
	            	<p className="blockquote-footer">{this.props.institution}</p>
	            	<PaperLink categorized={this.props.categorized} papers={this.props.papers} />
          		</Col>
			</>
		)
	}
}