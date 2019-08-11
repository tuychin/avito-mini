
const initialState = {
  ads: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'HTTP_ADS_REQUEST':
      return {
        ...state,
        ads: [],
        loading: true,
        error: null
      };

    case 'HTTP_ADS_SUCCESS':
      return {
        ...state,
        ads: action.payload,
        loading: false,
        error: null
      };

    case 'HTTP_ADS_FAILURE':
      return {
        ...state,
        ads: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;