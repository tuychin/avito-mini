
const initialState = {
  ads: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ADS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_ADS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_ADS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;