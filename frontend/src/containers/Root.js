import React from 'react';

import NavMenu from '../components/menu';
import About from '../components/about';
import Home from '../components/home';
import Calendar from '../components/calendar';
import Programs from '../components/programs';

import '../styles/app.scss';

const contentMap = {
  'home': <Home />,
  'about': <About />,
  'programs': <Programs />,
  'calendar': <Calendar />
};

class Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
        selectedContent: {
            page: 'home',
            props: ''
        },
        isMenuOpen: false
    };

    this.setContent = this.setContent.bind(this);
  }
  setContent (event) {
    const selectedContent = {
      page: event.target.getAttribute('data'),
      props: event.target.getAttribute('data-passProps')
    };
    this.setState({
        selectedContent,
        isMenuOpen: false
    });
  }
  render () {
    const { isMenuOpen, selectedContent } = this.state;
    const passingProps = {};
    passingProps[selectedContent.props] = this.state[selectedContent.props];
    const content = React.cloneElement(contentMap[selectedContent.page], passingProps);
    
    return (<div className="root">
      <NavMenu setContent={this.setContent} isMenuOpen={isMenuOpen}/>
      <div id="content">
        {content}
      </div>
    </div>);
  }
}
  

export default Root
