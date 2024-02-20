import { Http } from '~/demo/adapters/~/api/Http';
import { BreedDTO } from '~/demo/adapters/http/breed-system/BreedDTO';
import { BreedSystemAdapter } from '~/demo/domain/ports/BreedSystemAdapter';
import { mapBreedFromApiRest, mapBreedsFromApiRest } from './mappers';

export const breedSystemHttpAdapter = (client: Http): BreedSystemAdapter => ({
  getBreeds: async (limit, page) => {
    const dtos = await client.get<BreedDTO[]>('', { limit, page });

    return mapBreedsFromApiRest(dtos);
  },
  getBreedById: async (id) => {
    const dto = await client.get<BreedDTO>('', { id });
    return mapBreedFromApiRest(dto);
  },
});
