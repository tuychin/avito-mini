import React from 'react';
import StarRatings from 'react-star-ratings';
import { ucFirst, numberSeparator } from '../../utils';

import './ads-item.css';

const AdsItem = ({ ads }) => {
  const { title, isFavorite, price, images, sellerRating, sellerName } = ads;

  const separatedPrice = numberSeparator(price);
  const uppercaseTitle = ucFirst(title);

  return (
    <div className="ads-item card mb-4">
      <div className="card-header">
        <i className="heart fa fa-heart"></i>
        <h2>{uppercaseTitle}</h2>
      </div>
      <div className="card-body">
        <span className="price">{price === undefined ? 'Цена не указана' : `${separatedPrice} ₽`}</span>
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