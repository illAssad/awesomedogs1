module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        fileName: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src',
          '@assets': './assets',
          '@components': './src/global-components',
        },
      },
    ],
  ],
};
