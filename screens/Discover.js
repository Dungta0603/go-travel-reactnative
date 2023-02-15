import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Avatarimg,
  Hotels,
  Attraction,
  Restaurahts,
  Notfound,
} from "../assets";
import MenuContaier from "../components/MenuContaier";
import Itemsocontin from "../components/Itemsocontin";
import { Entypo } from "@expo/vector-icons";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState(false);
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          placeholder="Sreach"
          className="flex-row h-10 items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg"
        ></TextInput>
      </KeyboardAvoidingView>

      {/** menu contaier  */}

      {isLoading ? (
        <View className="flex-1 items-center justify-center ">
          <ActivityIndicator size="large" color="#0B646B"></ActivityIndicator>
        </View>
      ) : (
        <ScrollView>
          <View className=" flex-row items-center justify-between px-8 mt-8">
            <MenuContaier key={"hotel"} titles="Hotels" imageSrc={Hotels} />
            <MenuContaier
              key={"attraction"}
              titles="Attraction"
              imageSrc={Attraction}
            />
            <MenuContaier
              key={"restaurants"}
              titles="Restaurahts"
              imageSrc={Restaurahts}
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top List
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <Entypo name="arrow-long-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="px-4 mt-8 flex-row items-center justify-center flex-wap">
            {mainData?.length > 0 ? (
              <>
                {" "}
                <Itemsocontin
                  key={101}
                  imageSrc={""}
                  title="flkvl"
                  location="fff"
                />
                <Itemsocontin
                  key={102}
                  imageSrc={""}
                  title="fsndkjvnscasdbcsbjkbckj"
                  location="fff"
                />
              </>
            ) : (
              <>
                <View className="w-full h-[400px] items-center space-y-8 justify-center ">
                  <Image source={Notfound} className="w-32 h-32 object-cover" />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Opp...NotFound
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
