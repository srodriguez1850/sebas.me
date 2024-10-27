import React, { Component } from 'react';

export default class PaperLink extends Component {

	stripChars(inputString) {
  		const words = inputString.replace(/\s+/g, '');
  		return words;
	}

	noncategorized(props)
	{
		return (<>
			<p>
            	{props.papers.map((entry, index) => {

            		if (entry.doc === "" || entry.doc === null)
            		{
            			return(<>{entry.title}</>)
            		}
            		else
            		{
            			var inKey = this.stripChars(`${entry.title+entry.doc}`);
            			return(<><a key={inKey} target="_blank" rel="noreferrer" href={entry.doc}>{entry.title}</a>{(index < this.props.papers.length-1 ? ', ' : '')}</>)
            		}
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
				return(<>
					<i>{key}</i>: {value.map((entry, index) => {
						var title = entry[0]
						var link = entry[1]

						if (link === "" || link === null)
						{
							return (<>{title}</>)
						}
						else
						{
							var inKey = this.stripChars(`${key+title}`);
							return(<><a key={inKey} target="_blank" rel="noreferrer" href={link}>{title}</a>{(index < value.length-1 ? ', ' : '')}</>)	
						}
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