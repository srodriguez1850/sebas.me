import React, { Component } from 'react'
import GridSquare from './gridsquare'
import Data from '../data.json'

export default class Grid extends Component {
	render() {
		return (
			<section className="tiles">
				{Data.entries.map(entry => {
					return (<GridSquare key={entry.title} title={entry.title} description={entry.description} url={entry.url} img={entry.img} />)
				})}
			</section>
		)
	}
}