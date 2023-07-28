import { configureStore } from "@reduxjs/toolkit";
import { dharmaSlice } from "./slice";

export default configureStore({
    reducer: {
        dharma: dharmaSlice.reducer
    },
});
