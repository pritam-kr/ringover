export const productReducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, allShoses: action.payload };
  
      default:
        return state;
    }
  };
  