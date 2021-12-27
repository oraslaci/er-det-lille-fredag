const config = {
  transform: {
    "^.+\\.vue$": "@vue/vue2-jest",
    "^.+\\.js$": "babel-jest",
  },
  "moduleNameMapper": {
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: ['/node_modules/(?!vuetify)'],

  verbose: true,
  testEnvironment: "jsdom",
};

module.exports = config;
