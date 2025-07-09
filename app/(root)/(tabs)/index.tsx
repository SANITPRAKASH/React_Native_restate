import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="flex">HOME PAGE</Text>
      <Link href={"/(root)/(tabs)/explorePage"}>explorePage</Link>
      <Link href={"/(root)/(tabs)/profilePage"}>profilePage</Link>
      <Link href={{ pathname: "/(root)/properties/[id]", params: { id: "1" } }}>property</Link>
      <Link href={"/sign-in"}>SignIn</Link>
    </View>
  );
}
