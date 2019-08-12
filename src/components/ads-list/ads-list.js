import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withDataService } from '../hoc';
import { httpAds } from '../../actions';
import { compose } from '../../utils';
import AdsItem from '../ads-item';
import Preloader from '../preloader';
import ErrorIndicator from '../error-indicator';


import './ads-list.css';

const AdsList = ({ ads }) => {

  return (
    <div className="ads-list row">
      {
        ads.map((ads) => {
          return (
            <div className="col-lg-3" key={ads.id}>
              <AdsItem ads={ads} />
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

  filterByCategory( ads, filter ) {

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
          return ads.filter((ads) => ads.isFavorite === filter);
      default:
          return []
    }

  }

  render() {
    const { ads, loading, error, filter } = this.props;

    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    const filteredAds = this.filterByCategory(ads, filter);

    console.log(filteredAds);

    if (filteredAds.length <= 0) {
      return (
        <div className="jumbotron text-center">
          <h2>Нет избранных объявлений</h2>
        </div>
      );
    }

    return <AdsList ads={filteredAds} />;
  }
}

const mapStateToProps = ({ ads, loading, error, filter }) => {
  return { ads, loading, error, filter };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataService } = ownProps;

  return {
    httpAds: httpAds(dataService, dispatch)
  }
}

//Compose in utils
export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(AdsListContainer);