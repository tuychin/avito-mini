import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFiltered } from '../../actions';

const CamerasPage = ({ adsFiltered, dispatch }) => {

  useEffect(() => {
    dispatch(adsFiltered('cameras'))
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
    adsFiltered: adsFiltered,
    dispatch
  }
};

export default connect(mapDispatchToProps)(CamerasPage);