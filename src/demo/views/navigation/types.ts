import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  DogsListScreen: undefined;
  DogsDetailsScreen: undefined;
};

export type RootRouteParamList = {
  DogsListScreen: undefined;
  DogsDetailsScreen: undefined;
};

export type DogsListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DogsListScreen'>;
  route: RouteProp<RootRouteParamList, 'DogsListScreen'>;
};
export type DogsDetailsScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'DogsDetailsScreen'
  >;
  route: RouteProp<RootRouteParamList, 'DogsDetailsScreen'>;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
