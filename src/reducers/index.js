const initialState = {
  ads: [],
  favoriteItems: [],
  filter: 'all',
  sort: 'new',
  loading: true,
  error: null
};

const updateArray = (array, item, idx) => {
  
  if (array.find(({id}) => id === item.id) === undefined) {
    //Add item
    return [
      item,
      ...array
    ];
  }
  
  //Delete item
  return [
    ...array.slice(0, idx),
    ...array.slice(idx + 1)
  ];
}

const updateAdsItem = (array, item, idx) => {
  //Update item
  return [
    ...array.slice(0, idx),
    item,
    ...array.slice(idx + 1)
  ]
}

//Update item
const updateFavoriteItem = (item) => {

  const {
    id,
    title,
    price,
    images,
    category,
    isFavorite,
    sellerName,
    sellerRating
  } = item;

  return {
    id,
    title,
    price,
    images,
    category,
    isFavorite: !isFavorite,
    sellerName,
    sellerRating
  }
}

//Update favorite items
const updateFavoriteItems = (state, adsId) => {
  const { ads, favoriteItems } = state;
  const adsItem = ads.find(({id}) => id === adsId);
  const favoriteItemIndex = favoriteItems.findIndex(({id}) => id === adsId);
  const adsItemIndex = ads.findIndex(({id}) => id === adsId);
  const newAdsItem = updateFavoriteItem(adsItem);

  return {
    ...state,
    ads: updateAdsItem(ads, newAdsItem, adsItemIndex),
    favoriteItems: updateArray(favoriteItems, newAdsItem, favoriteItemIndex)
  };
}

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

    case 'FAVORITES_UPDATE':
      return updateFavoriteItems(state, action.payload);

    case 'ADS_FILTER_BY_CATEGORY':
      return {
        ...state,
        filter: action.payload
      };

    case 'ADS_SORT':
      return {
        ...state,
        sort: action.payload
      };
    
    default:
      return state;
  }
}

export default reducer;