import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from 'shared/store/configureStore';
import App from 'components/App';

const store = configureStore();

render(
  <App store={store} />,
  document.getElementById('app'),
);
