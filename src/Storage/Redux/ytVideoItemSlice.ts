import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ytVideoItem: [],
};

export const ytVideoItemSlice = createSlice({
  name: "YTVideoItem",
  initialState: initialState,
  reducers: {
    setYTVideoItem: (state, action) => {
      state.ytVideoItem = action.payload;
    },
  },
});

export const { setYTVideoItem } = ytVideoItemSlice.actions;
export const ytVideoReducer = ytVideoItemSlice.reducer;
