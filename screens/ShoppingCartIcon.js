/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { selectItems } from "../slice/BasketSlice";
import { useNavigation } from "@react-navigation/native";
const ShoppingCartIcon = () => {
  const items = useSelector(selectItems);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("checkout")}>
      <View style={{ padding: 5 }}>
        <View
          style={{
            position: "absolute",
            height: 24,
            width: 24,
            borderRadius: 15,
            backgroundColor: "rgba(95,19,90,0.4)",
            right: -7,
            bottom: -3,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            marginLeft: 15,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {items.length}
          </Text>
        </View>
        <Icon name="ios-cart" size={30} color="rgb(27,25,80)" />
      </View>
    </TouchableOpacity>
  );
};
export default ShoppingCartIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
});
