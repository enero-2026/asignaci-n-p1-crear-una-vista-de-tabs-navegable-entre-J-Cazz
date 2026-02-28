import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const TABS = [
  { label: "Inicio", nombre: "inicio" },
  { label: "Perfil", nombre: "perfil" },
  { label: "Buscar", nombre: "buscar" },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 22 }}>Pantalla principal</Text>
        <Text>Elige una pestaña abajo</Text>
      </View>

      
      <View
        style={{
          flexDirection: "row",
          height: 60,
          borderTopWidth: 1,
        }}
      >
        {TABS.map((t) => (
          <Pressable
            key={t.nombre}
            onPress={() =>
              router.push({
                pathname: `/tab/${t.nombre}`,
                params: { titulo: t.label },
              })
            }
            style={{
              flex: 1, 
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>{t.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}