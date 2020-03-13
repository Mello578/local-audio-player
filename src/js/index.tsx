import { setAllData } from 'utils';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'babel-polyfill';

import reducer from './store/reducers/';
import { Application } from './layout/Containers/Application';

export const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

setAllData();

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('content')
);
