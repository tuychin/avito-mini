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
    <section className="ads-list row">
      {
        ads.map((ads) => {
          return (
            <div className="col-lg-3" key={ads.id}>
              <AdsItem ads={ads} />
            </div>
          )
        })
      }
    </section>
  );
}

class AdsListContainer extends Component {
  componentDidMount() {
    this.props.httpAds();
  }  

  render() {
    const { ads, loading, error } = this.props;

    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <AdsList ads={ads} />;
  }
}

const mapStateToProps = ({ ads, loading, error }) => {
  return { ads, loading, error };
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