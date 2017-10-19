import React from 'react';
import { connect } from 'react-redux';

import EventPanel from './event-panel.js';

import '../styles/home.scss';

const mapStateToProps = (state, ownProps) => {
	return {
		events: state.events
	}
}


class Home extends React.Component {
	render () {
		var data = {
			name: 'Debutante Cotillion and Scholarship Program',
			startDate: '2017-11-12T16:00:00-05:00',
			endDate: '2017-11-12T19:00:00-05:00',
			location: 'Indiana Roof Ballroom'
		};

		var yo = this.props.events;

		return (
			<div className="home">
				<div> ccc:  {yo}</div>
				<div className="content-header">Home</div>
				<div className="home-logo"></div>
				<EventPanel data={data} />
			</div>
		);
	}	
}

// export default Home;

export default connect(mapStateToProps)(Home)
