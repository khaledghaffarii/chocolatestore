import React, { useRef, useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Button,
  TouchableOpacity,
  useWindowDimensions,
  AppState,
} from "react-native";
import { classNames } from "../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const window = useWindowDimensions();
  const appState = useRef(AppState.currentState);
  const scrollRef = useRef();
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    // AppState.addEventListener("scroll", toggleVisibility);
    // return () => {
    //   AppState.removeEventListener("scroll", toggleVisibility);
    // };
  });

  return (
    <View className="fixed bottom-2 right-2">
      <TouchableOpacity
        onPress={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        )}
      >
        <Icon
          name="arrow-up-circle-outline"
          size={50}
         
        />
      </TouchableOpacity>
    </View>
  );
};
