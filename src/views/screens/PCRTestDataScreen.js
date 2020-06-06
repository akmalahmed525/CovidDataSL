// @flow
import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {human} from 'react-native-typography';
import {
  VictoryChart,
  VictoryBar,
  VictoryZoomContainer,
  VictoryTheme
} from 'victory-native';

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
  }
});

type Props = {
  data: Object,
  locale: 'en'
};
class PCRTestDataScreenView extends Component<Props> {
  render() {
    const {locale, data} = this.props;
    let chartData = data.daily_pcr_testing_data;
    chartData = chartData.map(({date, count}) => ({
      x: date,
      y: parseInt(count, 10)
    }));
    /* eslint-disable-next-line */
    const maxYValue = Math.max.apply(
      Math,
      chartData.map((o) => o.y)
    );
    const totalPCRSum = chartData.reduce((a, {y}) => a + y, 0);
    const yBound = [0, maxYValue + 300];
    const xBound = [chartData.length - 3, chartData.length + 1];
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.banner}>
            <Text style={[human.title1, styles.text]}>
              {t('pcr_test.daily_pcr_testing_data', locale)}
            </Text>
          </View>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{x: 40}}
            containerComponent={
              <VictoryZoomContainer
                zoomDomain={{x: xBound, y: yBound}}
                zoomDimension="x"
              />
            }>
            <VictoryBar
              barRatio={0.8}
              labels={({datum}) => `count: ${datum.y}`}
              barWidth={({index}) => index * 0.3}
              style={{
                data: {fill: themes.colors.blue},
                tickLabels: {angle: 45}
              }}
              data={chartData}
            />
          </VictoryChart>
          <View style={styles.banner}>
            <Text style={[human.body, styles.text]}>
              {t('pcr_test.total_pcr_data', locale, data.update_date_time)}
            </Text>
            <Text
              style={[human.title2, styles.text, {color: themes.colors.blue}]}>
              {totalPCRSum}
            </Text>
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

const PCRTestDataScreen = connect<Props, *, *, *, *, *>(
  mapStateToProps,
  {}
)(PCRTestDataScreenView);
export default PCRTestDataScreen;
