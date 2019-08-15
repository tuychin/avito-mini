import React from 'react';
import StarRatings from 'react-star-ratings';

import { ucFirst, numberSeparator } from '../../utils';
import Carousel from '../carousel/';

import './ads-item.css';

const AdsItem = ({ ads, onUpdateFavorites }) => {
  const { title, price, images, isFavorite, sellerRating, sellerName } = ads;

  const separatedPrice = numberSeparator(price);
  const uppercaseTitle = ucFirst(title);
  const btnColor = isFavorite ? "heart-btn-red" : "heart-btn-blue";

  const onUpdateFavoritesMessage = () => {
    if (isFavorite === true) {
      return alert('Объявление удалено из раздела "Избранное"');
    } else {
      return alert('Объявление добавлено в раздел "Избранное"')
    }
  }

  const handleClick = () => {
    onUpdateFavorites();
    onUpdateFavoritesMessage();
  }

  return (
    <div className="ads-item card mb-4">
      <div className="card-header">
      <button
          //Two handler onClick
          onClick={handleClick}
          className={`heart-btn ${btnColor}`}>
          <i className="fa fa-heart"></i>
        </button>
        <h2>{uppercaseTitle}</h2>
      </div>
      <div className="card-body">
        <span className="price">{price === undefined ? 'Цена не указана' : `${separatedPrice} ₽`}</span>
      </div>
      <Carousel images={images} />
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