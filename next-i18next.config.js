const path = require('path');

module.exports = {
  debug: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  // ns: [],
  // defaultNS: '',

  localePath: path.resolve('public/locales'),
  localeStructure: '{{lng}}',
  localExtension: null,
};
