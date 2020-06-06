// @flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from 'screens/SplashScreen';

const IntroStack = createStackNavigator();

const IntroStackScreens = () => (
  <IntroStack.Navigator headerMode="none" initialRouteName="Splash">
    <IntroStack.Screen name="Splash" component={SplashScreen} />
  </IntroStack.Navigator>
);

export const IntroStackName = 'IntroStackName';

export default IntroStackScreens;
