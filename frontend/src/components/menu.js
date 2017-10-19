import React from 'react';

import { push as Menu } from 'react-burger-menu';
import '../styles/menu.scss';

class NavMenu extends React.Component {
	render () {
		return (<Menu>
			<a id="home" className="menu-item" href="/">Home</a>
        	<a id="about" className="menu-item" href="/about">About</a>
		</Menu>);
	}
}

export default NavMenu;
