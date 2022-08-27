import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../backend/data";
import {
  findUniqueType,
  findUniqueColor,
  findUniqueRating,
} from "../utils/findUniqueValue";
import { productReducer } from "./reducers";

const ProductContext = createContext(null);

const initialState = {
  allShoses: [],
  cart: [],
  filters: {
    uniqueColors: [],
    uniqueTypes: [],
    priceRange: null,
    type: null,
    rating: null,
  },
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const shoes = state.allShoses;

  // Filter range
  // 400 to 700
  // 700 +

  const filteredPriceRangeShoes = (array, startPoint, endPoint) => {
    return array.filter(
      (eachShoes) =>
        eachShoes.price >= startPoint && eachShoes.price <= endPoint
    );
  };

  console.log(filteredPriceRangeShoes(shoes, 121, 400));

  // Get unique colors
  const getUniqueColor = findUniqueColor(shoes);

  // Get Shoes types
  const getUniqueType = findUniqueType(shoes);

  // Get Shoes rating
  const getUniqueRating = findUniqueRating(shoes);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: data.products });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        getUniqueColor,
        getUniqueType,
        getUniqueRating,
      }}
    >
      {" "}
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
