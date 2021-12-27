/* eslint-disable quotes */
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
  Pressable,
  Linking,
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
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Location = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={tw`text-center w-full`}>
        <View style={tw`flex flex-col mb-10`}>
          <Text style={tw`text-center text-red-900 text-xl m-5`}>فروعنا</Text>
          <Text style={tw`text-center text-red-900 text-lg m-5`}>
            يسعدنا الإعلان عن انضمام الفروع الجديدة التالية إلى شبكتنا
            المتنامية! مبروك ومرحبا بكم في الفريق!
          </Text>
          <View style={styles.ourProduct}></View>
        </View>
        <Text style={tw`text-center text-red-900 text-xl m-5`}>
          الدمام حي الروضة
        </Text>
        <Image
          style={tw`w-72 ml-14`}
          source={require("../assets/location.jpg")}
        />
        <View style={styles.ourProduct}></View>
        <Image
          style={tw`w-10 h-10 ml-80 mb-5`}
          source={require("../assets/maps-location.png")}
        />
        <Pressable
          onPress={() => {
            Linking.openURL(
              "https://www.google.com/maps/place/%D8%AD%D9%8A+%D8%A7%D9%84%D8%B1%D9%88%D8%B6%D9%87+%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85%E2%80%AD/@26.4011898,50.0750313,17z/data=!4m5!3m4!1s0x3e49fd2fad602ff1:0x357fbc9701e785de!8m2!3d26.3989928!4d50.0865258?hl=de"
            );
          }}
          style={tw`text-center text-gray-400 text-xl m-5`}
        >
          <Text style={tw`text-center text-gray-400 text-xl m-5`}>
            موقعنا على الخريطة
          </Text>
        </Pressable>
        <View style={tw`flex flex-row mb-10 justify-center`}>
          <Pressable
            style={{ marginRight: 9 }}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/dallah_hala/");
            }}
          >
            <Icon name="instagram" size={20} color="gray" />
          </Pressable>

          <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
            <Icon name="twitter" size={20} color="gray" />
          </Pressable>
          <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
            <Icon name="facebook" size={20} color="gray" />
          </Pressable>
        </View>
        <Text style={tw`text-center text-red-900 text-xl m-5`}>
          الدمام حي الشعلة
        </Text>
        <Image
          style={tw`w-72 ml-14`}
          source={require("../assets/location.jpg")}
        />
        <View style={styles.ourProduct}></View>
        <Image
          style={tw`w-10 h-10 ml-80 mb-5`}
          source={require("../assets/maps-location.png")}
        />
        <Pressable
          onPress={() => {
            Linking.openURL(
              "https://www.google.com/maps/place/Dalla+%26+Hala/@26.3604873,50.0733303,15z/data=!4m5!3m4!1s0x0:0x43dcadd46cd1a4f6!8m2!3d26.3604404!4d50.0732478?hl=en-TN"
            );
          }}
          style={tw`text-center text-gray-400 text-xl m-5`}
        >
          <Text style={tw`text-center text-gray-400 text-xl m-5`}>
            موقعنا على الخريطة
          </Text>
        </Pressable>
        <View style={tw`flex flex-row mb-10 justify-center`}>
          <Pressable
            style={{ marginRight: 9 }}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/dallah_hala/");
            }}
          >
            <Icon name="instagram" size={20} color="gray" />
          </Pressable>

          <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
            <Icon name="twitter" size={20} color="gray" />
          </Pressable>
          <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
            <Icon name="facebook" size={20} color="gray" />
          </Pressable>
        </View>
        <Text style={tw`text-center text-red-900 text-xl m-5`}>
          مدينة عنك شارع القسمة
        </Text>
        <Image
          style={tw`w-72 ml-14`}
          source={require("../assets/location.jpg")}
        />
        <View style={styles.ourProduct}></View>
        <Image
          style={tw`w-10 h-10 ml-80 mb-5`}
          source={require("../assets/maps-location.png")}
        />
        <Pressable
          onPress={() => {
            Linking.openURL(
              "https://www.google.com/maps/place/%D8%AF%D9%84%D9%87+%D9%88%D8%AD%D9%84%D8%A7+%D8%B9%D9%86%D9%83%E2%80%AD/@26.5191547,50.0347436,15z/data=!4m5!3m4!1s0x0:0x3acb9626402a47a5!8m2!3d26.5195318!4d50.03267?hl=ar-sa"
            );
          }}
          style={tw`text-center text-gray-400 text-xl m-5`}
        >
          <Text style={tw`text-center text-gray-400 text-xl m-5`}>
            موقعنا على الخريطة
          </Text>
        </Pressable>
        <View style={tw`flex flex-row mb-10 justify-center`}>
          <Pressable
            style={{ marginRight: 9 }}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/dallah_hala/");
            }}
          >
            <Icon name="instagram" size={20} color="gray" />
          </Pressable>

          <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
            <Icon name="twitter" size={20} color="gray" />
          </Pressable>
          <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
            <Icon name="facebook" size={20} color="gray" />
          </Pressable>
        </View>
      </View>

      <FooterScreen />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Icon: {
    alignItems: "center",
    flexDirection: "row",

    marginBottom: 7,
  },
  ourProduct: {
    marginLeft: 185,
    marginTop: 25,
    borderTopWidth: 5,
    borderTopColor: "#e5e5e5",
    height: 20,
    width: 30,
  },
});

export default Location;
