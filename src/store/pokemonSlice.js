import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    onStartLoading: state => {
      state.isLoading = true;
      state.pokemons = [];
    },

    onSetPokemonData: (state, { payload }) => {
      state.isLoading = false;
      state.pokemons = payload.pokemons;
    },

    onGetPokemonById: (state, { payload }) => {
      state.isLoading = false;
      state.pokemons = payload.pokemons;
    },
  },
});

export const { onStartLoading, onSetPokemonData, onGetPokemonById } = pokemonSlice.actions;
