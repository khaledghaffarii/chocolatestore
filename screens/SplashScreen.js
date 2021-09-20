import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
// import GridImageView from 'react-native-grid-image-viewer';
// import firestore from '@react-native-firebase/firestore';
// import LoginScreen from '../screens/LoginScreen';
// import {NavigationContainer, useNavigation} from '@react-navigation/native';
// // import Carousel from 'react-native-snap-carousel';
// //import Carousel from '../components/Carousel';
// import {dummyData} from '../data/Data';
// import {SearchBar, Card} from 'react-native-elements';
// import * as RootNavigation from './RootNavigation';
// import CarouselScreens from '../screens/CarouselScreens';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    },3000);
  }, []);
  return (
    <View>
      <View>
        <Image
          style={{height: 770, width: 412, resizeMode: 'stretch'}}
          source={require('../assets/splash8.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 5,
    marginLeft: 270,
    marginBottom: 40,
    fontSize: 17,
    color: '#f9ab37',
    fontWeight: 'bold',
    width: 100,
  },
  categoriesPhoto: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    marginHorizontal: 0,

    marginTop: 5,
  },
  container1: {},
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -225,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  recomended1: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -210,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginTop: 10,
    marginLeft: 75,
  },
  buttons: {
    width: 100,
    height: 12,
    marginLeft: 75,
  },
  grid: {
    margin: 0,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  grid2: {
    margin: 0,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 30,
  },

  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
});
export default SplashScreen;
