import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { quoteReducer } from "./reducers/quote";

const Store = configureStore({
  reducer: {
    user: userReducer,
    quote: quoteReducer,
  },
});

export default Store;