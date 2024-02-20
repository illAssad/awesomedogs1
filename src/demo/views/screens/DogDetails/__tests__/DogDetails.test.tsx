import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import DogDetailsScreen from '..';

describe('DogDetailsScreen', () => {
  it('should render the screen correctly', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const routeMock = {
      params: {
        image: { url: 'image-url' },
        name: 'Breed Name',
      },
    };

    const { getByText, getByTestId, getAllByText } = render(
      <DogDetailsScreen navigation={navigationMock} route={routeMock} />,
    );

    // Assert that the screen title is rendered correctly
    const titleText = getAllByText('Details');
    expect(titleText).toBeTruthy();

    // Assert that the breed name is rendered correctly
    const breedName = getByText('Breed Name');
    expect(breedName).toBeTruthy();

    // Assert that the image is rendered correctly
    const image = getByTestId('dog-image');
    expect(image).toBeTruthy();
    expect(image.props.source).toEqual({ url: 'image-url' });
  });

  it('should navigate back when the back button is pressed', async () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const routeMock = {
      params: {
        image: 'image-url',
        name: 'Breed Name',
      },
    };

    const { getByTestId } = render(
      <DogDetailsScreen navigation={navigationMock} route={routeMock} />,
    );

    await waitFor(() => {
      // Simulate pressing the back button
      const backButton = getByTestId('back-button');
      fireEvent.press(backButton);

      // Verify that the navigate function is called with the correct screen name
      expect(navigationMock.navigate).toHaveBeenCalledWith('DogsListScreen');
    });
  });
});
