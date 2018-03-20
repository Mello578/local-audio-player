import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'babel-polyfill';

import {Application} from './layout/Containers/Application';
import reducer from './store/reducers/'
import {movieTracklistImages} from './utils/movieTracklistImages';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

movieTracklistImages();

render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('content')
);