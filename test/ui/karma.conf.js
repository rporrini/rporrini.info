module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      '*.js'
    ],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['Firefox'],
    singleRun: true
  });
};
