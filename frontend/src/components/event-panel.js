import React from 'react';

import '../styles/event-panel.scss';

class EventPanel extends React.Component {
	render () {
        const { name, startDate, endDate, location } = this.props.data;
		return (
			<div className="event-panel">
                <div>{name}</div>
                <div className="event-location">{location}</div>
                <div>{startDate}</div>
                <div>{endDate}</div>
			</div>
		);
	}	
}

export default EventPanel;
