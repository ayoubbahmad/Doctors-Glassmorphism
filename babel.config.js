module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          components: './src/components',
          containers: './src/containers',
          localization: './src/localization',
          screens: './src/screens',
          utils: './src/utils',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
