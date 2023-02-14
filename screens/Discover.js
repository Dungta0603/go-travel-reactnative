import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>Discover</Text>
    </View>
  );
};

export default Discover;
