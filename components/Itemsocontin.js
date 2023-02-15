import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Itemsocontin = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className=" rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full rounded-md object-cover"
      />
      <Text className="text-[#428288] text-[#18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}.. ` : title}
      </Text>
      <View className="flex-row items-center space-x-1">
        <FontAwesome5 name="map-marker-alt" size={18} color="black" />
        <Text className="text-[#428288] text-[#14px] font-bold">
          {location?.length > 14 ? `${location.slice(0, 18)}.. ` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Itemsocontin;
