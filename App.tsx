import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import IntroScreen from './src/Components/IntroScreen';
import HomeScreen from './src/Components/HomeScreen';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 1000);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text_container}>Nitya Priya Sahu</Text> */}
      {loaded ? <HomeScreen /> : <IntroScreen />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // To center of the Emulator
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
});
