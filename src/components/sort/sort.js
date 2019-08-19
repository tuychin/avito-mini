import React from 'react';
import { connect } from 'react-redux'

import { adsSort } from '../../actions';

import './sort.css';

const Sort = ({ sort, onSortByNew, onSortByPopular, onSortByPrice }) => {

  return (
    <div className="sort">
      <div className="sort btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-primary${sort === 'new' ? ' active' : '' }`} onClick={() => onSortByNew()}>
          <input type="radio" name="options" id="option1" autoComplete="off" /> Новые
        </label>
        <label className={`btn btn-primary${sort === 'popular' ? ' active' : '' }`} onClick={() => onSortByPopular()}>
          <input type="radio" name="options" id="option2" autoComplete="off" /> Популярные
        </label>
        <label className={`btn btn-primary${sort === 'price' ? ' active' : '' }`} onClick={() => onSortByPrice()}>
          <input type="radio" name="options" id="option3" autoComplete="off" /> По цене
        </label>
      </div>
    </div>
  );
}

const mapStateToProps = ({ sort }) => {
  return { sort };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSortByNew: () => dispatch(adsSort('new')),
    onSortByPopular: () => dispatch(adsSort('popular')),
    onSortByPrice: () => dispatch(adsSort('price'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);