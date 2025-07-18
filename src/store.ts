import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice.ts";
import cardReducer from "./features/cards/cardSlice.ts";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cards: cardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch