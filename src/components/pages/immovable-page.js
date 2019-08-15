import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFilter } from '../../actions';

const ImmovablePage = ({ adsFilter, dispatch }) => {

  useEffect(() => {
    dispatch(adsFilter('immovable'))
  });

  return (
    <section className="immovable-page">
      <h1>Недвижимость</h1>
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

export default connect(mapDispatchToProps)(ImmovablePage);