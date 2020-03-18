import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import reducer from '../js/store/reducers/index';

import { Application } from './Application';

export const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('content')
);
