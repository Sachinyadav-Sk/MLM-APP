import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking, ImageSourcePropType } from 'react-native';
import { View, Text } from 'react-native';

// Import your logo as an image (adjust path accordingly). 
// For SVG support, consider using `react-native-svg` and its Image component.
// import logo from './assets/logo912.png'; // Ensure the path is correct and the file exists.

//<reference types="react-native" />






const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={logo} style={styles.logo} /> */}
        <Text style={styles.text}>
          Edit <Text style={styles.code}>src/App.tsx</Text> and save to reload.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://reactjs.org')}>
          <Text style={styles.link}>Learn React</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 40,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  code: {
    fontSize: 16,
    fontFamily: 'monospace',
  },
  link: {
    color: '#61dafb',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});


export default App;
