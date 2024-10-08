import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="articles/[id]"
        options={{
          headerLeft() {
            return (
              <Link style={{ marginLeft: 10 }} href="/">
                <AntDesign name="back" size={24} color="black" />
              </Link>
            );
          },
          headerTitle: "",
        }}
      />
    </Stack>
  );
}
