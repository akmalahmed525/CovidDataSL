// @flow
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {human} from 'react-native-typography';

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
  text: {
    textAlign: 'center',
    fontFamily: 'Rubik-Regular'
  },
  cardTitle: {
    textAlign: 'left',
    fontFamily: 'Rubik-Regular'
  },
  cardSubTitle: {
    textAlign: 'left',
    fontFamily: 'Rubik-Light'
  },
  card: {
    flexDirection: 'column',
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
  }
});

type HospitalItemProps = {
  name: string,
  localPatients: any,
  foreignPatients: any,
  cumulativePatients: any
};
const HospitalDataItem = ({
  name,
  localPatients,
  foreignPatients,
  cumulativePatients
}: HospitalItemProps) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.85}>
    <Text style={[human.body, styles.cardTitle]}>{name}</Text>
    <Text style={[human.footnote, styles.cardSubTitle]}>{localPatients}</Text>
    <Text style={[human.footnote, styles.cardSubTitle]}>{foreignPatients}</Text>
    <Text style={[human.footnote, styles.cardSubTitle]}>
      {cumulativePatients}
    </Text>
  </TouchableOpacity>
);

type Props = {
  locale: 'en',
  data: Object
};
class HospitalDataScreenView extends Component<Props> {
  render() {
    const {locale, data} = this.props;
    const hospitalData = data.hospital_data;
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={[human.title1, styles.text]}>
            {t(`placeholders.hospital_data`, locale)}
          </Text>
        </View>
        <FlatList
          renderItem={({item}) => (
            <HospitalDataItem
              name={item.hospital.name}
              localPatients={t(
                `placeholders.local_patients`,
                locale,
                item.cumulative_local
              )}
              foreignPatients={t(
                `placeholders.foreign_patients`,
                locale,
                item.cumulative_foreign
              )}
              cumulativePatients={t(
                `placeholders.cumulative_total`,
                locale,
                item.cumulative_total
              )}
            />
          )}
          data={hospitalData}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.app.state,
  data: state.app.data
});

const HospitalDataScreen = connect<Props, *, *, *, *, *>(
  mapStateToProps,
  {}
)(HospitalDataScreenView);
export default HospitalDataScreen;
