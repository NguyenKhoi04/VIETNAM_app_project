// menu_survey.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AgeScreen from './survey/age';
import LanguageScreen from './survey/language';
import LevelVnScreen from './survey/level_vn';
import ReasonScreen from './survey/reason';
import DesireScreen from './survey/desire';
import StyleForeignersScreen from './survey/style_foreigners';
import PracticeScreen from './survey/practice';


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
      <SurveyStack.Screen name="Reason" component={ReasonScreen} />
      <SurveyStack.Screen name="Desire" component={DesireScreen} />
      <SurveyStack.Screen name="Style_Foreigners" component={StyleForeignersScreen} />
      <SurveyStack.Screen name="Practice" component={PracticeScreen} />
    </SurveyStack.Navigator>
  );
};

export default MenuSurvey;