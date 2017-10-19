import React from 'react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store/store';
import routes from './routes';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} children={routes} />
            </Provider>
        )
    }
}


