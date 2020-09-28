import NextI18Next from 'next-i18next';

const options = {
  defaultLanguage: 'ja',
  otherLanguages: ['en'],
  serverLanguageDetection: false,
  browserLanguageDetection: true,
  localePath: '../public/locales',
  detection: {
    order: ['cookie', 'localStorage', 'header', 'navigator'],
  },
  fallbackLng: 'ja',
  caches: ['localStorage', 'cookie'],
};

const NextI18NextInstance = new NextI18Next(options);

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation } = NextI18NextInstance;
