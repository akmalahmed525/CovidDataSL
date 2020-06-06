// @flow
import React, {Component, useCallback} from 'react';
import {View, Text, Alert, Linking, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {human} from 'react-native-typography';
import Config from 'react-native-config';

import {t} from 'i18n';
import themes from 'themes';
import {locale} from 'i18n-js';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white
  },
  banner: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: themes.dimens.bannerPadding
  },
  animationStyle: {
    width: width * 0.3
  },
  textStyleTitle1: {
    textAlign: 'center',
    fontFamily: 'Rubik-Regular'
  },
  textStyleTitle2: {
    textAlign: 'center',
    fontFamily: 'Rubik-Light'
  },
  linkStyle: {
    color: themes.colors.blue
  }
});

type URLLinkProps = {
  url: string,
  style: Object | Array<any>,
  children: any
};
const OpenURLButton = ({url, style, children}: URLLinkProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text style={style} onPress={handlePress}>
      {children}
    </Text>
  );
};

type Props = {};
class AboutScreenView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={[human.title1, styles.textStyleTitle1]}>
            {t('about.title')}
          </Text>
          <Text style={[human.body, styles.textStyleTitle2]} />
          <Text style={[human.title2, styles.textStyleTitle2]}>
            {t('about.description')}
          </Text>
          <Text style={[human.body, styles.textStyleTitle2]} />
          <OpenURLButton
            style={[human.body, styles.textStyleTitle1, styles.linkStyle]}
            url={Config.REPOSITORY_URL}>
            {t('about.get_code', locale)}
          </OpenURLButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state});

const AboutScreen = connect<Props, *, *, *, *, *>(
  mapStateToProps,
  {}
)(AboutScreenView);
export default AboutScreen;
