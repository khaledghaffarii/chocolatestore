/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable dot-notation */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
} from "react-native";
import { Link } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { Card } from "react-native-elements";
import { useDispatch } from "react-redux";
import CarouselScreens from "../screens/CarouselScreens";
import { addToBasket } from "../slice/BasketSlice";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import FooterScreen from "../screens/FooterScreen";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { selectItems } from "../slice/BasketSlice";
import { useSelector } from "react-redux";
import Product from "./Product";
import { where } from "firebase/firestore";
const ChocolateProduct = ({ productChocolate }) => {
  const navigation = useNavigation();
  const items = useSelector(selectItems);

  const [product, setProduct] = useState(0);

  const dispatch = useDispatch();

  const addItemToBasket = (product) => {
    // const product = {chocolate};
    console.log(product);
    dispatch(addToBasket(product));
  };

  useEffect(() => {
    const getChocolate = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .onSnapshot((snapshot) => {
            setProduct(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };

    getChocolate();
  }, []);

  return (
    <View>
      <Product product={product} onPress={addItemToBasket} />
    </View>
  );
};

export default ChocolateProduct;
