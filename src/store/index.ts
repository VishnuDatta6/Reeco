import { configureStore } from "@reduxjs/toolkit";

//Reducers
import order from "./order";

const reducer = {
  ordersReducer : order,
};

const store = configureStore({
    reducer,
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;