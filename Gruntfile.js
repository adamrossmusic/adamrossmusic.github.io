'use strict';module.exports = function (grunt) {    grunt.loadNpmTasks('grunt-contrib-less');    grunt.loadNpmTasks('grunt-contrib-connect');    grunt.initConfig({        less: {            all: {                options: {                },                files: {                    'styles/desktop.css': 'styles/desktop/desktop.less',                    'styles/mobile.css': 'styles/mobile/mobile.less'                }            }        },        connect: {            options: {                port: 9999,                hostname: '0.0.0.0',                keepalive: true            },            all: {}        },        open: {            server: {                url: 'http://localhost:9999'            }        }    });    grunt.registerTask('proto', [        'less',        'connect'    ]);};