import { createSlice } from "@reduxjs/toolkit";

export const PreloaderSlice = createSlice({
  name: "preloader",
  initialState: {
    loading: false,
  },

  reducers: {
    openPreloader: (state) => {
      state.loading = true;
    },

    closePreloader: (state) => {
      state.loading = false;
    },
  },
});

// export  const { openPreloader, closePreloader } = PreloaderSlice.actions;
