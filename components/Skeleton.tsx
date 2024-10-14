import React from "react";
import { ViewProps } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { MotiView } from "moti";

export default function Skeleton({ style, ...rest }: ViewProps) {
  return (
    <MotiView
      style={style}
      {...rest}
      from={{ backgroundColor: "#ddd" }}
      animate={{ backgroundColor: "#eee" }}
      transition={{
        duration: 1000,
        loop: true,
        repeatReverse: true,
      }}
      entering={FadeIn.springify().damping(80).stiffness(200)}
      exiting={FadeOut.springify().damping(80).stiffness(200)}
    />
  );
}
