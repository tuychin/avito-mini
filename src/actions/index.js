/*
Actions Creator
*/

const adsRequested = () => {
  return {
    type: 'FETCH_ADS_REQUEST'
  }
}

const adsLoaded = (newAds) => {
  return {
    type: 'FETCH_ADS_SUCCESS',
    payload: newAds
  }
}

const adsError = (error) => {
  return {
    type: 'FETCH_ADS_FAILURE',
    payload: error
  }
}

//Получение и обработка объявлений из сервиса
const fetchAds = (avitoMiniService, dispatch) => () => {
  dispatch(adsRequested());
  avitoMiniService.getAds()
    .then((data) => dispatch(adsLoaded(data)))
    .catch((err) => dispatch(adsError(err)));
}

export {
  fetchAds
}