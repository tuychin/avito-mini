import React from 'react';

import './preloader.css';

const Preloader = () => {
  return (
    <div className="preloader lds-css ng-scope">
      <div className="lds-rolling">
        <div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;