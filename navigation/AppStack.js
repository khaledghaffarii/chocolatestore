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
import FooterScreen from '../screens/FooterScreen';
const AppStack = ({
  navigation,
  title,
  imageUrl,
  Calories,
  decription,
  price,
}) => {
  const Stack = createStackNavigator();
  const [active, setActive] = useState('');
  const [category, setCategory] = useState('');
  const [LessCake, setLessCake] = useState('');
  const [LessDrink, setLessDrink] = useState('');
  const [kandy, setKandy] = useState('');
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      title,
      imageUrl,
      Calories,
      decription,
      price,
    };
    dispatch(addToBasket(product));
  };
  useEffect(() => {
    const getCategory = async () => {
      try {
        await firestore()
          .collection('allCategogry')
          .onSnapshot(snapshot => {
            setCategory(snapshot.docs.map(doc => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };

    const getLessCakes = async () => {
      try {
        await firestore()
          .collection('MoreCake')
          .onSnapshot(snapshot => {
            setLessCake(snapshot.docs.map(doc => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getLessDrink = async () => {
      try {
        await firestore()
          .collection('drink')
          .onSnapshot(snapshot => {
            setLessDrink(snapshot.docs.map(doc => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getLessKandy = async () => {
      try {
        await firestore()
          .collection('candies')
          .onSnapshot(snapshot => {
            setKandy(snapshot.docs.map(doc => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };
    getLessKandy();
    getLessDrink();
    getCategory();
    getLessCakes();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <CarouselScreens />
      <View style={styles.advertisement}>
        <Text style={styles.advertisementText}>
          متخصصين بالحلا المميز ،مـعـكـم بـكـل حـب
        </Text>
        <View style={styles.instagramIcon}>
          <Pressable
            onPress={() => {
              Linking.openURL('https://www.instagram.com/dallah_hala/');
            }}>
            <Ionicons name="ios-logo-instagram" size={20} color="#fff" />
          </Pressable>
        </View>
      </View>

      {/*///////////////////////////////////////////////////// chocolate category   /////////////////////////////////////////////////*/}
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.recomended}>شوكولاطات</Text>
        <View style={styles.moreButton}>
          {/* <Button
            styleContainer={{
              borderRadius: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
            }}
            title=" مزيد"
            color="#82644A"
            onPress={() => {
              navigation.navigate('allChocolate');
            }}
          /> */}
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('allChocolate');
            }}>
            <Text style={styles.text}> مزيد</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.grid}>
          {Object.values(category)
            .slice(0, 4)
            .map((img, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('chocolateShow', {
                      chocolate: img,
                    })
                  }>
                  <Card
                    containerStyle={{
                      elevation: 10,
                      height: 185,
                      width: 150,
                      marginBottom: 15,
                      borderRadius: 10,
                      borderColor: '#82644A',
                      borderWidth: 0,
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: img.imageUrl}}
                    />
                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{
                          marginTop: 0,
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginTop: 7,

                          textAlign: 'center',
                        }}>
                        {img.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 20,

                        width: 120,
                      }}>
                      <Button
                        onPress={() => {
                          addItemToBasket();
                        }}
                        color="#82644A"
                        title="أضف إلى السلة"
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
      {/* /////////////////////////////////////////////////////  cakes category ///////////////////////////////////////////////////////////////////////////////////////// */}
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.recomended}>كيك و مخبوزات </Text>
        <View style={styles.moreButton}>
          {/* <Button
            title=" مزيد"
            color="#82644A"
            onPress={() => {
              navigation.navigate('allCake');
            }}
          /> */}
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('allCake');
            }}>
            <Text style={styles.text}> مزيد</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.grid2}>
          {Object.values(LessCake)
            .slice(0, 4)
            .map((img, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('cakeShow', {
                      cake: img,
                    })
                  }>
                  <Card
                    containerStyle={{
                      elevation: 10,
                      height: 185,
                      width: 150,
                      marginBottom: 15,
                      borderRadius: 10,
                      borderColor: '#82644A',
                      borderWidth: 0,
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: img.imageUrl}}
                    />
                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{
                          marginTop: 0,
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginTop: 7,

                          textAlign: 'center',
                        }}>
                        {img.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 20,

                        width: 120,
                      }}>
                      <Button
                        onPress={() => {
                          addItemToBasket();
                        }}
                        color="#82644A"
                        title="أضف إلى السلة"
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
      {/* /////////////////////////////////////////////////////  drink category /////////////////////////////////////////////*/}
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.recomended}>مشروبات </Text>
        <View style={styles.moreButton}>
          {/* <Button
            title=" مزيد"
            color="#82644A"
            onPress={() => {
              navigation.navigate('all_drink');
            }}
          /> */}
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('all_drink');
            }}>
            <Text style={styles.text}> مزيد</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.grid2}>
          {Object.values(LessDrink)
            .slice(0, 4)
            .map((img, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('drink_show', {
                      drink: img,
                    })
                  }>
                  <Card
                    containerStyle={{
                      elevation: 10,
                      height: 185,
                      width: 150,
                      marginBottom: 15,
                      borderRadius: 10,
                      borderColor: '#82644A',
                      borderWidth: 0,
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: img.imageUrl}}
                    />
                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{
                          marginTop: 0,
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginTop: 7,

                          textAlign: 'center',
                        }}>
                        {img.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 20,

                        width: 120,
                      }}>
                      <Button
                        onPress={() => {
                          addItemToBasket();
                        }}
                        color="#82644A"
                        title="أضف إلى السلة"
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        {/* <Button
          title=" test"
          color="#82644A"
          onPress={() => RootNavigation.navigate('product', {userName: 'Lucy'})}
        /> */}
      </View>
      {/* /////////////////////////////////////////////////////  kandy category /////////////////////////////////////////////*/}
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.recomended}>حلويات مشكلة </Text>
        <View style={styles.moreButton}>
          {/* <Button
            title=" مزيد"
            color="#82644A"
            onPress={() => {
              navigation.navigate('all_kandy');
            }}
          /> */}
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('all_kandy');
            }}>
            <Text style={styles.text}> مزيد</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.grid2}>
          {Object.values(kandy)
            .slice(0, 4)
            .map((kandys, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('Kandy_show', {
                      kandy: kandys,
                    })
                  }>
                  <Card
                    containerStyle={{
                      elevation: 10,
                      height: 185,
                      width: 150,
                      marginBottom: 15,
                      borderRadius: 10,
                      borderColor: '#82644A',
                      borderWidth: 0,
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: kandys.imageUrl}}
                    />
                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{
                          marginTop: 0,
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginTop: 7,
                          textAlign: 'center',
                        }}>
                        {kandys.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 20,

                        width: 120,
                      }}>
                      <Button
                        onPress={() => {
                          addItemToBasket();
                        }}
                        color="#82644A"
                        title="أضف إلى السلة"
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        {/* <Button
          title=" test"
          color="#82644A"
          onPress={() => RootNavigation.navigate('product', {userName: 'Lucy'})}
        /> */}
      </View>
      <FooterScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {
    marginTop: 5,
    marginLeft: 270,
    marginBottom: 40,
    fontSize: 17,
    color: '#82644A',
    fontWeight: 'bold',
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
    backgroundColor: '#ffff',
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
    marginLeft: 5,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginTop: 10,
    marginLeft: 75,
  },
  advertisement: {
    backgroundColor: '#af8d78',
    height: 130,
    marginBottom: 60,
    marginTop: -15,
  },
  advertisementText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  instagramIcon: {
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    borderColor: '#82644A',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  buttons: {
    width: 100,
    height: 12,
    marginLeft: 75,
  },
  grid: {
    margin: 0,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  grid2: {
    margin: 0,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 30,
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

export default AppStack;
