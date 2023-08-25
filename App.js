import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReceivedNumberProvider } from "./context/userid";
import BottomTabNavigator from "./navigator/BottomtabNavigator";
import LoginScreen from "./pages/LoginScreen";
import AuthScreen from "./pages/AuthScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReceivedNumberProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReceivedNumberProvider>
  );
}
