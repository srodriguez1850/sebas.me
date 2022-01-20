import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Paper extends Component {
	render() {
		return (
			<>
				<Col className="paper">
	            	<span className="image left"><img src={`${this.props.img}`} /></span>
	            	<h2 className="paper">{this.props.title}</h2>
	            	<p className="blockquote-footer">{this.props.institution}</p>
	            	<p>
	            		{this.props.papers.map((entry, index) => {
	            			return(<><a key={entry.title+entry.doc} target="_blank" rel="noreferrer" href={entry.doc}><strong>{entry.title}</strong></a>{(index < this.props.papers.length-1 ? ', ' : '')}</>)
	            		})}
	            	</p>
          		</Col>
			</>
		)
	}
}