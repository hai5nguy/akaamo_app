import React from 'react';

import { push as Menu } from 'react-burger-menu';
import '../styles/menu.scss';

class NavMenu extends React.Component {
	render () {
		return (<Menu pageWrapId={'content'} isOpen={this.props.isMenuOpen}>
			<div onClick={this.props.setContent} id="home-menu" className="menu-item" data="home">Home</div>
        	<div onClick={this.props.setContent} id="about-menu" className="menu-item" data="about">About Us</div>
			<div onClick={this.props.setContent} id="calendar-menu" className="menu-item" data="calendar">Calendar</div>
		</Menu>);
	}
}

export default NavMenu;
