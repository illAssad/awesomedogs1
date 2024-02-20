import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Breed } from '~/demo/domain/entities/Breed';
import { getBreedsAction } from './actions';

export interface DogsState {
  breeds: Breed[];
  loading: boolean;
}

const initialState: DogsState = {
  breeds: [] as Breed[],
  loading: false,
};

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    saveBreedToStore: (state, action: PayloadAction<Array<Breed>>) => {
      state.breeds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBreedsAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBreedsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.breeds = action.payload;
    });
    builder.addCase(getBreedsAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { saveBreedToStore } = dogsSlice.actions;
export default dogsSlice.reducer;
