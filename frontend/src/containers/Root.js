import React from 'react';

import NavMenu from '../components/menu';
import About from '../components/about';
import Home from '../components/home';

import '../styles/app.scss';

const contentMap = {
  'home': <Home />,
  'about': <About />
};

class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
        selectedContent: {
            page: 'home',
            props: ''
        }
    };

    this.setContent = this.setContent.bind(this);
  }
  setContent (event) {
    const selectedContent = {
      page: event.target.getAttribute('data'),
      props: event.target.getAttribute('data-passProps')
    };
    this.setState({
        selectedContent
    });
  }
  render () {
    const { selectedContent } = this.state;
    const passingProps = {};
    passingProps[selectedContent.props] = this.state[selectedContent.props];
    const content = React.cloneElement(contentMap[selectedContent.page], passingProps);
    
    return (<div className="root">
      <NavMenu setContent={this.setContent}/>
      <div id="content">
        {content}
      </div>
    </div>);
  }
}
  

export default Root
