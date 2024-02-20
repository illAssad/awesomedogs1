import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import * as reactRedux from 'react-redux';
import DogsListScreen from '..';

const mockBreeds = [
  {
    id: 1,
    name: 'Breed 1',
    image: 'breed1.png',
  },
  {
    id: 2,
    name: 'Breed 2',
    image: 'breed2.png',
  },
];

const mockedState = {
  dogs: {
    breeds: mockBreeds,
  },
};

jest.mock('~/demo/domain/usecases/GetBreedUseCase', () => ({
  GetBreedUseCase: jest.fn().mockImplementation(() => ({
    getBreeds: jest.fn().mockResolvedValue(mockBreeds),
  })),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('DogsListScreen', () => {
  let useSelectorMock;
  let useDispatchMock;

  beforeEach(() => {
    useSelectorMock = reactRedux.useSelector.mockImplementation((callback) => {
      return callback(mockedState);
    });
    useDispatchMock = jest
      .spyOn(reactRedux, 'useDispatch')
      .mockReturnValue(jest.fn());
  });

  afterEach(() => {
    useSelectorMock.mockRestore();
    useDispatchMock.mockRestore();
  });

  it('renders breeds correctly', async () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };
    const { getByText, getAllByTestId } = render(
      <DogsListScreen navigation={mockNavigation} route={{}} />,
    );

    await act(async () => {
      await waitFor(() => {
        // Check if the breed names are rendered
        mockBreeds.forEach((breed) => {
          expect(getByText(breed.name)).toBeTruthy();
        });

        // Check if the correct number of breed containers are rendered
        const breedContainers = getAllByTestId('breed-container');
        expect(breedContainers.length).toBe(mockBreeds.length);
      });
    });
  }, 65000);

  it('navigates to DogDetailsScreen when breed is selected', async () => {
    const mockSelectedBreed = mockBreeds[0];
    const mockNavigation = {
      navigate: jest.fn(),
    };
    const { getByText } = render(
      <DogsListScreen navigation={mockNavigation} route={{}} />,
    );

    await act(async () => {
      await waitFor(() => {
        const breedName = getByText(mockSelectedBreed.name);
        fireEvent.press(breedName);

        expect(mockNavigation.navigate).toHaveBeenCalledWith(
          'DogDetailsScreen',
          mockSelectedBreed,
        );
      });
    });
  });
});
