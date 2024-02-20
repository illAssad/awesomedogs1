import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from '~/demo/views/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Screens = () => {
  const navigationRef = useRef(null);
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Screens;
