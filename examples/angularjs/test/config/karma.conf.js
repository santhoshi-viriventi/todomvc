module.exports = function (config) {
                'use strict';

                config.set({
                                basePath: '../../',
                                frameworks: ['jasmine'],
                                files: [
                                                'node_modules/angular/angular.js',
                                                'node_modules/angular-route/angular-route.js',
                                                'node_modules/angular-mocks/angular-mocks.js',
                                                'js/**/*.js',
                                                'test/unit/**/*.js'
                                ],
                                autoWatch: false,
                                singleRun: true,
                                browsers: ['Chrome'],                 
                                reporters: ['coverage','junit'],
                                coverageReporter: {
            dir: 'test/coverage/',
            reporters: [
                {
                    type: 'lcovonly'
                },
                {
                    type: 'cobertura',subdir: '.', file: 'cobertura.xml'
                }
            ]
        },
                                        junitReporter : {
                                  outputFile: 'test/coverage/test-results.xml'
                                }

                });
};
