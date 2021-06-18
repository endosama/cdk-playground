module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-typescript"],
    plugins: [
      ["@babel/plugin-proposal-class-properties"],
      ["@babel/plugin-transform-runtime"],
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-syntax-class-properties",
      "@babel/plugin-syntax-object-rest-spread",
      "@babel/plugin-syntax-dynamic-import",
    ],
  };
};
