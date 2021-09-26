/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from '@react-navigation/native';
import GridImageView from 'react-native-grid-image-viewer';
import firestore from '@react-native-firebase/firestore';
import LoginScreen from './LoginScreen';

// import Carousel from 'react-native-snap-carousel';
import Carousel from '../components/Carousel';
import {dummyData} from '../data/Data';
import {SearchBar, Card} from 'react-native-elements';
  import FooterScreen from './FooterScreen';
const KandyShow = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const image = route.params.kandy['imageUrl'];
  const calories = route.params.kandy['calories'];
  const description = route.params.kandy['description'];
  const price = route.params.kandy['price'];
  const title = route.params.kandy['title'];
    const weight = route.params.kandy['weight'];
    const code = route.params.kandy['code'];
  console.log(route.params.kandy);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View>
        <Image style={styles.categoriesPhoto} source={{uri: image}} />
      </View>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text
            style={{
              textAlign: 'center',

              fontSize: 20,
            }}>
            {price} ر.س
          </Text>
        </View>
        <View style={styles.other}>
          <Text style={styles.code}>رمز المنتج: {code}</Text>
          <Text style={styles.weight}>الوزن :g {weight}</Text>
          <Text style={styles.calory}> سعرة حرارية : {calories} kal</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: 120,
                width: 150,
                marginBottom: 20,
              }}>
              <Button title="أضف إلى السلة" color="#af8d78" />
            </View>
          </View>
        </View>
      </View>

      <FooterScreen />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  description: {color: '#565f64', marginTop: 30, width: 350},
  calory: {color: '#565f64', marginTop: 5, marginRight: 40},
  other: {
    alignItems: 'center',
    marginBottom: 55,
  },
  code: {
    color: '#565f64',
  },
  weight: {color: '#565f64', marginTop: 30},
  header: {
    flexDirection: 'column',
    marginBottom: 55,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  login: {
    marginTop: 1,
    marginLeft: 330,
    marginBottom: 40,
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesPhoto: {
    width: 200,
    height: 200,
    marginLeft: 100,
  },
  container: {
    backgroundColor: '#fff',
    width: 390,
    marginTop: 10,
  },
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginLeft: 75,
  },
  buttons: {
    width: 100,
    height: 12,
    marginLeft: 75,
  },
  grid: {
    margin: 40,
    marginTop: 20,
    flexDirection: 'row',
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


export default KandyShow;
