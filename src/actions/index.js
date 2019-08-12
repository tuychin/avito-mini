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

const adsFiltered = (filter) => {
  return {
    type: 'ADS_FILTERED',
    payload: filter
  }
}

//Получение и обработка объявлений из сервиса
const httpAds = (dataService, dispatch) => () => {
  dispatch(adsRequested());
  dataService.getAdsData()
    .then((data) => dispatch(adsLoaded(data)))
    .catch((err) => dispatch(adsError(err)));
}

export {
  httpAds,
  adsFiltered
}