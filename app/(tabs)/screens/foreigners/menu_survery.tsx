// menu_survey.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AgeScreen from './survey/age';
import LanguageScreen from './survey/language';
import LevelVnScreen from './survey/level_vn';
import DesireScreen from './survey/desire';


const SurveyStack = createNativeStackNavigator();

const MenuSurvey = () => {
  return (
    <SurveyStack.Navigator 
      initialRouteName="Age"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#2563EB' },
      }}
    >
      <SurveyStack.Screen name="Age" component={AgeScreen} />
      <SurveyStack.Screen name="Language" component={LanguageScreen} />
      <SurveyStack.Screen name="LevelVn" component={LevelVnScreen} />
      <SurveyStack.Screen name="Desire" component={DesireScreen} />
    </SurveyStack.Navigator>
  );
};

export default MenuSurvey;