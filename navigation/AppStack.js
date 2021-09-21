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
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Card} from 'react-native-elements';

import CarouselScreens from '../screens/CarouselScreens';
const AppStack = ({navigation}) => {
  const Stack = createStackNavigator();
  const [active, setActive] = useState('');
  const [category, setCategory] = useState('');
  const [LessCake, setLessCake] = useState('');
  const [LessDrink, setLessDrink] = useState('');
  const [kandy, setKandy] = useState('');
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
      <View
        style={{
          marginTop: 5,
        }}>
        <CarouselScreens />
      </View>

      {/*///////////////////////////////////////////////////// chocolate category   /////////////////////////////////////////////////*/}
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.recomended}>شوكولاطات</Text>
        <View
          style={{
            marginRight: 10,
            marginTop: 0,
            width: 110,
          }}>
          <Button
            styleContainer={{
              borderRadius: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
            }}
            title=" مزيد"
            color="#f9ab37"
            onPress={() => {
              navigation.navigate('allChocolate');
            }}
          />
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
                      height: 250,
                      marginBottom: 15,
                      borderRadius: 20,
                      borderColor: '#f9ab37',
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
                          fontSize: 20,
                          fontWeight: 'bold',

                          textAlign: 'center',
                        }}>
                        {img.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          fontSize: 15,

                          color: 'gray',

                          textAlign: 'center',
                        }}></Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 10,
                        marginLeft: 10,
                        width: 120,
                      }}>
                      <Button color="rgb(27,25,110)" title="أضف إلى السلة" />
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
        <Text style={styles.recomended1}>كيك و مخبوزات </Text>
        <View
          style={{
            marginRight: 10,
            marginTop: 0,
            width: 110,
          }}>
          <Button
            title=" مزيد"
            color="#f9ab37"
            onPress={() => {
              navigation.navigate('allCake');
            }}
          />
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
                      height: 250,
                      marginBottom: 15,
                      borderRadius: 20,
                      borderColor: '#f9ab37',
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
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginLeft: 0,
                          textAlign: 'center',
                        }}>
                        {img.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          fontSize: 15,

                          color: 'gray',

                          textAlign: 'center',
                        }}></Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 10,
                        marginLeft: 10,
                        width: 120,
                      }}>
                      <Button color="rgb(27,25,110)" title="أضف إلى السلة" />
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
        <Text style={styles.recomended1}>مشروبات </Text>
        <View
          style={{
            marginRight: 10,
            marginTop: 0,
            width: 110,
          }}>
          <Button
            title=" مزيد"
            color="#f9ab37"
            onPress={() => {
              navigation.navigate('all_drink');
            }}
          />
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
                      height: 250,
                      marginBottom: 15,
                      borderRadius: 20,
                      borderColor: '#f9ab37',
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
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginLeft: 0,
                          textAlign: 'center',
                        }}>
                        {img.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          fontSize: 15,

                          color: 'gray',

                          textAlign: 'center',
                        }}></Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 10,
                        marginLeft: 10,
                        width: 120,
                      }}>
                      <Button
                        color="rgb(27,25,110)"
                        title="أضف إلى السلة"
                        // onPress={() => {
                        //   navigation.navigate('product', {
                        //     category: category,
                        //     otherCategory: otherCategory,
                        //   });
                        // }}
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        {/* <Button
          title=" test"
          color="#f9ab37"
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
        <Text style={styles.recomended1}>حلويات مشكلة </Text>
        <View
          style={{
            marginRight: 10,
            marginTop: 0,
            width: 110,
          }}>
          <Button
            title=" مزيد"
            color="#f9ab37"
            onPress={() => {
              navigation.navigate('all_kandy');
            }}
          />
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
                      height: 250,
                      marginBottom: 15,
                      borderRadius: 20,
                      borderColor: '#f9ab37',
                      borderWidth: 0,
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: kandys.imageUrl}}
                    />
                    <View style={{marginBottom: 10}}>
                      <Text
                        style={{
                          marginTop: 2,
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginLeft: 0,
                          textAlign: 'center',
                        }}>
                        {kandys.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          fontSize: 15,

                          color: 'gray',

                          textAlign: 'center',
                        }}></Text>
                    </View>
                    <View
                      style={{
                        marginRight: 8,
                        marginTop: 10,
                        marginLeft: 10,
                        width: 120,
                      }}>
                      <Button
                        color="rgb(27,25,110)"
                        title="أضف إلى السلة"
                        // onPress={() => {
                        //   navigation.navigate('product', {
                        //     category: category,
                        //     otherCategory: otherCategory,
                        //   });
                        // }}
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        {/* <Button
          title=" test"
          color="#f9ab37"
          onPress={() => RootNavigation.navigate('product', {userName: 'Lucy'})}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {
    marginTop: 5,
    marginLeft: 270,
    marginBottom: 40,
    fontSize: 17,
    color: '#f9ab37',
    fontWeight: 'bold',
    width: 100,
  },
  categoriesPhoto: {
    width: 120,
    height: 120,
    marginLeft: 12,
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
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -225,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  recomended1: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -180,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginTop: 10,
    marginLeft: 75,
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
