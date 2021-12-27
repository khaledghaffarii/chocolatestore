/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// import React, {useContext, useState, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import {AuthContext} from './AuthProvider';
// import HomeScreen from '../screens/HomeScreen';
// import AuthStack from './AuthStack';
// import AppStack from './AppStack';
// import EditProfileScreen from '../screens/EditProfileScreen';
// import {View, Text} from 'react-native';
// import OnboardingScreen from '../screens/OnboardingScreen';
// import {createStackNavigator} from 'react-navigation-stack';
// import LoginScreen from '../screens/LoginScreen';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// const Routes = () => {
//   const {user, setUser} = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);
//   const MainNavigator = createStackNavigator(
//     {
//       Home: AppStack,
//       Login: LoginScreen,
//     },
//     {
//       initialRouteName: 'Home',
//       // headerMode: 'float',
//       defaulfNavigationOptions: ({navigation}) => ({
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           textAlign: 'center',
//           alignSelf: 'center',
//           flex: 1,
//         },
//       }),
//     },
//   );
//   const onAuthStateChanged = user => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   });

//   if (initializing) return null;

//   return (
//     <>
//       <NavigationContainer>{!user ? <AppStack /> : null}</NavigationContainer>
//     </>
//   );
// };
// export default Routes;
import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import LoginScreen from "../screens/LoginScreen";
import AllChocolate from "../screens/AllChocolate";

import LoginButton from "../screens/LoginButton";
import ShoppingCartIcon from "../screens/ShoppingCartIcon";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import { navigationRef } from "./RootNavigation";
import AllCake from "../screens/AllCake";
import ProductShow from "../screens/productShow";
import CakeShow from "../screens/CakeShow";
import SplashScreen from "../screens/SplashScreen";
import LessChocolateShow from "../screens/LessChocolateShow";
import LessCakeShow from "../screens/LessCakeShow";
import AllDrink from "../screens/AllDrink";
import DrinkShow from "../screens/DrinkShow";
import AllKandy from "../screens/AllKandy";
import KandyShow from "../screens/KandyShow";
import Checkout from "../screens/Checkout";
import { useNavigation } from "@react-navigation/native";
import AllProduct from "../screens/AllProduct";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerItems, SafeAreaView } from "react-navigation";
import DrawerContent from "../screens/DrawerContent";
import AboutScreen from "../screens/AboutScreen";
import Location from "../screens/Location";
import All_Product from '../screens/All_Product';
const Routes = (navigation) => {
  //const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const Stack = createStackNavigator();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }
  const Drawer = createDrawerNavigator();
  function Root() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen
          options={{
            headerRight: () => (
              <SafeAreaView style={{ paddingRight: 10 }}>
                <ShoppingCartIcon />
              </SafeAreaView>
            ),
            headerTitle: (props) => (
              <SafeAreaView {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                />
              </SafeAreaView>
            ),
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
          name="Root"
          component={AppStack}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer>
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
            headerShown: false,
          }}
          component={Root}
        />
        <Stack.Screen
          name="About"
          options={({ navigation }) => ({
            title: "سلة  المشتريات  ",

            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            backgroundColor: "#2e64e515",
            margin: 0,
            headerBackTitleVisible: false,
          })}
          component={AboutScreen}
        />
        <Stack.Screen
          name="location"
          options={({ navigation }) => ({
            title: "سلة  المشتريات  ",

            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            backgroundColor: "#2e64e515",
            margin: 0,
            headerBackTitleVisible: false,
          })}
          component={Location}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "",
            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            backgroundColor: "#2e64e515",
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="checkout"
          options={({ navigation }) => ({
            title: "سلة  المشتريات  ",
            headerRight: () => (
              <View style={{ marginRight: 15 }}>
                <ShoppingCartIcon />
              </View>
            ),
            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            backgroundColor: "#2e64e515",
            margin: 0,
            headerBackTitleVisible: false,
          })}
          component={Checkout}
        />
        <Stack.Screen
          name="allCake"
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
          component={AllCake}
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
            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
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
            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            backgroundColor: "#2e64e515",
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={AllProduct}
        />
        <Stack.Screen
          name="all_products"
          options={{
            title: "",
            headerRight: () => (
              <View style={{ marginRight: 15 }}>
                <ShoppingCartIcon />
              </View>
            ),
            headerTitle: (props) => (
              <View {...props} style={{ flex: 1 }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.tinyLogo}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#ffff",
              height: 60,
              shadowColor: "#000",
              elevation: 50,
            },
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            backgroundColor: "#2e64e515",
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={All_Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  image: {
    flex: 1,

    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#2b2a29",
  },

  tinyLogo: {
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 10,
    width: 110,
    height: 50,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: -30,
    color: "#f9ab37",
    fontFamily: "Lato-Regular",
  },
  navButtonText1: {
    fontSize: 15,
    fontWeight: "bold",
    margin: -45,
    paddingLeft: 220,
    color: "#f9ab37",
    fontFamily: "Lato-Regular",
  },
});
export default Routes;
