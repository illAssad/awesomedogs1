import React from 'react';
import DogDetailsScreen from '../screens/DogDetails';
import DogsListScreen from '../screens/DogsList';
import { Stack } from './types';
import { Color } from '@components/GlobalStyles';

export const StackNavigator = Stack.Navigator;
export const StackScreen = Stack.Screen;

export const RootNavigation = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.FreshBlue,
        },
        headerTintColor: Color.surfaceDefault,
      }}
    >
      <StackScreen
        name="DogsListScreen"
        component={DogsListScreen}
        options={{
          title: 'Dogs',
          headerShown: false,
        }}
      />
      <StackScreen
        name="DogDetailsScreen"
        component={DogDetailsScreen}
        options={{
          title: 'Dogs',
          headerShown: false,
        }}
      />
    </StackNavigator>
  );
};
