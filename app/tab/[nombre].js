import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function TabDinamica() {
  const { nombre, titulo } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>{titulo ?? "Sin título"}</Text>
      <Text>Ruta dinámica: {String(nombre)}</Text>

      <Pressable
        onPress={() => router.back()}
        style={{ marginTop: 16, padding: 10, borderWidth: 1, borderRadius: 8 }}
      >
        <Text>Volver</Text>
      </Pressable>
    </View>
  );
}