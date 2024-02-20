import { Breed } from '../entities/Breed';

export interface BreedSystemAdapter {
  getBreeds: (limit?: number, page?: number) => Promise<Breed[]>;
  getBreedById: (id: string) => Promise<Breed>;
}
