/* eslint-disable no-dupe-keys */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {View, TouchableOpacity, Text} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import HomeScreen from '../screens/HomeScreen';
// import ChatScreen from '../screens/ChatScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import AddPostScreen from '../screens/AddPostScreen';
// import MessagesScreen from '../screens/MessagesScreen';
// import EditProfileScreen from '../screens/EditProfileScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const FeedStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="RN Social"
//       component={HomeScreen}
//       options={{
//         headerTitleAlign: 'center',
//         headerTitleStyle: {
//           color: '#2e64e5',
//           fontFamily: 'Kufam-SemiBoldItalic',
//           fontSize: 18,
//         },
//         headerStyle: {
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerRight: () => (
//           <View style={{marginRight: 10}}>
//             <FontAwesome5.Button
//               name="plus"
//               size={22}
//               backgroundColor="#fff"
//               color="#2e64e5"
//               onPress={() => navigation.navigate('AddPost')}
//             />
//           </View>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="AddPost"
//       component={AddPostScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#2e64e515',
//           shadowColor: '#2e64e515',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="HomeProfile"
//       component={ProfileScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#fff',
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//   </Stack.Navigator>
// );

// const MessageStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen name="Messages" component={MessagesScreen} />
//     <Stack.Screen
//       name="Chat"
//       component={ChatScreen}
//       options={({route}) => ({
//         title: route.params.userName,
//         headerBackTitleVisible: false,
//       })}
//     />
//   </Stack.Navigator>
// );

// const ProfileStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="EditProfile"
//       component={EditProfileScreen}
//       options={{
//         headerTitle: 'Edit Profile',
//         headerBackTitleVisible: false,
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#fff',
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//       }}
//     />
//   </Stack.Navigator>
// );

// const AppStack = () => {
//   const getTabBarVisibility = route => {
//     const routeName = route.state
//       ? route.state.routes[route.state.index].name
//       : '';

//     if (routeName === 'Chat') {
//       return false;
//     }
//     return true;
//   };

//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: '#2e64e5',
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={FeedStack}
//         options={({route}) => ({
//           tabBarLabel: 'Home',
//           // tabBarVisible: route.state && route.state.index === 0,
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="home-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={MessageStack}
//         options={({route}) => ({
//           tabBarVisible: getTabBarVisibility(route),
//           // Or Hide tabbar when push!
//           // https://github.com/react-navigation/react-navigation/issues/7677
//           // tabBarVisible: route.state && route.state.index === 0,
//           // tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <Ionicons
//               name="chatbox-ellipses-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileStack}
//         options={{
//           // tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="person-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default AppStack;
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
  ImageBackground,
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
import ChocolateProduct from "../screens/ChocolateProduct";
const AppStack = ({ navigation }) => {
  const Stack = createStackNavigator();

  const [salty, setSalty] = useState("");
  const [hotDrink, setHotDrink] = useState("");
  const [coldDrink, setColdDrink] = useState("");
  const [sandwich, setSandwich] = useState("");
  const [croissant, setCroissant] = useState("");
  const [kandy, setKandy] = useState("");
  const [cake, setCake] = useState("");
  const [chocolate, setChocolate] = useState("");
  const [chocolateId, setChocolateId] = useState([]);
  const [product, setProduct] = useState(0);
  useEffect(() => {
    const getProduct = async () => {
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

    const getChocolate = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "chocolate")
          .onSnapshot((snapshot) => {
            setChocolate(snapshot.docs.map((doc) => doc.data()));
            setChocolateId(snapshot.docs.map((doc) => doc.id));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getKandy = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "Oriental Sweets")
          .onSnapshot((snapshot) => {
            setKandy(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getCake = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "cake")
          .onSnapshot((snapshot) => {
            setCake(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getHotDrink = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "Hot Drinks")
          .onSnapshot((snapshot) => {
            setHotDrink(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getColdDrink = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "Cold Drinks")
          .onSnapshot((snapshot) => {
            setColdDrink(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getCroissant = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "croissant")
          .onSnapshot((snapshot) => {
            setCroissant(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getSandwich = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "Bakery")
          .onSnapshot((snapshot) => {
            setSandwich(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getSalty = async () => {
      try {
        await firestore()
          .collection("allProduct")
          .where("englishCategory", "==", "Salty Snacks")
          .onSnapshot((snapshot) => {
            setSalty(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    getCake();
    getKandy();
    getChocolate();
    getHotDrink();
    getSandwich();
    getCroissant();
    getColdDrink();
    getSalty();
  }, []);
  console.log(chocolateId);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <CarouselScreens />
      <View style={styles.ourProduct}></View>
      <Text style={styles.ourTextProduct}>منتوجاتنا </Text>
      <ChocolateProduct />
      <View style={styles.ourProduct}></View>
      <Text style={styles.ourTextProduct}>تصنيفاتنا </Text>
      <ScrollView
        horizontal={true}
        style={styles.grid}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.categotyView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("all_product", {
                chocolate: chocolate,
                chocolateId: chocolateId,
                product: product[0],
              })
            }
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/chocolat.jpg")}
              />
              <Text style={styles.textCtegory}>الشوكولا</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("all_product", { cake: cake })}
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/caky.jpg")}
              />
              <Text style={styles.textCtegory}>الكيك</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("all_product", { kandy: kandy })}
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/baklawa.jpg")}
              />
              <Text style={styles.textCtegory}>الحلويات الشرقيه</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("all_product", { salty: salty })}
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/sale.jpg")}
              />
              <Text style={styles.textCtegory}>موالح</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("all_product", { croissant: croissant })
            }
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/croissant.jpg")}
              />
              <Text style={styles.textCtegory}> كرواسون</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("all_product", { sandwich: sandwich })
            }
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                blurType="dark"
                style={styles.image}
                source={require("../assets/club.jpg")}
              />
              <Text style={styles.textCtegory}>المخبوزات</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("all_product", { hotDrink: hotDrink })
            }
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/hotDrink.jpg")}
              />
              <Text style={styles.textCtegory}> المشروبات الساخنة</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("all_product", { coldDrink: coldDrink })
            }
          >
            <View style={styles.categotyElement}>
              <Image
                blurRadius={2}
                style={styles.image}
                source={require("../assets/coldDrink.jpg")}
              />
              <Text style={styles.textCtegory}> المشروبات الباردة</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ourProduct: {
    marginLeft: 195,
    marginTop: 30,
    borderTopWidth: 5,
    borderTopColor: "#e5e5e5",
    height: 20,
    width: 30,
  },
  ourTextProduct: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#CAB19F",
  },
  textCtegory: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: -90,
    marginBottom: 100,
    marginLeft: -30,
    opacity: 1,
  },
  categotyElement: {},
  categotyView: {
    flexDirection: "row",
    marginBottom: 40,
    marginLeft: 40,
  },
  image: {
    width: 155,
    height: 155,
    marginTop: 30,
    marginRight: 30,
    borderRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    opacity: 1,
  },
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
    width: 70,
    height: 70,
    marginLeft: 25,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    marginHorizontal: 1,

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

export default AppStack;
