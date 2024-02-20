import MockBreedSystemHttpAdapter from '~/demo/adapters/http/breed-system/MockBreedSystemHttpAdapter';
import { GetBreedUseCase } from '../GetBreedUseCase';

const mockBreedSystemHttpAdapter = new MockBreedSystemHttpAdapter(1, 10);
const getBreedUseCase = new GetBreedUseCase(mockBreedSystemHttpAdapter);

describe('GetBreedUseCase', () => {
  it('should be defined', () => {
    expect(getBreedUseCase.getBreeds()).toBeDefined();
  });

  it('should return a list of ten dogs', async () => {
    const result = await getBreedUseCase.getBreeds(1, 10);
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toEqual(10);
  });
});
