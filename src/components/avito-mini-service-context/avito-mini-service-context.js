/*
To transfer the service through Context to all components
*/

import React from 'react';

const {
  Provider: AvitoMiniServiceProvider,
  Consumer: AvitoMiniServiceConsumer
} = React.createContext();

export {
  AvitoMiniServiceProvider,
  AvitoMiniServiceConsumer
}