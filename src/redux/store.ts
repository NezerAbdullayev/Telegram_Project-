import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // [rootApi.reducerPath]: rootApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware),
  devTools: true
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
