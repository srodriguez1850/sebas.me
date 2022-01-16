import React, { Component } from 'react'

export default class GridSquare extends Component {
	render() {
		return (
			<article className="style0">
				<span className="image">
					<img src={`${this.props.img}`} alt=""></img>
				</span>
					<a target="_blank" rel="noreferrer" href={this.props.url}>
						<div className="spacing"></div>
						<h2 className="content">{this.props.title}</h2>
						<div className="content">
							<p>{this.props.description}</p>
						</div>
					</a>
			</article>
		)
	}
}
