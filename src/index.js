import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import Favicon from 'react-favicon';
//Custom files
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AvitoDumpService from './services/avito-dump-service';
import { DataServiceProvider } from './components/data-service-context';

import favicon from './favicon.ico';
import store from './store';

const dataService = new AvitoDumpService();

ReactDOM.render(
  <Provider store={store}>
    <Favicon url={favicon} />
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