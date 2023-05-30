module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@global": "./src/global",
            "@hooks": "./src/hooks",
            "@pages": "./src/pages",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@validation": "./src/validation",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
