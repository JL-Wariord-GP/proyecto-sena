// store.js
import { configureStore } from "@reduxjs/toolkit";
import containerReducer from "./slices/container.slice";

export default configureStore({
  reducer: {
    container: containerReducer,
    // otros reductores aquí si los tienes
  },
});
