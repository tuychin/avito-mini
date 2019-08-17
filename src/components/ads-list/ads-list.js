import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withDataService } from '../hoc';

import {
  httpAds,
  updateFavorites,
  updateLoadLimit
} from '../../actions';

import { compose } from '../../utils';
import AdsItem from '../ads-item';
import MoreAdsButton from '../more-ads-button';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';


import './ads-list.css';

const AdsList = ({ ads, onUpdateFavorites, loadLimit }) => {

  const loadAds = ads.slice(0, loadLimit);

  return (
    <div className="ads-list row">
      {
        loadAds.map((ads) => {
          return (
            <div className="col-lg-3" key={ads.id}>
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

class AdsListContainer extends Component {
  componentDidMount() {
    this.props.httpAds();
    this.props.resetLoadLimit(12);
  }

  render() {
    const {
      ads,
      favoriteItems,
      loading,
      error,
      filter,
      sort,
      loadLimit,
      onUpdateFavorites
    } = this.props;

    //Filtering by category
    const filterByCategory = ( ads, favoriteItems, filter ) => {    
      switch(filter) {
        case 'all':
          return ads;
        case 'immovable':
          return ads.filter((ads) => ads.category === filter);
        case 'cameras':
          return ads.filter((ads) => ads.category === filter);
        case 'auto':
          return ads.filter((ads) => ads.category === filter);
        case 'laptops':
          return ads.filter((ads) => ads.category === filter);
        case 'favorites':
          return favoriteItems;
        default:
            return <ErrorIndicator />;
      }
    }

    //Sorting
    const sortingAds = (ads, sortBy) => {

      ads.forEach(element => {
        if (element.price === undefined) {
          element.price = 0;
        }
      });

      switch(sortBy) {
        case 'new':
          return ads;
        case 'popular':
          return ads.sort(
            (a, b) => a.sellerRating > b.sellerRating ? 1 : -1
          ).reverse();
        case 'price':
          return ads.sort((a, b) => a.price > b.price ? 1 : -1);
        default:
            return <ErrorIndicator />;
      }
    }

    //Transform filteredAds for update isFavorite value
    const updateIsFavorite = (ads, favoriteItems) => {
      return (
        ads.map((adsItem) => {
        const favoriteItem = favoriteItems.find(({id}) => id === adsItem.id);
        if (favoriteItem === undefined) {
          return {...adsItem, isFavorite: false};
        }
          return {...adsItem, isFavorite: true};
        })
      );
    }
    
    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    const filteredAds = filterByCategory(ads, favoriteItems, filter);
    const filteredFavoritesAds = updateIsFavorite(filteredAds, favoriteItems);
    const filteredFavoritesSortedAds = sortingAds(filteredFavoritesAds, sort);

    if (filteredFavoritesSortedAds.length <= 0) {
      return (
        <div className="jumbotron text-center">
          <h2>Нет объявлений</h2>
        </div>
      );
    }

    return (
      <AdsList
        ads={filteredFavoritesSortedAds}
        onUpdateFavorites={onUpdateFavorites}
        loadLimit={loadLimit}
      />
    );
  }
}

const mapStateToProps = ({
  ads,
  favoriteItems,
  loading,
  error,
  filter,
  sort,
  loadLimit
}) => {
  return { ads,
    favoriteItems,
    loading,
    error,
    filter,
    sort,
    loadLimit
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataService } = ownProps;

  return {
    httpAds: httpAds(dataService, dispatch),
    onUpdateFavorites: (id) => dispatch(updateFavorites(id)),
    resetLoadLimit: (limit) => dispatch(updateLoadLimit(limit))
  }
}

//Compose in utils
export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(AdsListContainer);