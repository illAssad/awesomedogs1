import { Http } from '~/demo/adapters/http/api/Http';
import { BreedDTO } from '~/demo/adapters/http/breed-system/BreedDTO';
import { BreedSystemAdapter } from '~/demo/domain/ports/BreedSystemAdapter';
import { breedSystemHttpAdapter } from '../BreedSystemHttpAdapter';
import { mapBreedsFromApiRest } from '../mappers';

jest.mock('~/demo/adapters/http/breed-system/mappers', () => ({
  BreedDTO: jest.fn(),
  mapBreedFromApiRest: jest.fn(),
  mapBreedsFromApiRest: jest.fn(),
}));

jest.mock('~/demo/adapters/http/api/Http', () => ({
  Http: jest.fn(),
}));

describe('breedSystemHttpAdapter', () => {
  let client: Http;
  let breedSystemAdapter: BreedSystemAdapter;

  beforeEach(() => {
    client = new Http();
    breedSystemAdapter = breedSystemHttpAdapter(client);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getBreeds', () => {
    it('should call client.get with the correct parameters', async () => {
      const limit = 10;
      const page = 1;
      const dtos: BreedDTO[] = [];

      client.get = jest.fn().mockResolvedValue(dtos);
      mapBreedsFromApiRest.mockReturnValue([]);

      await breedSystemAdapter.getBreeds(limit, page);

      expect(client.get).toHaveBeenCalledWith('', { limit, page });
    });

    it('should call mapBreedsFromApiRest with the correct parameters', async () => {
      const limit = 10;
      const page = 1;
      const dtos: BreedDTO[] = [];

      client.get = jest.fn().mockResolvedValue(dtos);
      mapBreedsFromApiRest.mockReturnValue([]);

      await breedSystemAdapter.getBreeds(limit, page);

      expect(mapBreedsFromApiRest).toHaveBeenCalledWith(dtos);
    });

    it('should return the mapped breeds', async () => {
      const limit = 10;
      const page = 1;
      const dtos: BreedDTO[] = [
        { id: '1', name: 'Breed 1', image: { url: '' } },
      ];

      client.get = jest.fn().mockResolvedValue(dtos);
      mapBreedsFromApiRest.mockReturnValue([{ id: '1', name: 'Breed 1' }]);

      const result = await breedSystemAdapter.getBreeds(limit, page);

      expect(result).toEqual([{ id: '1', name: 'Breed 1' }]);
    });
  });
});
