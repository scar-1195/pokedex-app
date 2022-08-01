import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemonReducer: pokemonSlice.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
  }),
});
