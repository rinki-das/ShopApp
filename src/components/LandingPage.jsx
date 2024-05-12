// LandingPage.js

import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Navigate to Home Page after a delay
    }, 3000); // Display landing page for 3 seconds
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
     <Image
  source={require('../../assets/landing.jpg')}

  style={styles.image}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default LandingPage;
