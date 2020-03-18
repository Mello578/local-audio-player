import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { setPlaylist } from 'utils';

import reducer from '../js/store/reducers/index';

import { Application } from './Containers/Application';

export const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// todo нужно подумать над лоадером
setPlaylist();

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('content')
);
