// @flow
/* eslint-disable */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {t} from 'i18n';
import themes from 'themes';

import PCRTestDataScreen from 'screens/PCRTestDataScreen';
import HospitalDataScreen from 'screens/HospitalDataScreen';
import CurrentDataScreen from 'screens/CurrentDataScreen';
import AboutScreen from 'screens/AboutScreen';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Rubik-Regular',
    color: themes.colors.grey
  },
  labelFocused: {
    fontFamily: 'Rubik-Regular',
    color: themes.colors.black
  }
});

const HomeBottomTab = createBottomTabNavigator();

const HomeBottomTabScreens = () => (
  <HomeBottomTab.Navigator headerMode="none">
    <HomeBottomTab.Screen
      name="CurrentData"
      component={CurrentDataScreen}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={focused ? styles.labelFocused : styles.label}>
            {t('icons.current_data')}
          </Text>
        ),
        tabBarIcon: ({size, focused}) => (
          <MaterialCommunityIcons
            name="calendar-today"
            color={focused ? themes.colors.black : themes.colors.grey}
            size={size}
          />
        )
      }}
    />
    <HomeBottomTab.Screen
      name="PCRTestData"
      component={PCRTestDataScreen}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={focused ? styles.labelFocused : styles.label}>
            {t('icons.pcr_data')}
          </Text>
        ),
        tabBarIcon: ({size, focused}) => (
          <FontistoIcons
            name="blood-test"
            color={focused ? themes.colors.black : themes.colors.grey}
            size={size}
          />
        )
      }}
    />
    <HomeBottomTab.Screen
      name="HospitalData"
      component={HospitalDataScreen}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={focused ? styles.labelFocused : styles.label}>
            {t('icons.hospitals')}
          </Text>
        ),
        tabBarIcon: ({focused, size}) => (
          <MaterialCommunityIcons
            name="hospital-building"
            color={focused ? themes.colors.black : themes.colors.grey}
            size={size}
          />
        )
      }}
    />
    <HomeBottomTab.Screen
      name="AboutData"
      component={AboutScreen}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={focused ? styles.labelFocused : styles.label}>
            {t('icons.about')}
          </Text>
        ),
        tabBarIcon: ({focused, size}) => (
          <MaterialIcons
            name="info-outline"
            color={focused ? themes.colors.black : themes.colors.grey}
            size={size}
          />
        )
      }}
    />
  </HomeBottomTab.Navigator>
);

export const HomeBottomTabName = 'HomeBottomTabName';

export default HomeBottomTabScreens;
