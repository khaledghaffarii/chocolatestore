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
const AboutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  //console.log(description);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={tw`text-center w-full`}>
        <View style={tw`flex flex-col mb-10`}>
          <Text style={tw`text-center text-green-900 text-lg m-10`}>
            CHOCOLATE & COFFEE
          </Text>
          <Text style={tw`text-center text-red-900 text-xl w-full`}>
            اصالة الماضي باسلوب الحاضر معكم بكل حب
          </Text>
          <Text
            style={tw` text-green-900 text-lg border font-bold w-20 text-center ml-40 mt-10	`}
          >
            قصتنا
          </Text>
          <Text style={tw`text-right m-5 text-lg text-green-900 `}>
            تعتبر الدله هي رمز الضيافة السعودية العربية بقهوتها الأصلية حيث
            يكتمل طعم القهوة العربية بحضور الحلا لنتشارك مع ضيوفنا متعة الحديث
          </Text>
          <Text style={tw`text-right m-5 text-lg text-green-900 `}>
            أنشأ دله وحلا في عام ٢٠١٧ كبراند سعودي مختص في صناعة الشوكولا
            والحلويات وتطويره بأسعار منافسة تناسب الجميع
          </Text>
          <Text style={tw`text-right m-5 text-lg text-green-900 `}>
            وبكل فخر أثبت براند دله وحلا السعودي تميزه في وقت قصير وكسب قاعدة من
            العملاء في جميع أنحاء المملكة العربية
          </Text>
          <Text style={tw`text-right m-5 text-lg text-green-900 `}>
            السعودية تثق بمنتجات دله وحلا و أداؤها المناسب وهو بكل فخر من
            العلامات التجارية الرائدة
          </Text>
        </View>
        <View style={tw`flex flex-col mb-10`}>
          <Text
            style={tw` text-green-900 text-lg border font-bold w-32 text-center ml-36 mt-10	`}
          >
            OUR STORY
          </Text>
          <Text style={tw`text-left m-5 text-lg text-green-900 `}>
            Dallah is the symbol of Saudi Arabian hospitality with its original
            coffee, where the taste of Arabic coffee is complemented by the
            presence of sweets, to share with our guests the joy of talking
          </Text>
          <Text style={tw`text-left m-5 text-lg text-green-900 `}>
            Dallah and Hala was established in 2017 as a Saudi brand specialized
            in the manufacture of chocolate and sweets and its development at
            competitive prices that suit everyone
          </Text>
          <Text style={tw`text-left m-5 text-lg text-green-900 `}>
            Proudly, the Saudi brand Dallah and Hala has proven its excellence
            in a short time and gained a base of customers all over the Kingdom
            of Saudi Arabia who trusts Dallah and Hala products and their proper
            performance and is proudly one of the leading brands
          </Text>
        </View>
        <View style={tw`flex flex-col bg-green-800 w-full  mb-5`}>
          <View style={tw`flex  flex-row justify-center m-5`}>
            <Text style={tw`text-white pr-2`}>Gm@dallahwhala.com </Text>
            <Text style={tw`text-white `}>www.dallahwhala.com </Text>
          </View>
          <View style={tw`flex  flex-row justify-center m-5`}>
            <Text style={tw`text-white pr-2`}>KINGDOM OF SAUDI ARABIA </Text>
            <Ionicons name="logo-whatsapp" size={20} color="#ffff" />
            <Text style={tw`text-white pl-2`}>+966 59 338 8003 </Text>
          </View>
        </View>
      </View>

      <FooterScreen />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default AboutScreen;
