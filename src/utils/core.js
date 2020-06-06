// @flow
import {Platform, Dimensions, PixelRatio} from 'react-native';

/**
 * Usage:-
 * Get the normalized size of the text.
 */
export const normalize = (size: number) => {
  const {width} = Dimensions.get('window');
  const scale = width / 320; // Iphone 5 scale.
  const scaledSize = size * scale;

  return Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(scaledSize))
    : Math.round(PixelRatio.roundToNearestPixel(scaledSize)) - 2;
};

export const getMeaningfulDateTime = (dateVal: string) => {
  const date = new Date(dateVal);
  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
