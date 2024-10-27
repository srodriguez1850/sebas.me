import React, { Component } from 'react'
import { Image } from 'react-bootstrap';

export default class Grid extends Component {
	
	render()
	{
		return (
			<>
			<header id="header">
			<div className="inner">

			<a href="/" className="logo">
			<span className="symbol"><Image src="../../images/common/me2021.jpg" alt="" rounded /></span><span class="title">SEBASTIAN S. RODRIGUEZ, Ph.D.</span>
			</a>


			</div>
			</header>
			</>
		)
	}
}