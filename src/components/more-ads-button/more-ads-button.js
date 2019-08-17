import React from 'react';
import { connect } from 'react-redux'

import { updateLoadLimit } from '../../actions';

import './more-ads-button.css';

const MoreAdsButton = ({ ads, loadLimit, onIncreaseLoadLimit, dispatch }) => {

  if (loadLimit >= ads.length) {
    return null;
  }

  return (
    <div className="more-ads-btn">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(onIncreaseLoadLimit(loadLimit + 12))}>
        Больше объявлений
      </button>
    </div>
  );
}

const mapStateToProps = ({ loadLimit }) => {
  return { loadLimit };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseLoadLimit: (loadLimit) => updateLoadLimit(loadLimit),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreAdsButton);