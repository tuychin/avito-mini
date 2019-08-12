import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFiltered } from '../../actions';

const AutoPage = ({ filterAds, dispatch }) => {

  useEffect(() => {
    dispatch(filterAds('auto'))
  });

  return (
    <section className="auto-page">
      <h1>Автомобили</h1>
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

export default connect(mapDispatchToProps)(AutoPage);