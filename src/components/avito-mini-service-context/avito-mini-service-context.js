/*
Для передачи сервиса всем компонентам через Context
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