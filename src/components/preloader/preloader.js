import React from 'react';

import './preloader.css';

const Preloader = () => {
  return (
    <div class="lds-css ng-scope">
      <div class="lds-rolling">
        <div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;