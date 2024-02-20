import { Breed } from '../entities/Breed';
import { BreedSystemAdapter } from '../ports/BreedSystemAdapter';

export class GetBreedUseCase {
  private readonly _breedSystemAdapter: BreedSystemAdapter;

  constructor(breedSystemAdapter: BreedSystemAdapter) {
    this._breedSystemAdapter = breedSystemAdapter;
  }
  async getBreeds(limit?: number, page?: number): Promise<Array<Breed>> {
    const breeds = await this._breedSystemAdapter.getBreeds(limit, page);
    return breeds;
  }

  async getBreedById(id: string): Promise<Breed> {
    return this._breedSystemAdapter.getBreedById(id);
  }
}
