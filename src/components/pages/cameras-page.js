import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFilter } from '../../actions';

const CamerasPage = ({ adsFilter, dispatch }) => {

  useEffect(() => {
    dispatch(adsFilter('cameras'))
  });
  
  return (
    <section className="cameras-page">
      <h1>Камеры</h1>
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

export default connect(mapDispatchToProps)(CamerasPage);