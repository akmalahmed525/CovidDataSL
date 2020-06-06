// @flow
/* eslint react/jsx-indent-props: 0 */
/* eslint prettier/prettier: 0 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroStackScreens, {IntroStackName} from 'navigation/introStackScreens';
import HomeBottomTabScreens, {HomeBottomTabName} from 'navigation/homeBottomTabScreens';

const RootStack = createStackNavigator();

type Props = {
  data: Object
};
class RootNavigationSwitch extends Component<Props> {
  render() {
    const {data} = this.props;
    const rootOptions = {animationEnabled: true};
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          {Object.keys(data).length === 0 && data.constructor === Object ? (
            <RootStack.Screen
            name={IntroStackName}
            component={IntroStackScreens}
            options={rootOptions} />
) : (
  <RootStack.Screen
              name={HomeBottomTabName}
              component={HomeBottomTabScreens}
              options={rootOptions}
            />
)}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({data: state.app.data});

const RootNavigation = connect<Props, *, *, *, *, *>(
  mapStateToProps,
  {}
)(RootNavigationSwitch);
export default RootNavigation;
