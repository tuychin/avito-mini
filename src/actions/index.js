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

const updateFavorites = (adsId) => {
  return {
    type: 'UPDATE_FAVORITES',
    payload: adsId
  }
}

const updateLoadLimit = (limit) => {
  return {
    type: 'UPDATE_LOAD_LIMIT',
    payload: limit
  }
}

const adsFilter = (filter) => {
  return {
    type: 'ADS_FILTER_BY_CATEGORY',
    payload: filter
  }
}

const adsSort = (sort) => {
  return {
    type: 'ADS_SORT',
    payload: sort
  }
}

const updatePriceInterval = (minValue, maxValue) => {
  return {
    type: 'UPDATE_PRICE_INTERVAL',
    payload: {
      minValue: minValue,
      maxValue: maxValue
    }
  }
}

const searchAds = (value) => {
  return {
    type: 'SEARCH_ADS',
    payload: value
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
  updateFavorites,
  updateLoadLimit,
  adsFilter,
  adsSort,
  updatePriceInterval,
  searchAds
}