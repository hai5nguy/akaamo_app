import React from 'react';

import { push as Menu } from 'react-burger-menu';
import '../styles/menu.scss';

class NavMenu extends React.Component {
	render () {
		return (<Menu pageWrapId={'content'}>
			<button onClick={this.props.setContent} id="home-menu" className="menu-item" data="home">Home</button>
        	<button onClick={this.props.setContent} id="about-menu" className="menu-item" data="about">About Us</button>
			<button onClick={this.props.setContent} id="calendar-menu" className="menu-item" href="/calendar">Calendar</button>
		</Menu>);
	}
}

export default NavMenu;
