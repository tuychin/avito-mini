import React from 'react';
import { connect } from 'react-redux'

import { adsSort } from '../../actions';

import './sort.css';

const Sort = ({ sort, onSortByNew, onSortByPopular, onSortByPrice, dispatch }) => {

  return (
    <div className="sort">
      <div className="sort btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-primary${sort === 'new' ? ' active' : '' }`} onClick={() => dispatch(onSortByNew())}>
          <input type="radio" name="options" id="option1" autoComplete="off" /> Новые
        </label>
        <label className={`btn btn-primary${sort === 'popular' ? ' active' : '' }`} onClick={() => dispatch(onSortByPopular())}>
          <input type="radio" name="options" id="option2" autoComplete="off" /> Популярные
        </label>
        <label className={`btn btn-primary${sort === 'price' ? ' active' : '' }`} onClick={() => dispatch(onSortByPrice())}>
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
    onSortByNew: () => adsSort('new'),
    onSortByPopular: () => adsSort('popular'),
    onSortByPrice: () => adsSort('price'),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);