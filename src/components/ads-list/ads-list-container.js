import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withDataService } from '../hoc';

import {
  httpAds,
  updateFavorites,
  updateLoadLimit,
} from '../../actions';

import { compose } from '../../utils';
import AdsList from './ads-list';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';

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
      onUpdateFavorites,
      minValue,
      maxValue,
      search
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

    //Sorting by popular & price
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

    //Price interval filter
    const priceIntervalFilter = (arr, a, b) => { 

      if (a === '' && b === '') {
        return arr;
      }

      if (a === '') {
        return arr.filter(item => (b >= item.price) );
      }

      if (b === '') {
        return arr.filter(item => (a <= item.price) );
      }

      return arr.filter(item => (a <= item.price && item.price <= b) );
    }

    //Search by title
    const searchFilter = (ads, value) => {
      if (value.length === 0) {
        return ads;
      };
  
      return ads.filter((item) => {
        return item.title
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) > -1;
      });
    }
    
    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    //Get filtered and sorted ads data
    const getFilteredAndSortedAds = () => {
      const filteredAds = filterByCategory(ads, favoriteItems, filter);
      const updatedIsFavoriteAds = updateIsFavorite(filteredAds, favoriteItems);
      const sortedAds = sortingAds(updatedIsFavoriteAds, sort);
      const priceIntervalAds = priceIntervalFilter(sortedAds, minValue, maxValue);
      const searchAds = searchFilter(priceIntervalAds, search);
      
      return searchAds;
    }

    const filteredAndSortedAds = getFilteredAndSortedAds();

    if (filteredAndSortedAds.length <= 0) {
      return (
        <div className="jumbotron text-center">
          <h2>Нет объявлений</h2>
        </div>
      );
    }

    return (
      <AdsList
        ads={filteredAndSortedAds}
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
  loadLimit,
  priceInterval: {
    minValue,
    maxValue
  },
  search
}) => {
  return { ads,
    favoriteItems,
    loading,
    error,
    filter,
    sort,
    loadLimit,
    minValue,
    maxValue,
    search
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