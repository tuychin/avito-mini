/*
To transfer the service through Context to all components
*/

import React from 'react';

const {
  Provider: DataServiceProvider,
  Consumer: DataServiceConsumer
} = React.createContext();

export {
  DataServiceProvider,
  DataServiceConsumer
}