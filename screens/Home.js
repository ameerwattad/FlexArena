import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.touchable}>
        <Image
          source={require('../assets/images/HomeLogo.jpg')}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.line} />
      </TouchableOpacity>
      

      <View style={styles.blueContainer}>
        <View style={[styles.searchContainer, { paddingRight: 80 }]}>
          <Searchbar
            placeholder="Search"
            style={{ backgroundColor: 'white', color: 'black', width: '100%' }}
          />
          <TouchableOpacity onPress={() => console.log("Button pressed")} style={styles.iconContainer}>
            <Image source={require('./../assets/images/reorder-horizontal.png')} style={{ width: 40, height: 40, paddingRight: 45 }} />
          </TouchableOpacity>
          <AntDesign name="search1" size={30} color="black" style={styles.searchIcon} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
       
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
          <Image source={require('./../assets/images/google_logo.png')} style={styles.carouselImage} />
        
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 0, 
  },
  touchable: {
    width: '100%', 
    alignItems: 'center', 
  },
  logo: {
    width: '100%', 
    height: 140,
    marginTop: -74, 
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: '#333',
  },
  blueContainer: {
    height: 80, 
    backgroundColor: 'lightblue', 
  },
  searchContainer: {
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  searchbar: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
  },
  iconContainer: {
    padding: 10, 
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10, 
    marginRight: 10,
  },
  categoriesContainer: {
    backgroundColor: 'lightgreen',
    height: 150,
    marginTop: 20, 
    flexDirection: 'row',
  },
  carouselImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10, 
  },
}); 