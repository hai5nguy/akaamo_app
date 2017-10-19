import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';
import { store, history } from './store/store';
import './index.html';

//needed for Progressive Web App
import './pwa/manifest.json';
import './pwa/serviceworker.js';
import './pwa/icon-347x348.png';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  // module.hot.accept('./containers/Root', () => { render(App) })
}
