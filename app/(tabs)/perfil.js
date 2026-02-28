import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Perfil() {
  const { titulo } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22 }}>{titulo ?? "Perfil"}</Text>
      <Text>Componente: Perfil</Text>
    </View>
  );
}