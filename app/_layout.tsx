import "react-native-reanimated";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AvailabilityAnimation from "@/components/AvailabilityAnimation";
import { useRef, useState } from "react";
import { generateFakeHomes, HomeType } from "@/data/mock";

export default function RootLayout() {
  const [data, setData] = useState<HomeType[]>(generateFakeHomes());
  const [isLoading, setIsLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <View style={styles.container}>
      <AvailabilityAnimation data={data} isLoading={isLoading} />

      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={() => {
          if (timer.current) {
            clearTimeout(timer.current);
          }
          setIsLoading(true);

          setTimeout(() => {
            setIsLoading(false);
            setData(generateFakeHomes());
          }, Math.random() * 1000 + 1000);
        }}
      >
        <Text>Generate new data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    alignItems: "center",
    marginTop: 10,
  },
});
