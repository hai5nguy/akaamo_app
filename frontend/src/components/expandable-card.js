import React from 'React';

import Collapsible from 'react-collapsible';

class Card extends React.Component {
	render () {
		return (<div className="expandable-card" id={this.props.info.id}>
			<Collapsible trigger={this.props.info.title}>
			<div dangerouslySetInnerHTML={{__html: this.props.info.content}} />
			</Collapsible>
		</div>);
	}
}

export default Card;
