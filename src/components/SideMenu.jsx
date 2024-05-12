// SideMenu.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const SideMenu = ({ onClose }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good evening!');
    }
  }, []);

  return (
    <View style={[styles.container, { zIndex: 1 }]}>
      {/* Greeting */}
      <Text style={styles.greeting}>{greeting}</Text>

      {/* Close Menu */}
     <TouchableOpacity style={styles.menuItem} onPress={onClose}>
  <FontAwesome name="times" size={20} color="black" />
</TouchableOpacity>

      {/* Menu Options */}
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Order History</Text>
      </TouchableOpacity>

      {/* SHOP BY */}
      <Text style={styles.sectionHeader}>SHOP BY</Text>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>All Jewellery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Collections</Text>
      </TouchableOpacity>

      {/* SHOP FOR */}
      <Text style={styles.sectionHeader}>SHOP FOR</Text>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Men</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Women</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Kids</Text>
      </TouchableOpacity>

      {/* Get in touch */}
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Get in touch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 50, // Adjust as needed
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SideMenu;
