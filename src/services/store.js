import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieAPI } from "./movieQuery";



const store = configureStore({
  reducer: {
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});
setupListeners(store.dispatch)
export default store;
