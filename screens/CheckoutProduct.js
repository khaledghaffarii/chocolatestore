/* eslint-disable no-unused-vars */
/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
/* eslint-disable react-native/no-inline-styles */
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
import { removeFromBasket } from "../slice/BasketSlice";
const CheckoutProduct = ({ chocolate, props }) => {
  const items = useSelector(selectItems);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const totalPrice = count * chocolate.price;
  const id = chocolate.id;
  function AdditionCount() {
    const add = count + 1;
    return setCount(add);
  }
  function SoustractiontionCount() {
    const add = count - 1;
    return setCount(add);
  }

  const removeItemFromBasket = (chocolate) => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <View style={styles.container}>
      <ScrollView vertical={true} style={{}}>
        <View style={styles.product}>
          <View style={{ flexDirection: "column", marginRight: 25 }}>
            <Text style={{ margin: 30, fontSize: 20, width: 150 }}>
              {chocolate.arabicTitle}
            </Text>
            <View style={styles.incrimentation}>
              <Pressable
                onPress={() => AdditionCount()}
                style={{
                  backgroundColor: "#cccccccc",
                  height: 30,
                  width: 30,
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4,
                  borderTopLeftRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    fontSize: 23,
                    margin: -3,
                  }}
                >
                  +
                </Text>
              </Pressable>
              <View
                style={{
                  textAlign: "center",
                  marginRight: 20,
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                <Text> {count} </Text>
              </View>
              {count == 1 ? (
                <Pressable
                  disabled={true}
                  onPress={() => SoustractiontionCount()}
                  style={{
                    backgroundColor: "#cccccccc",

                    height: 30,
                    width: 30,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 4,
                    borderTopLeftRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontSize: 23,
                      marginTop: -10,
                    }}
                  >
                    _
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  disabled={false}
                  onPress={() => SoustractiontionCount()}
                  style={{
                    backgroundColor: "#cccccccc",

                    height: 30,
                    width: 30,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 4,
                    borderTopLeftRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontSize: 23,
                      marginTop: -10,
                    }}
                  >
                    _
                  </Text>
                </Pressable>
              )}
            </View>
            <Text
              style={{
                marginLeft: 80,
                textAlign: "center",
                color: "#90704e",
                fontSize: 15,
              }}
            >
              SAR {totalPrice}.00
            </Text>
          </View>

          <Image
            style={{
              marginTop:25,
              width: 85,
              height: 100,
              resizeMode: "cover",
              borderRadius: 5,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
            source={{ uri: chocolate.imageUrl }}
          />
          <Pressable
            style={{ marginLeft: 25, marginTop: 50 }}
            onPress={() => {
              removeItemFromBasket();
            }}
          >
            <Ionicons name="close-circle-outline" size={40} color="#4A4A4A9A" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  bascketBlock: {},
  firstBlock: {},
  incrimentation: {
    flexDirection: "row",
    marginLeft: 70,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    marginHorizontal: 0,
    alignItems: "flex-end",
    margin: 35,
    width: 380,
  },
  product: { flexDirection: "row" },
});

export default CheckoutProduct;
