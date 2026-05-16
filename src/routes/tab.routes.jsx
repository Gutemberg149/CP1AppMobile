// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather } from "@expo/vector-icons";

// // Importação das suas telas
// import Cadastro from "../screens/Cadastro"; // Certifique-se que o nome do arquivo/pasta está correto
// import CameraScreen from "../screens/CameraScreen";

// const Tab = createBottomTabNavigator();

// export default function TabRoutes() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       {/* Tela de Cadastro (Sua Home) */}
//       <Tab.Screen
//         name="home"
//         component={Cadastro}
//         options={{
//           tabBarIcon: () => <Feather name="home" color="#946EC2" size={30} />,
//           tabBarLabel: "Início",
//         }}
//       />

//       {/* Tela de Câmera (Escondida da Barra) */}
//       <Tab.Screen
//         name="Camera"
//         component={CameraScreen}
//         options={{
//           tabBarButton: () => null, // Faz o botão sumir da barra inferior
//           tabBarStyle: { display: "none" }, // Garante que a barra não apareça na câmera
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

// Importação das telas
import Cadastro from "../screens/Cadastro";
import CameraScreen from "../screens/CameraScreen";
import Perfil from "../screens/Perfil";
import Dev from "../screens/Dev";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#946EC2", // Cor roxa para itens ativos
        tabBarInactiveTintColor: "gray",
        // Centralização dos itens na barra
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 5,
        },
        // Estilo dos textos (labels)
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center",
        },
        // Altura da barra para garantir espaço para a centralização
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
        },
      }}
    >
      {/* 1. Tela de Cadastro */}
      <Tab.Screen
        name="home"
        component={Cadastro}
        options={{
          tabBarIcon: ({ color }) => <Feather name="edit" color={color} size={26} />,
          tabBarLabel: "Cadastro",
        }}
      />

      {/* 2. Tela de Perfil */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" color={color} size={26} />,
          tabBarLabel: "Perfil",
        }}
      />

      {/* 3. Tela de Desenvolvedores */}
      <Tab.Screen
        name="Dev"
        component={Dev}
        options={{
          tabBarIcon: ({ color }) => <Feather name="code" color={color} size={26} />,
          tabBarLabel: "Devs",
        }}
      />

      {/* 4. Tela de Câmera (Escondida da Barra Inferior) */}
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarButton: () => null, // Oculta o botão na Tab Bar
          tabBarStyle: { display: "none" }, // Oculta a barra ao abrir a câmera
        }}
      />
    </Tab.Navigator>
  );
}
