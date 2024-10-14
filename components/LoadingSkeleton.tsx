import { View } from "react-native";
import React from "react";
import Skeleton from "./Skeleton";
import { getRandomRotation } from "./Item";

export default function LoadingSkeleton() {
  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(3).keys()].map((index) => (
        <Skeleton
          key={index}
          style={{
            width: 60,
            aspectRatio: 1,
            borderRadius: 8,
            backgroundColor: "#ddd",
            borderWidth: 4,
            borderColor: "#fff",
            marginLeft: index === 0 ? 0 : -60 / 2,
            transform: [{ rotate: `${getRandomRotation()}deg` }],
          }}
        />
      ))}
    </View>
  );
}
