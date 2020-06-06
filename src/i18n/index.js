/**
 * index.js
 * Localization handle here.
 *
 * @flow
 */
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';

i18n.defaultLocale = 'en';

const deviceLocales = RNLocalize.getLocales();

if (Array.isArray(deviceLocales)) {
  i18n.locale = deviceLocales[0].languageTag;
}

i18n.fallbacks = true;
i18n.translations = {
  en
};

// translation function.
const t = (key: string, locale: string = 'en', placeholder: string = '') =>
  i18n.t(key, {placeholder, locale});

export {t};
