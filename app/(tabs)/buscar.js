import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Buscar() {
  const { titulo } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22 }}>{titulo ?? "Buscar"}</Text>
      <Text>Componente: Buscar</Text>
    </View>
  );
}