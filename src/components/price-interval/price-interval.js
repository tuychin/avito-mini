import React from 'react';
import { connect } from 'react-redux'

import { updatePriceInterval } from '../../actions';

import './price-interval.css';

const PriceInterval = ({ minValue, maxValue, setPriceInterval, dispatch }) => {

  const onMinPriceIntervalChange = (evt) => {
    const setMinValue = evt.target.value;
    dispatch(setPriceInterval(setMinValue, maxValue));
  }

  const onMaxPriceIntervalChange = (evt) => {
    const setMaxValue = evt.target.value;
    dispatch(setPriceInterval(minValue, setMaxValue));
  }

  return (
    <div className="form-group price-interval">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">ЦЕНА С </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            value={minValue}
            onChange={onMinPriceIntervalChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">₽</span>
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> ДО </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            value={maxValue}
            onChange={onMaxPriceIntervalChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">₽</span>
          </div>
        </div>
    </div>
  );
}

const mapStateToProps = ( { priceInterval: { minValue, maxValue } }) => {
  return { minValue, maxValue };
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setPriceInterval: (minValue, maxValue) => updatePriceInterval(minValue, maxValue),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceInterval);