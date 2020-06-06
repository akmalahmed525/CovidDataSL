/**
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {normalize} from 'utils';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  loadingText: {
    paddingBottom: normalize(15)
  }
});

export const LoadingView: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <Text>Loading</Text>
    </View>
  );
};
