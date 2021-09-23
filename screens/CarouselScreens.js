import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Slick from 'react-native-slick';
import {useNavigation} from '@react-navigation/native';

const CarouselScreens = () => {
  const navigation = useNavigation();
  return (
    <Slick
      showsButtons={true}
      style={styles.wrapper}
      autoplay={true}
      autoplayDirection={true}
      autoplayTimeout={5}>
      <View style={styles.slide1}>
        <TouchableOpacity onPress={() => navigation.navigate('all_drink')}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/coffexp.jpeg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.slide2}>
        <TouchableOpacity onPress={() => navigation.navigate('allChocolate')}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/choco.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.slide2}>
        <TouchableOpacity onPress={() => navigation.navigate('allCake')}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/Gâteau.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.slide2}>
        <TouchableOpacity onPress={() => navigation.navigate('all_kandy')}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/kandy.jpg')}
          />
        </TouchableOpacity>
      </View>
    </Slick>
  );
};

var styles = StyleSheet.create({
  wrapper: {height: 130},
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 395,
    height: 175,
    marginLeft: 0
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default CarouselScreens;
