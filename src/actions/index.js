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

//Получение и обработка объявлений из сервиса
const httpAds = (avitoService, dispatch) => () => {
  dispatch(adsRequested());
  avitoService.getAds()
    .then((data) => dispatch(adsLoaded(data)))
    .catch((err) => dispatch(adsError(err)));
}

export {
  httpAds
}