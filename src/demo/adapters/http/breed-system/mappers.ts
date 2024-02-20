import { Breed } from '~/demo/domain/entities/Breed';
import { BreedDTO } from './BreedDTO';

export const mapBreedFromApiRest = (dto: BreedDTO): Breed => {
  return {
    id: dto.id,
    name: dto.name,
    image: dto.image,
  };
};

export const mapBreedsFromApiRest = (dtos: BreedDTO[]): Breed[] => {
  return dtos.map((dto: BreedDTO) => {
    const { id, name, image } = dto;
    return { id, name, image };
  });
};
