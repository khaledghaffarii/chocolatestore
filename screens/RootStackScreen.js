/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ShoppingCartIcon from "./ShoppingCartIcon";
import { View, Image } from "react-native";
import ProductShow from "./productShow";
import CakeShow from "./CakeShow";
import SplashScreen from "./SplashScreen";

import AllDrink from "./AllDrink";
import DrinkShow from "./DrinkShow";
import AllKandy from "./AllKandy";
import KandyShow from "./KandyShow";
import Checkout from "./Checkout";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import AllProduct from "./AllProduct";
import AppStack from "../navigation/AppStack";
import LoginButton from "./LoginButton";
const Stack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator initialRouteName="splashScreen">
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="spashScreen"
      component={SplashScreen}
    />
    <Stack.Screen
      name="Home"
      options={{
        title: (
          <View>
            <Image
              style={{
                marginBottom: 15,
                marginTop: 10,
                marginLeft: 10,
                width: 110,
                height: 50,
              }}
              source={require("../assets/logo.png")}
            />
          </View>
        ),

        headerRight: () => <LoginButton />,
        headerLeft: () => <ShoppingCartIcon />,
        headerStyle: {
          backgroundColor: "#ffff",
          shadowColor: "#000",
          elevation: 20,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          width: 150,
          borderRadius: 80,
          marginBottom: 25,
          marginTop: 45,
          marginLeft: 10,
          height: 80,
        },
        backgroundColor: "#2e64e515",

        headerBackTitleVisible: false,
      }}
      component={AppStack}
    />
    <Stack.Screen
      name="login"
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#ffff",
          height: 40,
        },
        headerBackTitleVisible: false,
      }}
      component={LoginScreen}
    />
    <Stack.Screen
      name="checkout"
      options={{
        title: "سلة  المشتريات  ",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={Checkout}
    />

    <Stack.Screen
      name="all_drink"
      options={{
        title: "مشروبات ",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={AllDrink}
    />
    <Stack.Screen
      name="all_kandy"
      options={{
        title: "حلويات مشكلة ",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={AllKandy}
    />
    <Stack.Screen
      name="Kandy_show"
      options={{
        title: "حلويات مشكلة ",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={KandyShow}
    />
    <Stack.Screen
      name="productShow"
      options={{
        title: "",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={ProductShow}
    />
    <Stack.Screen
      name="drink_show"
      options={{
        title: "جميع الكيك ",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={DrinkShow}
    />
    <Stack.Screen
      name="cakeShow"
      options={{
        title: "",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={CakeShow}
    />

    <Stack.Screen
      name="cake"
      options={{
        title: "",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={CakeShow}
    />
    <Stack.Screen
      name="all_product"
      options={{
        title: "",
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <ShoppingCartIcon />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#ffff",
          height: 50,
          shadowColor: "#000",
          elevation: 50,
        },
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 21,
        },
        backgroundColor: "#2e64e515",
        margin: 0,
        headerBackTitleVisible: false,
      }}
      component={AllProduct}
    />
  </Stack.Navigator>
);

export default RootStackScreen;
