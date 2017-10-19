import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux';
import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';


import eventsReducer from './events';

var r = combineReducers({
    routing: routerReducer,
    events: eventsReducer
});

var m = routerMiddleware(browserHistory);
var c = compose(
	applyMiddleware(m),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(r, {}, c);

export const history = createHistory();
// export const history = syncHistoryWithStore(browserHistory, store);

export const dispatch = store.dispatch;

