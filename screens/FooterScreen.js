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
  Pressable,
  Linking,
} from 'react-native';
import {Link} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {Card} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import CarouselScreens from '../screens/CarouselScreens';
import {addToBasket} from '../slice/BasketSlice';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FooterScreen = () => {
  const image = {
    uri: 'https://media.zid.store/cdn-cgi/image/w=60,h=60,q=%E2%80%A6o/https://media.zid.store/static/bankTransfer.png',
  };

  return (
    <View style={styles.container}>
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>من نحن </Text>
        <Text style={styles.aboutText}>
          دلة وحلا متخصصين بالحلا المميز ،مـعـكـم بـكـل حـب
        </Text>
      </View>
      <View style={styles.folowing}>
        <Text style={styles.folowingTite}>تابعنا على </Text>
        <View style={styles.Icon}>
          <Pressable
            style={{marginRight: 5}}
            onPress={() => {
              Linking.openURL('https://www.instagram.com/dallah_hala/');
            }}>
            <Ionicons name="ios-logo-instagram" size={20} color="#8f6f64" />
          </Pressable>
          <Pressable onPress={() => {}}>
            <Ionicons name="logo-whatsapp" size={20} color="#8f6f64" />
          </Pressable>
        </View>
      </View>
      <View style={styles.otherThing}>
        <Text style={styles.otherText}>
          صنع بـ <Ionicons name="heart" size={15} color="#eb2748" /> من دله و
          حلا 2021
        </Text>
      </View>
      <View style={styles.imageBlock}>
        <Image
          style={styles.TransfertImage}
          source={require('../assets/bankTransfer.png')}
        />
        <Image
          style={styles.TransfertImage}
          source={require('../assets/cod.webp')}
        />
        <Image
          style={styles.TransfertImage}
          source={require('../assets/mandob.png')}
        />
      </View>
      <View style={styles.taxNumber}>
        <Pressable
          onPress={() => {
            Linking.openURL(
              'https://media.zid.store/2c22e5d9-c30d-46d3-b9db-cca99570bd19/6d38ee7a-4529-4c48-8c1c-9d2295511b5b.jpg?_ga=2.162794172.1249815168.1632317971-264294880.1632317971',
            );
          }}>
          <Image
            style={styles.TaxImage}
            source={require('../assets/vat-certificate.jpg')}
          />
        </Pressable>

        <Text style={styles.taxText}>الرقم الضريبي: 3106211819213001</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4dcd2',
    height: 350,
  },
  about: {
    textAlign: 'right',
    margin: 20,
  },
  aboutTitle: {
    color: '#565f64',
    fontWeight: 'bold',
    fontSize: 17,
  },
  aboutText: {
    color: '#606060',
    marginTop: 10,
  },
  folowing: {
    margin: 20,
    textAlign: 'right',
  },
  folowingTite: {
    color: '#565f64',
    fontWeight: 'bold',
    fontSize: 17,
  },
  Icon: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 150,
  },
  otherThing: {
    alignItems: 'center',
  },
  otherText: {
    color: '#606060',
  },
  imageBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 130,
    marginTop: 30,
  },
  TransfertImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  taxNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 60,
    marginTop: 20,
  },
  taxText: {
    color: '#606060',
    marginLeft: 5,
    borderLeftWidth: 2,
    borderColor: '#606060',
    height: 25,
    width: 210,
  },
  TaxImage: {
    width: 30,
    height: 40,
    
  },
});
export default FooterScreen;
