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
		autoWatch: true,
		singleRun: false,
		browsers: ['Chrome', 'Firefox'],
		
		reporters: ['coverage', 'junit'],
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
            }
            
            junitReporter: {
            	
            		outputfile: 'test/coverage/test-results.xml'
            		}
            	

            
		
	});
};

