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
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import LoginScreen from '../screens/LoginScreen';
import AllChocolate from '../screens/AllChocolate';

import LoginButton from '../screens/LoginButton';
import ShoppingCartIcon from '../screens/ShoppingCartIcon';
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
// import {navigationRef} from './RootNavigation';
import AllCake from '../screens/AllCake';
import ChocolateShow from '../screens/ChocolateShow';
import CakeShow from '../screens/CakeShow';
import SplashScreen from '../screens/SplashScreen';
import LessChocolateShow from '../screens/LessChocolateShow';
import LessCakeShow from '../screens/LessCakeShow';
import AllDrink from '../screens/AllDrink';
import DrinkShow from '../screens/DrinkShow';
import AllKandy from '../screens/AllKandy';
import KandyShow from '../screens/KandyShow';
const Routes = navigation => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const Stack = createStackNavigator();

  const onAuthStateChanged = user => {
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
            title: (
              <View style={{width: 100, height: 50}}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/logo2.png')}
                />
              </View>
            ),

            headerRight: () => <LoginButton />,
            headerLeft: () => <ShoppingCartIcon />,
            headerStyle: {
              backgroundColor: '#ffff',
              height: 65,
              shadowColor: '#000',
              elevation: 20,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              width: 150,
              borderRadius: 80,
              marginBottom: 25,
              marginTop: 45,
              marginLeft: 10,
              height: 80,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={AppStack}
        />
        <Stack.Screen
          name="login"
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffff',
              height: 40,
            },
            headerBackTitleVisible: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="allChocolate"
          options={{
            title: 'جميع الشكولاطات ',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={AllChocolate}
        />
        <Stack.Screen
          name="allCake"
          options={{
            title: 'جميع الكيك ',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={AllCake}
        />
        <Stack.Screen
          name="all_drink"
          options={{
            title: 'مشروبات ',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={AllDrink}
        />
        <Stack.Screen
          name="all_kandy"
          options={{
            title: 'حلويات مشكلة ',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={AllKandy}
        />
        <Stack.Screen
          name="Kandy_show"
          options={{
            title: 'حلويات مشكلة ',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={KandyShow}
        />
        <Stack.Screen
          name="chocolateShow"
          options={{
            title: '',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={ChocolateShow}
        />
        <Stack.Screen
          name="drink_show"
          options={{
            title: 'جميع الكيك ',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={DrinkShow}
        />
        <Stack.Screen
          name="cakeShow"
          options={{
            title: '',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={CakeShow}
        />
        <Stack.Screen
          name="chocolate"
          options={{
            title: '',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={ChocolateShow}
        />
        <Stack.Screen
          name="cake"
          options={{
            title: '',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <ShoppingCartIcon />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ffff',
              height: 50,
              shadowColor: '#000',
              elevation: 50,
            },
            headerTitleAlign: 'center',

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 21,
            },
            backgroundColor: '#2e64e515',
            margin: 0,
            headerBackTitleVisible: false,
          }}
          component={CakeShow}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  image: {
    flex: 1,

    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#2b2a29',
  },

  tinyLogo: {
    borderRadius: 80,
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 20,
    width: 100,
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
    fontWeight: 'bold',
    margin: -30,
    color: '#f9ab37',
    fontFamily: 'Lato-Regular',
  },
  navButtonText1: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: -45,
    paddingLeft: 220,
    color: '#f9ab37',
    fontFamily: 'Lato-Regular',
  },
});
export default Routes;
