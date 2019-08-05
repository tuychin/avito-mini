import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
//Custom files
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AvitoDumpService from './services/avito-dump-service';
import { AvitoMiniServiceProvider } from './components/avito-mini-service-context';

import store from './store';

const dataService = new AvitoDumpService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AvitoMiniServiceProvider value={dataService}>
        <Router>
          <App />
        </Router>
      </AvitoMiniServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);