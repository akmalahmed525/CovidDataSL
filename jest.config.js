module.exports = {
  preset: 'react-native',
  verbose: true,
  automock: false,
  testMatch: [
    '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assets/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js'
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/?!(victory-*)']
};
