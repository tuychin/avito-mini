import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import AdsList from '../ads-list';
import { adsFiltered } from '../../actions';

const ImmovablePage = ({ adsFiltered, dispatch }) => {

  useEffect(() => {
    dispatch(adsFiltered('immovable'))
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
    adsFiltered: adsFiltered,
    dispatch
  }
};

export default connect(mapDispatchToProps)(ImmovablePage);