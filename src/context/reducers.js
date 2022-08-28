export const productReducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, allShoses: action.payload };

       case "APPLY_PRICE_RANGE_FILTER" :
        return {...state, filters: {...state.filters , priceRange: action.payload}} 
  
      default:
        return state;
    }
  };
  