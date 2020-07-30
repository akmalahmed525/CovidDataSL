import {t} from 'i18n';

describe('Must translate the language', () => {
  it('should translate the language - correct one', () => {
    expect(t('about.title')).toBe('Covid-19 Data Visualization Application');
  });

  it('should translate the language - wrong one', () => {
    expect(t('about.title2')).not.toBe('Covid-19 Data Visualization Application');
  });
});
