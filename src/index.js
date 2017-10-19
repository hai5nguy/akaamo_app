import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './components/Root'

import './index.html';

import './pwa/manifest.json';
import './pwa/serviceworker.js';
import './pwa/icon.png';



const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => { render(Root) })
}
