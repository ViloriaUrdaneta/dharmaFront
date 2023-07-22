import { configureStore } from "@reduxjs/toolkit";
import { giveLinkSlice } from "./slice";

export default configureStore({
    reducer: {
        giveLink: giveLinkSlice.reducer
    },
});
