// App.tsx (Main entry - Navigation setup)
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RoleSelectionScreen from "./screens/RoleSelectionScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuSurvey from "./screens/foreigners/menu_survery";
import Footer from "./screens/primary_school_students/Footer";
import Header from "./screens/primary_school_students/Header";
import HomePrimary from "./screens/primary_school_students/Home_primary";
import PracticeReading from "./screens/primary_school_students/skills_reading_students/practice_reading_class1";
import ReadingWeekDetails from "./screens/primary_school_students/skills_reading_students/reading_week1_details";
import ReadingTopicDetails from "./screens/primary_school_students/skills_reading_students/reading_topic1_details";

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
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Home_primary" component={HomePrimary} />
      <Stack.Screen name="PracticeReading" component={PracticeReading} />
      <Stack.Screen name="ReadingWeekDetails" component={ReadingWeekDetails} />
      <Stack.Screen name="ReadingTopicDetails" component={ReadingTopicDetails} />
      <Stack.Screen name="Footer" component={Footer} />
    </Stack.Navigator>
  );
}
