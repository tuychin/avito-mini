import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFiltered } from '../../actions';

const HomePage = ({ filterAds, dispatch }) => {

  useEffect(() => {
    dispatch(filterAds(true))
  });

  return (
    <section className="favorites-page">
      <h1>Избранные объявления</h1>
      <AdsList />
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterAds: adsFiltered,
    dispatch
  }
};

export default connect(mapDispatchToProps)(HomePage);