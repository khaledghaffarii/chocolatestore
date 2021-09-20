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

const CakeShow = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const image = route.params.drink['imageUrl'];
  const calories = route.params.drink['calories'];
  const description = route.params.drink['description'];
  const price = route.params.drink['price'];
  const title = route.params.drink['title'];
  console.log(route.params.drink);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View>
        <Image style={styles.categoriesPhoto} source={{uri: image}} />
      </View>
      <Card
        containerStyle={{
          elevation: 5,
          marginTop: 1,
        }}>
        <Card.Title>{title}</Card.Title>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {price} ر.س
        </Text>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginTop: -10,
                marginLeft: 10,
                marginBottom: 10,
                width: 100,
              }}>
              <Button
                title="أضف إلى السلة"
                // onPress={() => {
                //   navigation.navigate('product', {
                //     category: category,
                //     otherCategory: otherCategory,
                //   });
                // }}
              />
            </View>
            <Text
              style={{
                textAlign: 'right',
                fontWeight: '200',
                fontSize: 15,
              }}>
              {calories} سعرة حرارية
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              marginTop: 10,
              marginBottom: 30,
            }}></View>
          <Text>{description}</Text>
        </View>
      </Card>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 1,
    marginLeft: 330,
    marginBottom: 40,
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesPhoto: {
    width: 400,
    height: 350,
    marginTop: -5,
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 0,
    marginVertical: -10,
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

export default CakeShow;
