/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable dot-notation */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
  FlatList,
  SafeAreaView,
} from "react-native";
import { Link } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { Card } from "react-native-elements";
import { useDispatch } from "react-redux";
import CarouselScreens from "../screens/CarouselScreens";
import { addToBasket } from "../slice/BasketSlice";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import FooterScreen from "./FooterScreen";
function VirtualizedView(props) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
const All_Product = () => {
  const navigation = useNavigation();

  const [product, setProduct] = useState(0);

  useEffect(() => {
    const getAllProduct = async () => {
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

    getAllProduct();
  }, []);

  return (
    <VirtualizedView>
      <ScrollView style={tw`bg-white`} nestedScrollEnabled={true}>
        <View style={{ marginLeft: -12, marginBottom: 90 }}>
          <FlatList
            data={product}
            numColumns={2}
            keyExtractor={(item) => item.id}
            style={tw`pl-4`}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
                onPress={() =>
                  navigation.navigate("productShow", {
                    product: item,
                  })
                }
              >
                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    style={{
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      width: 150,
                      height: 150,
                    }}
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                  <View style={{}}>
                    <Text
                      style={tw`text-lg font-bold mt-2 text-gray-500 text-left`}
                    >
                      {item.arabicTitle}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <FooterScreen />
      </ScrollView>
    </VirtualizedView>
  );
};

export default All_Product;
