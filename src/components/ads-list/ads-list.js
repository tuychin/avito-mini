import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withDataService } from '../hoc';
import { httpAds, updateFavorites } from '../../actions';
import { compose } from '../../utils';
import AdsItem from '../ads-item';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';


import './ads-list.css';

const AdsList = ({ ads, onUpdateFavorites }) => {

  return (
    <div className="ads-list row">
      {
        ads.map((ads) => {
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
    </div>
  );
}

class AdsListContainer extends Component {
  componentDidMount() {
    this.props.httpAds();
  }

  render() {
    const { ads, favoriteItems, loading, error, filter, onUpdateFavorites } = this.props;

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
            return []
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
    const transformedAds = updateIsFavorite(filteredAds, favoriteItems);

    console.log(transformedAds);
    

    if (filteredAds.length <= 0) {
      return (
        <div className="jumbotron text-center">
          <h2>Нет объявлений</h2>
        </div>
      );
    }

    return <AdsList ads={transformedAds} onUpdateFavorites={onUpdateFavorites} />;
  }
}

const mapStateToProps = ({ ads, favoriteItems, loading, error, filter }) => {
  return { ads, favoriteItems, loading, error, filter };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataService } = ownProps;

  return {
    httpAds: httpAds(dataService, dispatch),
    onUpdateFavorites: (id) => dispatch(updateFavorites(id))
  }
}

//Compose in utils
export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(AdsListContainer);