import { StyleSheet, View } from "react-native";
import React from "react";
import { HomeType } from "@/data/mock";
import Item from "./Item";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import Skeleton from "./Skeleton";
import LoadingSkeleton from "./LoadingSkeleton";

type AvailabilityAnimationProps = {
  data: HomeType[];
  isLoading: boolean;
};

const _stagger = 75;

export default function AvailabilityAnimation({
  data,
  isLoading,
}: AvailabilityAnimationProps) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, alignItems: "center" }}>
        {!isLoading ? (
          <Animated.Text
            entering={FadeIn.springify().damping(80).stiffness(200)}
            exiting={FadeOut.springify().damping(80).stiffness(200)}
          >
            {data.length} available
          </Animated.Text>
        ) : (
          <Skeleton style={styles.skeleton} />
        )}
      </View>
      <View style={styles.contentData}>
        {!isLoading ? (
          data.map((item, index) => (
            <Animated.View
              key={item.key}
              style={{ zIndex: index }}
              entering={ZoomIn.springify()
                .stiffness(200)
                .damping(80)
                .delay(index * _stagger)}
              exiting={ZoomOut.springify()
                .springify(200)
                .damping(80)
                .delay(index * _stagger)}
            >
              <Item item={item} index={index} />
            </Animated.View>
          ))
        ) : (
          <LoadingSkeleton />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skeleton: {
    width: "80%",
    height: 60 * 0.25,
    borderRadius: 8 / 2,
    backgroundColor: "#ddd",
  },
  contentData: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    minHeight: 60,
  },
});
