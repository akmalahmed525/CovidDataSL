// @flow
import {Dimensions} from 'react-native';
import {normalize} from 'utils';

const {width, height} = Dimensions.get('window');

export default {
  animationWidth: width * 0.25,
  basePadding: normalize(10),
  bannerPadding: normalize(10),
  cardWidth: width * 0.75,
  cardHeight: height * 0.5,
  cardPadding: normalize(10),
  cardMargin: normalize(10),
  cardRadius: normalize(10),
  cardShadowOpacity: 0.25,
  cardShadowRadius: 3.84,
  cardElevation: 5
};
