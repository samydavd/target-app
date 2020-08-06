const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');

let publicPath = '/';

if (mix.inProduction()) {
    publicPath = '/public/';   
}

mix.webpackConfig({
    output: {
       publicPath: publicPath,
       chunkFilename: 'app/[name].[chunkhash].js',
       filename: '[name].js',
    },
    resolve:{
       extensions: ['.js', '.vue'],
       alias: {
           'root': path.join(__dirname, ''),
           '_app': path.join(__dirname, 'resources/js/app'),
           '_components': path.join(__dirname, 'resources/js/components'),
           '_routes': path.join(__dirname, 'resources/js/routes'),
           '_public': path.join(__dirname, 'public')
       },
    },
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()) {
    console.log("============================");
    console.log("=== WE ARE IN PRODUCTION ===");
    console.log("============================");
    console.log('');

    mix.version();
}