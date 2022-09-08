import axios from "axios";

const ProductReducer = (state, action) => {
  if (action.type === "fill_cart") {
    console.log("payload", action.payload);
    return {
      allproducts: [...action.payload],
      loading: false,
      searchedProducts: [...action.payload]
    };
  }
  if (action.type === "searchfilter") {
    let { allproducts } = state;
    let length = action.payload.length;
    let data = allproducts.filter(({ title }) => {
      if (length == 0) return false;
      else
        return title.slice(0, length).toUpperCase() ===
          action.payload.toUpperCase()
          ? true
          : false;
    });
    console.log("length", data.length);

    if (data.length === 0)
      return { ...state, searchedProducts: [...allproducts] };
    else return { ...state, searchedProducts: [...data] };
  }
  if (action.type === "category") {
    let { searchedProducts, allproducts } = state;
    if (action.payload === "all")
      return {
        ...state,
        searchedProducts: [...allproducts]
      };
    else {
      let data = allproducts.filter((item) => {
        return item.category === action.payload;
      });
      return {
        ...state,
        searchedProducts: [...data]
      };
    }
  }

  if (action.type === "sort") {
    let { searchedProducts } = state;

    if (action.payload === "low") {
      let data = searchedProducts.sort((a, b) => {
        return a.price - b.price;
      });
      return { ...state, searchedProducts: [...data] };
    } else if (action.payload === "high") {
      let data = searchedProducts.sort((a, b) => {
        return b.price - a.price;
      });
      return { ...state, searchedProducts: [...data] };
    } else return { ...state };
  }
};

export default ProductReducer;
