import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
//Custom files
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AvitoDumpService from './services/avito-dump-service';
import { DataServiceProvider } from './components/data-service-context';

import store from './store';

const dataService = new AvitoDumpService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <DataServiceProvider value={dataService}>
        <Router>
          <App />
        </Router>
      </DataServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);