module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {pattern: 'compiled/src/lang.js', included: false},
      {pattern: 'compiled/src/lang.en.js', included: false},
      {pattern: 'compiled/src/lang.fi.js', included: false},
      {pattern: 'compiled/src/lang.nl.js', included: false},
      {pattern: 'compiled/src/lang.ru.js', included: false},
      {pattern: 'compiled/src/word.js', included: false},
      {pattern: 'compiled/spec/wordtree.spec.js', included: false},
      'compiled/spec/main.js'
    ],
    exclude: [
    ],
    reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    //browsers: ['Firefox'],
    browsers: ['PhantomJS'],
    captureTimeout: 20000,
    //singleRun: false,
    singleRun: true,
    reportSlowerThan: 500,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-requirejs'
    ]
  });
};