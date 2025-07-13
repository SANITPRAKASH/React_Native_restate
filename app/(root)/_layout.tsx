import { Redirect, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/lib/global-provider";
import { Image } from "react-native";

export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
         <Image
          source={require("@/assets/images/loading.png")}
          className="w-20 h-20"
          resizeMode="contain"
        />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}