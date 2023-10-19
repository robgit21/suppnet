import { configureStore } from "@reduxjs/toolkit";
import { ytVideoReducer } from "./ytVideoItemSlice";
import { authApi, ytVideoItemApi } from "../../Apis";
import { userAuthReducer } from "./userAuthSlice";

const store = configureStore({
  reducer: {
    ytVideoStore: ytVideoReducer,
    userAuthStore: userAuthReducer,
    [ytVideoItemApi.reducerPath]: ytVideoItemApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ytVideoItemApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
