import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Slick from 'react-native-slick';
import {useNavigation} from '@react-navigation/native';

const CarouselScreens = () => {
  const navigation = useNavigation();
  return (
    <Slick
      showsButtons={false}
      style={styles.wrapper}
      autoplay={true}
      autoplayDirection={true}
      autoplayTimeout={5}>
      <View style={styles.slide1}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/drink.jpg')}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/choco.jpg')}
        />
      </View>
      <View style={styles.slide2}>
        <Image style={styles.tinyLogo} source={require('../assets/cake.jpg')} />
      </View>
      <View style={styles.slide2}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/hotdrink.jpg')}
        />
      </View>
    </Slick>
  );
};

var styles = StyleSheet.create({
  wrapper: {height: 400},
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 410,
    height: 400,
    marginLeft: 0,
    justifyContent: 'center',
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
