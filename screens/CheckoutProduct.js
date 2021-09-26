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
import {Card} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {selectItems} from '../slice/BasketSlice';

const CheckoutProduct = ({
  id,
  title,
  image,
  Calories,
  description,
  price,
  Products,
  kandy,
}) => {
  console.log(price);
  return (
    <View>
      <Text>{id}</Text>
      <Image source={{uri: image}} />
    </View>
  );
};

export default CheckoutProduct;
