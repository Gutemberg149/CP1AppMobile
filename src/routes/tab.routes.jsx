import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Cadastro"
import {Feather} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
                name="home"
                component={HomeScreen}
                options={{tabBarIcon:()=><Feather name="home" color="green" size={30}/>,tabBarLabel:"Inicio",}}

            />
        </Tab.Navigator>
    )
}