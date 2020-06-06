// @flow
import React, {Component, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import {human} from 'react-native-typography';
import Config from 'react-native-config';
import LottieView from 'lottie-react-native';

import {t} from 'i18n';
import {normalize} from 'utils';
import themes from 'themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(10)
  },
  scrollView: {},
  text: {
    textAlign: 'left',
    fontFamily: 'Rubik-Regular'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Rubik-Regular'
  },
  animationStyle: {
    width: themes.dimens.animationWidth
  },
  textLight: {
    textAlign: 'left',
    fontFamily: 'Rubik-Light'
  },
  header: {
    padding: normalize(10)
  },
  card: {
    flexDirection: 'column',
    width: normalize(230),
    shadowColor: themes.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: themes.dimens.cardShadowOpacity,
    shadowRadius: themes.dimens.cardShadowRadius,
    elevation: themes.dimens.cardElevation,
    backgroundColor: themes.colors.white,
    padding: themes.dimens.cardPadding,
    margin: themes.dimens.cardMargin,
    borderRadius: themes.dimens.cardRadius
  },
  hr: {
    borderBottomColor: themes.colors.black,
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 15
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

type CardProps = {
  title: string,
  value: any,
  valueColor?: string
};
const CardItem = (props: CardProps) => (
  <TouchableOpacity activeOpacity={0.85} style={styles.card}>
    <Text style={[human.title3, styles.text]}>{props.title}</Text>
    <View style={styles.hr} />
    <View style={styles.valueContainer}>
      <Text style={[human.largeTitle, styles.text, {color: props.valueColor}]}>
        {props.value}
      </Text>
    </View>
  </TouchableOpacity>
);

CardItem.defaultProps = {
  valueColor: themes.colors.black
};

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

type Props = {
  data: Object,
  locale: 'en'
};
class CurrentDataScreenView extends Component<Props> {
  render() {
    const {locale, data} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.banner}>
            <Text style={[human.title1, styles.title]}>
              {t('placeholders.title', locale)}
            </Text>
            <LottieView
              style={styles.animationStyle}
              source={require('assets/animations/17977-corona-virus.json')}
              autoPlay
              loop
            />
            <Text style={[human.body, styles.textLight, {textAlign: 'center'}]}>
              {t(`placeholders.data_fetch_info`, locale)}
            </Text>
            <OpenURLButton
              url={Config.API_URL}
              style={[
                human.body,
                styles.text,
                {textAlign: 'center', color: themes.colors.blue}
              ]}>
              {Config.API_URL}
            </OpenURLButton>
          </View>
          <View style={styles.header}>
            <Text style={[human.title2, styles.text]}>
              {t(
                `placeholders.local_covid_cases`,
                locale,
                data.update_date_time
              )}
            </Text>
          </View>
          <View>
            <ScrollView
              style={styles.scrollView}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <CardItem
                title={t('current_data.local_new_cases', locale)}
                value={data.local_new_cases}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.local_total_cases', locale)}
                value={data.local_total_cases}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t(
                  'current_data.local_total_number_of_individuals_in_hospitals',
                  locale
                )}
                value={data.local_total_number_of_individuals_in_hospitals}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.local_deaths', locale)}
                value={data.local_deaths}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.local_new_deaths', locale)}
                value={data.local_new_deaths}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.local_recovered', locale)}
                value={data.local_recovered}
                valueColor={themes.colors.green}
              />
              <CardItem
                title={t('current_data.local_active_cases', locale)}
                value={data.local_active_cases}
                valueColor={themes.colors.blue}
              />
            </ScrollView>
          </View>
          <View style={styles.header}>
            <Text style={[human.title2, styles.text]}>
              {t(
                `placeholders.global_covid_cases`,
                locale,
                data.update_date_time
              )}
            </Text>
          </View>
          <View>
            <ScrollView
              style={styles.scrollView}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <CardItem
                title={t('current_data.global_new_cases', locale)}
                value={data.global_new_cases}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.global_total_cases', locale)}
                value={data.global_total_cases}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.global_deaths', locale)}
                value={data.global_deaths}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.global_new_deaths', locale)}
                value={data.global_new_deaths}
                valueColor={themes.colors.danger}
              />
              <CardItem
                title={t('current_data.global_recovered', locale)}
                value={data.global_recovered}
                valueColor={themes.colors.green}
              />
            </ScrollView>
            <View style={styles.header} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.app.data,
  locale: state.app.locale
});

const CurrentDataScreen = connect<Props, *, *, *, *, *>(
  mapStateToProps,
  {}
)(CurrentDataScreenView);
export default CurrentDataScreen;
