import React from 'react';
import StarRatings from 'react-star-ratings';

import './ads-item.css';

const AdsItem = ({ ads }) => {
  const { title, /*isFavorite,*/ price, /*images,*/ sellerRating, sellerName } = ads;

  const priceSeparator = numberSeparator(price);

  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  function numberSeparator(str) {
    let parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
  };

  return (
    <div className="ads-item card mb-4">
      <div className="card-header">
        <i className="heart fa fa-heart"></i>
        <h2>{ucFirst(title)}</h2>
      </div>
      <div className="card-body">
        <span className="price">{price === undefined ? 'Цена не указана' : `${priceSeparator} ₽`}</span>
      </div>
      <img src="https://loremflickr.com/400/400/auto,interior?random=8" alt="Card img"/>
      <div className="card-body">
        <StarRatings
          rating={sellerRating}
          starRatedColor="gold"
          starDimension="20px"
          numberOfStars={5}
          name='rating' />
      </div>
      <div className="card-footer text-muted">
      <span className="card-text">{sellerName}</span>
      </div>
    </div>
  );
}

export default AdsItem;