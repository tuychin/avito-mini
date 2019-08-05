import React from 'react';

import './price-interval.css';

const PriceInterval = () => {
  return (
    <div className="form-group price-interval">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">ЦЕНА С </span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
          <div className="input-group-append">
            <span className="input-group-text">₽</span>
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> ДО </span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
          <div className="input-group-append">
            <span className="input-group-text">₽</span>
          </div>
        </div>
    </div>
  );
}

export default PriceInterval;
/*
<div className="price-interval form-group">
<label className="col-form-label" for="inputDefault">Цена с </label>
  <input type="text" className="form-control form-control-lg" placeholder="0" id="inputDefault" />
<label className="col-form-label" for="inputDefault"> до </label>
  <input type="text" className="form-control form-control-lg" placeholder="0" id="inputDefault" />
</div>
*/