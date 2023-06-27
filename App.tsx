import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FadeScreen from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <View style={styles.headerContainer}>
          <Icon name="logo-youtube" color="white" size={30} />
          <Text style={styles.brand}>PeliFlix</Text>
        </View>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
    gap: 12,
  },
  brand: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    letterSpacing: 0.7,
  },
});
