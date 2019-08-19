import React from 'react';
import { connect } from 'react-redux'

import AdsItem from '../ads-item';
import MoreAdsButton from '../more-ads-button';

import './ads-list.css';

const AdsList = ({ ads, onUpdateFavorites, loadLimit }) => {

  //For delayed ads loading
  const loadAds = ads.slice(0, loadLimit);

  return (
    <div className="ads-list row">
      {
        loadAds.map((ads) => {
          return (
            <div className="col-lg-3 col-sm-6 col-12" key={ads.id}>
              <AdsItem
                ads={ads}
                onUpdateFavorites={() => onUpdateFavorites(ads.id)}
                />
            </div>
          )
        })
      }
      <MoreAdsButton ads={ads} />
    </div>
  );
}

const mapStateToProps = ({ loadLimit }) => {
  return { loadLimit };
}

export default connect(mapStateToProps)(AdsList);