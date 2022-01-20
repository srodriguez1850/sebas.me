import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Experience extends Component {
	render() {
		return (
			<>
				<Col>
	            	<img className="mx-auto d-block rounded-circle" src={`${this.props.img}`} height="120" alt="" />
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