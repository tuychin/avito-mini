import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFilter } from '../../actions';

const HomePage = ({ adsFilter, dispatch }) => {

  useEffect(() => {
    dispatch(adsFilter('all'))
  });

  return (
    <section className="home-page">
      <h1>Все объявления</h1>
      <AdsList />
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    adsFilter: adsFilter,
    dispatch
  }
};

export default connect(mapDispatchToProps)(HomePage);