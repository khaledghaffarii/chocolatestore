/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
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
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";
import GridImageView from "react-native-grid-image-viewer";
import firestore from "@react-native-firebase/firestore";
import LoginScreen from "./LoginScreen";

// import Carousel from 'react-native-snap-carousel';
import Carousel from "../components/Carousel";
import { dummyData } from "../data/Data";
import { SearchBar, Card } from "react-native-elements";
import FooterScreen from "./FooterScreen";
const AboutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  //console.log(description);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View>
          <Text>About Screen</Text>
      </View>

      <FooterScreen />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default AboutScreen;
