/*
Actions Creator
*/

const adsRequested = () => {
  return {
    type: 'HTTP_ADS_REQUEST'
  }
}

const adsLoaded = (newAds) => {
  return {
    type: 'HTTP_ADS_SUCCESS',
    payload: newAds
  }
}

const adsError = (error) => {
  return {
    type: 'HTTP_ADS_FAILURE',
    payload: error
  }
}

const adsFilter = (filter) => {
  return {
    type: 'ADS_FILTER_BY_CATEGORY',
    payload: filter
  }
}

const updateFavorites = (adsId) => {
  return {
    type: 'FAVORITES_UPDATE',
    payload: adsId
  }
}

//Get data
const httpAds = (dataService, dispatch) => () => {
  dispatch(adsRequested());
  dataService.getAdsData()
    .then((data) => dispatch(adsLoaded(data)))
    .catch((err) => dispatch(adsError(err)));
}

export {
  httpAds,
  adsFilter,
  updateFavorites
}