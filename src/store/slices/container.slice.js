// container.slice.js
import { createSlice } from "@reduxjs/toolkit";

export const containerSlice = createSlice({
  name: "container",
  initialState: {
    signUpMode: false,
    redirectTo: null, // Estado para almacenar la ruta de redirección
  },
  reducers: {
    setSignUpMode: (state, action) => {
      state.signUpMode = action.payload;
      // Define la ruta de redirección según el modo
      state.redirectTo = action.payload ? "/register" : "/";
    },
    clearRedirectTo: (state) => {
      state.redirectTo = null; // Limpia la ruta de redirección
    },
  },
});

export const { setSignUpMode, clearRedirectTo } = containerSlice.actions;
export default containerSlice.reducer;
