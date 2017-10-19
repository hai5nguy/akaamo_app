import React from 'react';

import '../styles/home.scss';

class Home extends React.Component {
	render () {
		return (
			<div className="home">
				<div className="content-header">Home</div>
				<div className="home-logo">logo</div>
				<div className="content-body">
					<div className="about-text">This is the home page</div>
				</div>
			</div>
		);
	}	
}

export default Home;
