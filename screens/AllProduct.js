/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import firestore from "@react-native-firebase/firestore";

import { Card } from "react-native-elements";
import FooterScreen from "./FooterScreen";

const AllProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const imageUrl = route.params.product.imageUrl;
  // const calories = route.params.product.Calories;
  // const arabicDescription = route.params.product.arabicDescription;
  // const price = route.params.product.price;
  // const arabicTitle = route.params.product.arabicTitle;
  // const weight = route.params.product.weight;
  // const code = route.params.product.code;
  // const arabicCategory = route.params.product.arabicCategory;
  // const englishCategory = route.params.product.englishCategory;
  const salty = route.params.salty;
  const hotDrink = route.params.hotDrink;
  const coldDrink = route.params.coldDrink;
  const sandwich = route.params.sandwich;
  const croissant = route.params.croissant;
  const kandy = route.params.kandy;
  const cake = route.params.cake;
  const chocolate = route.params.chocolate;
  const product = route.params.product;

  return (
    <View showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={{ margin: 15 }}>
        {salty ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={salty}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {chocolate ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={chocolate}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {cake ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={cake}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {kandy ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={kandy}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {sandwich ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={sandwich}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {croissant ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={croissant}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {hotDrink ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={hotDrink}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
        {coldDrink ? (
          <View style={{ marginLeft: -12 }}>
            <FlatList
              data={coldDrink}
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
                      style={{ width: 150, height: 150, resizeMode: "cover" }}
                      source={{
                        uri: item.imageUrl,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={tw`text-lg font-bold mt-2 text-black text-left`}
                      >
                        {item.arabicTitle}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
      </View>
      <FooterScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 1,
    marginLeft: 330,
    marginBottom: 40,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  categoriesPhoto: {
    width: 140,
    height: 140,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: "cover",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 10,
  },
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 10,
    marginLeft: 20,
    color: "white",
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginLeft: 75,
  },
  buttons: {
    width: 100,
    height: 12,
    marginLeft: 75,
  },
  grid: {
    margin: 40,
    marginTop: 20,
    flexDirection: "row",
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
export default AllProduct;
