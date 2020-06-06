/**
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {human} from 'react-native-typography';
import LottieView from 'lottie-react-native';

import {t} from 'i18n';
import {fetchData} from 'store/actions';
import themes from 'themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white
  },
  banner: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  animationStyle: {
    width: themes.dimens.animationWidth
  },
  textStyleTitle: {
    textAlign: 'center',
    fontFamily: 'Rubik-Regular'
  }
});

type Props = {
  locale: 'en',
  isConnected: boolean,
  fetchData: Function
};
class SplashScreenView extends Component<Props> {
  componentDidMount() {
    const {isConnected, fetchData} = this.props;
    if (isConnected) {
      fetchData();
    }
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.isConnected !== this.props.isConnected) {
      const {isConnected} = this.props;
      return isConnected;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.props.fetchData();
    }
  }

  render() {
    const {locale, isConnected} = this.props;
    const animatedItem = isConnected
      ? require('assets/animations/20239-server-loop.json')
      : require('assets/animations/12907-no-connection.json');

    const text = isConnected
      ? t('placeholders.fetching', locale)
      : t('placeholders.no_connection', locale);
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <LottieView
            style={styles.animationStyle}
            source={animatedItem}
            autoPlay
            loop
          />
          <Text style={[human.title1, styles.textStyleTitle]} />
          <Text style={[human.title1, styles.textStyleTitle]}>{text}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.app.locale,
  isConnected: state.network.isConnected
});

const SplashScreen = connect<Props, *, *, *, *, *>(mapStateToProps, {
  fetchData
})(SplashScreenView);
export default SplashScreen;
