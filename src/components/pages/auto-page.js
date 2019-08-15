import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFilter } from '../../actions';

const AutoPage = ({ adsFilter, dispatch }) => {

  useEffect(() => {
    dispatch(adsFilter('auto'))
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
    adsFilter: adsFilter,
    dispatch
  }
};

export default connect(mapDispatchToProps)(AutoPage);