import React from 'react';

import Sort from '../sort';
import PriceInterval from '../price-interval';

import './filter.css';

const Filter = () => {
  return (
    <div className="filter">
      <Sort />
      <PriceInterval />
    </div>
  );
}

export default Filter;