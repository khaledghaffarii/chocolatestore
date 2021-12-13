/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
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
import CarouselScreens from "./CarouselScreens";
import { addToBasket } from "../slice/BasketSlice";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import FooterScreen from "./FooterScreen";
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

function Product({ onPress, product }) {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <ScrollView
          horizontal={true}
          style={styles.grid}
          showsHorizontalScrollIndicator={false}
        >
          {Object.values(product).map((products, i) => {
            //console.log(chocolates.title);
            return (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate("productShow", {
                    product: products,
                  })
                }
              >
                <Card
                  containerStyle={{
                    elevation: 10,
                    height: 270,
                    width: 170,
                    marginBottom: 15,

                    borderColor: "#82644A",
                    borderWidth: 0,
                  }}
                >
                  <Image
                    style={styles.categoriesPhoto}
                    source={{ uri: products.imageUrl }}
                  />
                  <View style={{ marginBottom: 10 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginTop: 7,
                        height: 25,
                        textAlign: "center",
                      }}
                    >
                      {products.arabicTitle}
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      رس {products.price}
                    </Text>
                  </View>
                  <View>
                    <Button
                      onPress={() => {
                        onPress(products);
                      }}
                      color="#af8d78"
                      title="أضف إلى السلة"
                    />
                  </View>
                </Card>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  moreCategory: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  login: {
    marginTop: 5,
    marginLeft: 270,
    marginBottom: 40,
    fontSize: 17,
    color: "#82644A",
    fontWeight: "bold",
    width: 100,
  },
  categoriesPhoto: {
    width: 120,
    height: 120,
    alignItems: "center",
    margin: 10,
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    marginHorizontal: 0,

    marginTop: 5,
  },
  moreButton: {
    marginRight: 15,
    width: 120,
  },
  recomended: {
    fontSize: 18,
    marginLeft: 10,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginTop: 10,
    marginLeft: 75,
  },
  advertisement: {
    backgroundColor: "#af8d78",
    height: 130,
    marginBottom: 60,
    marginTop: -15,
  },
  advertisementText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  instagramIcon: {
    alignItems: "center",
    marginTop: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    borderColor: "#82644A",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttons: {
    width: 100,
    height: 12,
    marginLeft: 75,
  },
  grid: {
    margin: 0,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 10,
  },
  grid2: {
    margin: 0,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 30,
  },

  headline_text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
});
export default Product;
