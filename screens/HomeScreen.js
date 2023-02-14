import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Heroimg } from "../assets";
import * as Animatable from "react-native-animatable";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" bg-white flex-1 relative">
      {/* First section  */}

      <View className=" flex-row px-6 mt-8 items-center space-x-2">
        <View className=" w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className=" text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className=" text-[#2A2B4B] text-3xl font-semibold">Tranvel</Text>
      </View>

      {/* second section  */}
      <View className="px-6 mt-8 space-y-3">
        <Text className=" text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className=" text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className=" text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          quis nostrum
        </Text>
      </View>
      {/* circle section */}

      <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      {/** img contatrent  */}
      <View className=" flex-1 relative items-center justify-center ">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={Heroimg}
          className="  h-full w-full object-conver mt-20"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-centens justify-center "
        >
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            className=" w-22 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-sebold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
