import 'babel-polyfill';

import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Application } from './layout/Containers/Application';
import reducer from './store/reducers/';
import { addAllData } from './utils/addAllData';

export const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

addAllData();

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('content')
);
