import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5174d6',
        headerShown: false,

        // Barra abajo
        tabBarStyle: {
          height: 60,
        },

        // Cada item ocupa lo mismo
        tabBarItemStyle: {
          flex: 1,
        },

        // Centrado del label
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="inicio"
        options={{
          title: "Inicio",
          // Envia el título como parámetro en la ruta
          href: { pathname: "/(tabs)/inicio", params: { titulo: "Inicio" } },
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          href: { pathname: "/(tabs)/perfil", params: { titulo: "Perfil" } },
        }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          title: "Buscar",
          href: { pathname: "/(tabs)/buscar", params: { titulo: "Buscar" } },
        }}
      />
    </Tabs>
  );
}