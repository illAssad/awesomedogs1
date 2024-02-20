import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '~/store';
import DogsListScreen from '../../screens/DogsList';

const createTestProps = ({}) => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn(),
  },
  route: {
    params: {},
  },
});

describe('Dogs Stack', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  it('DogsList Screens renders correctly', () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <DogsListScreen {...props} />
        </NavigationContainer>
      </Provider>,
    );

    // RNCSafeAreaProvider is the project component of the navigation stack
    const dogsListScreen = screen.queryAllByRole('RNCSafeAreaProvider');
    expect(dogsListScreen).toBeTruthy();
  });
});
