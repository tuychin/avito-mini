import React from 'react';
import { connect } from 'react-redux'

import { searchAds } from '../../actions';

import './search-panel.css';

const SearchPanel = ({ search, onSearchAds, dispatch }) => {

  const onSearchChange = (evt) => {
    const value = evt.target.value;
    dispatch(onSearchAds(value));
  }

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        value={search}
        placeholder="Поиск"
        onChange={onSearchChange}
        />
    </form>
  );
}

const mapStateToProps = ({ search }) => {
  return { search };
}

const mapDispatchToProps = (dispatch) => {  
  return {
    onSearchAds: (value) => searchAds(value),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);