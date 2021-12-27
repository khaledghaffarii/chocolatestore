/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { Image, Pressable, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../components/context";

export default function DrawerContent() {
  const paperTheme = useTheme();
  const navigation = useNavigation();
  //   const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.tinyLogo}
              />
            </View>

            <View style={styles.row}></View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label={() => <Text style={{ fontSize: 20 }}>الرئيسية</Text>}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
            <DrawerItem
              // icon={({ color, size }) => (
              //   <Icon name="account-outline" color={color} size={size} />
              // )}
              label={() => <Text style={{}}>المنتجات</Text>}
              onPress={() => {
                navigation.navigate("all_products");
              }}
            />
            <DrawerItem
              // icon={({ color, size }) => (
              //   <Icon name="bookmark-outline" color={color} size={size} />
              // )}
              label={() => <Text style={{}}>من نحن</Text>}
              onPress={() => {
                navigation.navigate("About");
              }}
            />
            <DrawerItem
              // icon={({ color, size }) => (
              //   <Icon name="account-check-outline" color={color} size={size} />
              // )}
              label={() => <Text style={{}}>فروعنا</Text>}
              onPress={() => {
                navigation.navigate("location");
              }}
            />
            <View style={styles.ourProduct}></View>
            <DrawerItem
              // icon={({ color, size }) => (
              //   <Icon name="account-check-outline" color={color} size={size} />
              // )}
              label={() => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="arrow-left" size={20} color="#8f6f64" />
                  <Text style={{ marginRight: 3 }}>الدخول </Text>
                </View>
              )}
              onPress={() => {
                navigation.navigate("login");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title=" " style={{ marginBottom: 30 }}>
            <View style={styles.Icon}>
              <Pressable
                style={{ marginRight: 9 }}
                onPress={() => {
                  Linking.openURL("https://www.instagram.com/dallah_hala/");
                }}
              >
                <Icon name="instagram" size={20} color="#8f6f64" />
              </Pressable>
              <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
                <Icon name="whatsapp" size={20} color="#8f6f64" />
              </Pressable>
              <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
                <Icon name="twitter" size={20} color="#8f6f64" />
              </Pressable>
              <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
                <Icon name="facebook" size={20} color="#8f6f64" />
              </Pressable>
              <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
                <Icon name="phone" size={20} color="#8f6f64" />
              </Pressable>
              <Pressable style={{ marginRight: 9 }} onPress={() => {}}>
                <Icon name="email-outline" size={20} color="#8f6f64" />
              </Pressable>
            </View>
            {/* <TouchableRipple>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple> */}
          </Drawer.Section>
          <Drawer.Section title=" إتصل بنا">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Pressable style={{ marginRight: 9, marginLeft: 9 }}>
                <Icon name="clock-outline" size={20} color="#8f6f64" />
              </Pressable>
              <Text>08:00 - 17:00</Text>
            </View>

            <View
              style={{ display: "flex", flexDirection: "row", padding: 10 }}
            >
              <Pressable style={{ marginRight: 9, marginLeft: 9 }}>
                <Icon name="phone" size={20} color="#8f6f64" />
              </Pressable>
              <Text>+ 966 59 338 8003</Text>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section> */}
    </View>
  );
}

const styles = StyleSheet.create({
  ourProduct: {
    marginLeft: 130,
    marginTop: 25,
    borderTopWidth: 3,
    borderTopColor: "#e5e5e5",
    height: 20,
    width: 30,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 10,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tinyLogo: {
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 60,
    width: 110,
    height: 50,
  },
  Icon: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 30,
    marginBottom: 7,
    marginTop: -25,
  },
});
