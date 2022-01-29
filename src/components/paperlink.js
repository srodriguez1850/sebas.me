import React, { Component } from 'react';

export default class PaperLink extends Component {
	noncategorized(props)
	{
		return (<>
			<p>
            	{props.papers.map((entry, index) => {
            		return(<><a key={entry.title+entry.doc} target="_blank" rel="noreferrer" href={entry.doc}><strong>{entry.title}</strong></a>{(index < this.props.papers.length-1 ? ', ' : '')}</>)
            	})}
    		</p>
    	</>)
	}

	categorized(props)
	{
		var categories = {}
		for (var i = 0; i < props.papers.length; i++) {
			var paper = props.papers[i]
			if (!(paper.category in categories))
			{
				categories[paper.category] = []
			}
			categories[paper.category].push([paper.title, paper.doc])
		}

		return (<>
		{Object.entries(categories).map(([key, value]) => {
				console.log(value)

				return(<>
					<i>{key}</i>: {value.map((entry, index) => {
						var title = entry[0]
						var link = entry[1]
						return(<><a key={title} target="_blank" rel="noreferrer" href={link}><strong>{title}</strong></a>{(index < value.length-1 ? ', ' : '')}</>)
					})}<br />
				</>)

			})}
		</>)
	}

	render()
	{
		return (<>
			{!this.props.categorized && this.noncategorized(this.props)}
			{this.props.categorized && this.categorized(this.props)}
		</>)
	}

}