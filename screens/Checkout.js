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
} from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectItems } from "../slice/BasketSlice";
import CheckoutProduct from "./CheckoutProduct";
import FooterScreen from "./FooterScreen";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
const Checkout = ({ navigation, chocolate }) => {
  const items = useSelector(selectItems);

  return (
    <ScrollView style={styles.container} vertical={true}>
      {items.length ? (
        <View style={{}}>
          <ScrollView vertical={true} style={{}}>
            {items.map((item, i) => (
              <CheckoutProduct key={i} chocolate={item} />
            ))}
          </ScrollView>

          <View style={{ marginTop: 60 }}>
            <Text
              style={{
                margin: 20,
                fontSize: 20,
                color: "#484848",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              المجموع :
            </Text>

            <View style={tw` `}>
              <View style={tw`flex h-16  p-2 border-t border-gray-300`}>
                <Text style={tw`mt-3`}> SAR 115</Text>
                <Text style={tw`-mt-5 text-lg `}>
                  المجموع غير شامل للضريبة :
                </Text>
              </View>
              <View style={tw`flex h-16 p-2 border-t border-gray-300`}>
                <Text style={tw`mt-3`}> SAR 115</Text>
                <Text style={tw`-mt-5 text-lg`}>المبلغ الخاضع للضريبة :</Text>
              </View>
              <View style={tw`flex h-16 p-2 border-t border-gray-300`}>
                <Text style={tw`mt-3`}> SAR 115</Text>
                <Text style={tw`-mt-5 text-lg`}>
                  ضريبة القيمة المضافة (15%) :
                </Text>
              </View>
              <View style={tw`flex h-20 p-2  border-t border-gray-300`}>
                <Text style={tw`mt-3`}> SAR 115</Text>
                <Text style={tw`-mt-5 text-lg w-60 ml-40`}>
                  مجموعة المنتجات شامل ضريبة القيمة المضافة :
                </Text>
              </View>
              <View style={tw`flex h-16 p-2 border-t border-gray-300`}>
                <Text style={tw`mt-3`}> SAR 115</Text>
                <Text style={tw`-mt-5 text-lg font-bold`}>المجموع الكلي :</Text>
              </View>
              <View style={tw`flex  p-8 border-t  border-gray-300`}>
                <Text style={tw`mt-5 text-lg text-center  `}>
                  *ملاحظة : هذا المنتوج لا يشمل تكاليف التوصيل{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 20,
                }}
              >
                <View
                  style={{
                    marginTop: 6,
                    width: 150,
                  }}
                >
                  <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{
                      backgroundColor: "#8b704e",
                      color: "white",
                      height: 47,
                      width: 160,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        textAlign: "center",
                        margin: 10,
                      }}
                    >
                      اتمام عملية الشراء
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    marginTop: 6,
                    width: 150,
                  }}
                >
                  <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{
                      backgroundColor: "#cccccc",
                      color: "white",
                      height: 47,
                      width: 160,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        margin: 10,
                      }}
                    >
                      مواصلة التسويق
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>

            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 30,
              }}
            >
              <View
                style={{
                  marginTop: 65,
                  width: 150,
                }}
              >
                <Pressable
                  onPress={() => navigation.navigate("Home")}
                  style={{
                    backgroundColor: "#8b704e",
                    color: "white",
                    height: 47,
                    width: 160,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      margin: 10,
                    }}
                  >
                    اتمام عملية الشراء
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  marginTop: 65,
                  width: 150,
                }}
              >
                <Pressable
                  onPress={() => navigation.navigate("Home")}
                  style={{
                    backgroundColor: "#cccccc",
                    color: "white",
                    height: 47,
                    width: 160,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <Text
                    style={{ color: "black", textAlign: "center", margin: 10 }}
                  >
                    مواصلة التسويق
                  </Text>
                </Pressable>
              </View>
            </View> */}
          </View>

          <FooterScreen />
        </View>
      ) : (
        <ScrollView>
          <Card
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              elevation: 10,
              height: 200,
              borderWidth: 0,
              marginBottom: 80,
              marginTop: 100,
            }}
          >
            <View>
              <View>
                <Animatable.Text
                  animation="fadeInDown"
                  easing="ease-out"
                
                  style={tw`text-center w-full text-lg font-serif font-bold mt-5 text-gray-900 `}
                >
                  <Text
                    style={tw`text-center w-full text-lg font-serif font-bold mt-5 text-gray-900 `}
                  >
                    السلة فارغة
                  </Text>
                </Animatable.Text>
              </View>
              <View style={{}}>
                <View style={tw`w-full mt-11 `}>
                  <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{
                      backgroundColor: "#e4dcd2",
                      color: "white",

                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopRightRadius: 5,
                      borderTopLeftRadius: 5,
                    }}
                  >
                    <Animatable.Text
                      animation="pulse"
                      easing="ease-out"
                      iterationCount="infinite"
                      style={tw`text-center w-full text-lg font-serif font-bold mt-2 mb-2 text-gray-900 `}
                    >
                      <Text
                        style={{
                          color: "black",
                          textAlign: "center",
                          margin: 10,
                          fontWeight: "bold",
                          fontSize: 17,
                        }}
                      >
                        مواصلة التسويق
                      </Text>
                    </Animatable.Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Card>
          <FooterScreen />
        </ScrollView>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 5,
    marginLeft: 270,
    marginBottom: 40,
    fontSize: 17,
    color: "#f9ab37",
    fontWeight: "bold",
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
    backgroundColor: "#ffff",
  },
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -225,
    color: "#f9ab37",
    fontWeight: "bold",
  },
  recomended1: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -180,
    color: "#f9ab37",
    fontWeight: "bold",
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
export default Checkout;
