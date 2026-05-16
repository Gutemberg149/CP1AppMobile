import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";


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
        tabBarActiveTintColor: "#946EC2", 
        tabBarInactiveTintColor: "gray",
        
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 5,
        },
        
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center",
        },
       
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
        },
      }}
    >
   
      <Tab.Screen
        name="home"
        component={Cadastro}
        options={{
          tabBarIcon: ({ color }) => <Feather name="edit" color={color} size={26} />,
          tabBarLabel: "Cadastro",
        }}
      />

   
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" color={color} size={26} />,
          tabBarLabel: "Perfil",
        }}
      />

      <Tab.Screen
        name="Dev"
        component={Dev}
        options={{
          tabBarIcon: ({ color }) => <Feather name="code" color={color} size={26} />,
          tabBarLabel: "Devs",
        }}
      />


      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarButton: () => null, 
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}
