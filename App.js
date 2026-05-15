import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from "./src/routes/tab.routes";
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </UserProvider>
  );
}