import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class Experience extends Component {
	

	render() 
	{
		const entries = this.props.entries;
		return (
			<Container>
			<Row xs={1} sm={2} md={3}>
			{entries.map((entry, index) => (
				<Col key={index} className='d-flex flex-column align-items-center'>
				<Image
				src={entry.img}
				alt={entry.alt}
				style={{ maxWidth: '120px', maxHeight: '120px' }}
				rounded
				fluid
				/>
				<p className="text-center"><b>{entry.company}</b>
				<br />
				{entry.title}
				<br />
				<i>{entry.year}</i>
				</p>
				</Col>
				))}
			</Row>
			</Container>
			);
	}
}