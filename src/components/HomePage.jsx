import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo
import SideMenu from './SideMenu';
import Card from './Card'; // Import the Card component

const HomePage = ({ navigation }) => {
  const [searchText, setSearchText] = useState('Search for rings');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Initialize the carouselRef

  useEffect(() => {
    const categories = ['rings', 'pendants', 'bangles', 'wedding collections'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setSearchText(`Search for ${categories[currentIndex]}`);
      currentIndex = (currentIndex + 1) % categories.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        carouselRef.current.scrollTo({ x: Dimensions.get('window').width * (currentIndex + 1), animated: true });
        setCurrentIndex(currentIndex + 1);
      } else {
        carouselRef.current.scrollTo({ x: 0, animated: true });
        setCurrentIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleProfilePress = () => {
    navigation.navigate('LogReg'); // Navigate to the LogReg page
  };

  const handleMenuPress = () => {
    setIsMenuOpen(true); // Open the side menu
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false); // Close the side menu
  };

  const images = [
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Your Logo</Text>

      {/* Profile Image Container */}
      <TouchableOpacity style={styles.profileContainer} onPress={handleProfilePress}>
        {/* Profile Image Icon */}
        <FontAwesome name="user-circle" size={34} color="black" />
      </TouchableOpacity>

      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIcon} onPress={handleMenuPress}>
        <FontAwesome name="bars" size={24} color="black" />
      </TouchableOpacity>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder={searchText}
          placeholderTextColor="#888"
        />
      </View>

      {/* Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
          {/* Add more cards as needed */}
        </View>
      </ScrollView>

      {/* Carousel */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={carouselRef}
        style={[styles.carousel, { width: Dimensions.get('window').width }]}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.carouselItem}>
            <Image source={{ uri: image }} style={styles.carouselImage} />
          </View>
        ))}
      </ScrollView>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View key={index} style={[styles.dot, { backgroundColor: index === currentIndex ? 'black' : '#ccc' }]} />
        ))}
      </View>

      {/* RKD Special */}
      <Text style={styles.rkdSpecial}>RKD Special</Text>

      {/* Subheader */}
      <Text style={styles.subHeader}>Our top picks, just for you!</Text>

      {/* Fancy Line */}
      <View style={styles.fancyLine} />

  {/* Cards */}
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
            <Card
            imageUrl="https://via.placeholder.com/150"
            title="Product 1"
            description="Description of Product 1"
          />
          {/* Add more cards as needed */}
        </View>
      </ScrollView>


      {/* Side Menu */}
      {isMenuOpen && <SideMenu onClose={handleCloseMenu} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50, // Adjust top padding to create space for logo
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center",
    top: -3,
  },
  profileContainer: {
    position: 'absolute', // Position the profile container at the top right corner
    top: 3, // Adjust the top position to align with the logo
    right: 20, // Adjust the right position
    zIndex: 1, // Ensure the icon is above other elements
  },
  menuIcon: {
    position: 'absolute', // Position the menu icon at the top left corner
    top: 3, // Adjust the top position to align with the logo
    left: 30, // Adjust the left position
    zIndex: 1, // Ensure the icon is above other elements
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginTop: -5, // Adjust top margin to create space below the logo
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    marginTop: 0,
    backgroundColor: "white", // Just for visualization, you can remove this
    height: 141,
    marginBottom: 20,
  },
  carousel: {
    marginBottom: 250,
    marginLeft: -10, // Adjust the top margin
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: Dimensions.get('window').width,
    height: 300, // Adjust the height of the carousel
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: -240,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  rkdSpecial: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -200,
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  fancyLine: {
    height: 2,
    backgroundColor: '#E4E4E4',
    marginHorizontal: 20,
    borderRadius: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D4D4D4',
    boxShadow: '1px 1px 1px #D4D4D4, -1px -1px 1px #FFFFFF',
    marginBottom: 20,
  },
  
});

export default HomePage;
