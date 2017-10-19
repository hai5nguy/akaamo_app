import React from 'react';

import Card from './expandable-card';
import info from '../assets/program-card-info.js';

import '../styles/card.scss';

class Programs extends React.Component {
	render () {
		const cards = info.map(card => (<Card info={card} />));

		return (<div className="about-us">
			<div className="content-header">Programs</div>
			<div className="content-body">
				{cards}
			</div>
		</div>);
	}	
}

export default Programs;