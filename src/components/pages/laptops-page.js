import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFilter } from '../../actions';

const LaptopsPage = ({ adsFilter, dispatch }) => {

  useEffect(() => {
    dispatch(adsFilter('laptops'))
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
    adsFilter: adsFilter,
    dispatch
  }
};

export default connect(mapDispatchToProps)(LaptopsPage);