module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          components: './src/components',
          icons: './assets/icons',
          images: './assets/images',
          configs: './src/configs',
          helpers: './src/helpers',
          screens: './src/screens',
          store: './src/store',
          theme: './src/theme',
          types: './src/types',
          constants: './src/constants',
        },
      },
    ],
  ],
};
