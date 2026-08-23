// App.tsx (Main entry - Navigation setup)
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RoleSelectionScreen from "./screens/RoleSelectionScreen";
import MenuSurvey from "./screens/foreigners/menu_survery";
import HomePrimary from "./screens/primary_school_students/Home_primary";
import Footer from "./screens/primary_school_students/Footer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="MenuSurvey" component={MenuSurvey} />
        <Stack.Screen name="Home_primary" component={HomePrimary} />
      <Stack.Screen name="Footer" component={Footer} />

      </Stack.Navigator>
   
  );
}
