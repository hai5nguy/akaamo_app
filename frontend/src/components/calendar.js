import React from 'React';

import '../styles/calendar.scss';

class Calendar extends React.Component {
	render () {
		const events = [
			{
				start: 'October 12, 2017 5:00 PM',
				end: 'October 12, 2017 7:30 PM',
				title: 'Fancy Dinner Party',
				location: 'The fancy dining place'
			},
			{
				start: 'October 17, 2017 10:00 AM',
				end: 'October 17, 2017 4:30 PM',
				title: 'Nap Time',
				location: 'The park'
			}
		];

		return (<div className="upcoming-events">
			<div className="content-header">Calendar</div>
			<div className="content-body">
				{events.map(event => {
					return (<div className="event-block">
						<div className="event-info event-time">{event.start}</div>
						<div className="event-info event-title">{event.title}</div>
						<div className="event-info event-location">{event.location}</div>	
					</div>);	
				})}	
			</div>
		</div>);
	}
}

export default Calendar;