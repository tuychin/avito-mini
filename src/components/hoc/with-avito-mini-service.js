/*
HOC for accessing the service through Context
*/

import React from 'react';
import { AvitoMiniServiceConsumer } from '../avito-mini-service-context';

const withAvitoMiniService = () => (Wrapped) => {
  
  return (props) => {
    return (
      <AvitoMiniServiceConsumer>
        {
          (AvitoMiniService) => {
            return (<Wrapped {...props}
              AvitoMiniService={AvitoMiniService} />);
          }
        }
      </AvitoMiniServiceConsumer>
    )
  }
}

export default withAvitoMiniService;