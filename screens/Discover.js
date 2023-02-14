import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatarimg } from "../assets";
const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View className="flex-row items-center justify-bettew px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold ">
            Discover
          </Text>
          <Text className="text-[36px] text-[#527283]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center ">
          <Image
            source={Avatarimg}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
