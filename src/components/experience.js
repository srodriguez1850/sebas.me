import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

export default class Experience extends Component {
	render() {
		return (
			<>
				<Col className="d-flex flex-column align-items-center">
					<Image src={`${this.props.img}`} style={{ maxWidth: '120px', maxHeight: '120px' }} rounded fluid />
	            	<p className="text-center">
	              	<b>{this.props.company}</b>
	              	<br />
	              	{this.props.title}
	              	<br />
	              	<i>{this.props.year}</i>
            		</p>
          		</Col>
			</>
		)
	}
}