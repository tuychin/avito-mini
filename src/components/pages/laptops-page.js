import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFiltered } from '../../actions';

const LaptopsPage = ({ filterAds, dispatch }) => {

  useEffect(() => {
    dispatch(filterAds('laptops'))
  });

  return (
    <section className="laptops-page">
      <h1>Ноутбуки</h1>
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

export default connect(mapDispatchToProps)(LaptopsPage);