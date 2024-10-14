import { View, Image } from "react-native";
import React from "react";
import { HomeType } from "@/data/mock";

type ItemProps = {
  item: HomeType;
  index: number;
};

const _spacing = 4;
const _borderRadius = 8;
const _itemSize = 60;

export const getRandomRotation = () =>
  (Math.random() > 0.5 ? -1 : 1) * Math.random() * 15;

export default function Item({ item, index }: ItemProps) {
  return (
    <View
      style={{
        width: _itemSize,
        aspectRatio: 1,
        borderRadius: _borderRadius,
        padding: _spacing,
        backgroundColor: "#fff",
        elevation: 5,
        marginLeft: index !== 0 ? -_itemSize / 2 : 0,
        transform: [{ rotate: `${getRandomRotation()}deg` }],
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          borderRadius: _borderRadius,
          flex: 1,
        }}
      />
    </View>
  );
}
