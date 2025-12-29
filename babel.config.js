module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './app',
            '@components': './app/component-library/components',
            '@utils': './app/utils',
            '@core': './app/core',
          },
        },
      ],
    ],
  };
};


