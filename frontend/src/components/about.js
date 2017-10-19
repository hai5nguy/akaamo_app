import React from 'react';

import Card from './expandable-card';
import info from '../assets/card-info.js';

import '../styles/card.scss';

class About extends React.Component {
	render () {
		const cards = info.map(card => (<Card info={card} />));

		return (<div className="about-us">
			<div className="content-header">About Us</div>
			<div className="content-body">
				<div className="about-text">This is an about us section</div>
				{cards}
			</div>
		</div>);
	}	
}

export default About;
