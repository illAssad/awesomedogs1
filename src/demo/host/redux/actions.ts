import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpAxios } from '../../adapters/http/api/HttpAxios';
import { breedSystemHttpAdapter } from '../../adapters/http/breed-system/BreedSystemHttpAdapter';
import { GetBreedUseCase } from '../../domain/usecases/GetBreedUseCase';

export type paramType = { limit: number; page: number };

export const getBreedsAction = createAsyncThunk(
  'dogs/getBreeds',
  async (params: paramType, thunkAPI) => {
    try {
      const responseBreeds = await new GetBreedUseCase(
        breedSystemHttpAdapter(httpAxios),
      ).getBreeds(params.limit, params.page);
      return responseBreeds;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
