import {t} from 'i18n';

describe('Must translate the language', () => {
  it('should translate the language', () => {
    expect(t('about.title')).toBe('Covid-19 Data Visualization Application');
  });
});
