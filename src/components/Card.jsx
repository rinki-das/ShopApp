import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ imageUrl, title }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: 100, // Adjust the width as needed
      height: 120, // Adjust the height as needed
      marginRight: 0, // Add margin between cards
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 10,
      marginLeft: 6, // Clip child components to border radius
      elevation: 5, // Add elevation for shadow effect
      backgroundColor: '#fff', // Set a background color to ensure shadow is visible
    },
    image: {
      width: '100%',
      height: 90, // Adjust the height as needed
    },
    textContainer: {
      padding: 5,
    },
    title: {
      fontSize: 14, // Adjust the font size as needed
      fontWeight: 'bold',
    },
   
  });
  

export default Card;
