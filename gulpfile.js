'use strict';
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var header = require('gulp-header');
var clean = require('gulp-clean');
var gulpIf = require('gulp-if');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minimist = require('minimist');
var gutil = require("gulp-util");
var rev = require('gulp-rev-hash');
var path = require('path');


var pwd = __dirname; 

// gulp --env=pro 压缩代码，直接执行gulp，不压缩代码
var argv = require('minimist')(process.argv.slice(2));
// var config = require('./config.json');

var rootPath = __dirname; 

// var vendorPlugin = new webpack.optimize.CommonsChunkPlugin({
//     name: 'vendor', 
//     filename: 'vendor.min.js',
//     minChunks: Infinity,
// });
var webpackConfig = {
    entry: {
        match: './src/app.js',
        iscroll: './src/js/iscroll-lite.js',
        // vendor: [
        //     pwd + './src/js/iscroll-lite.js',
        // ]
    },
    output: {
        // path: path.join(__dirname, '/dist'),
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel',
            include: path.join(rootPath, './src'),
            exclude: path.join(rootPath, '../node_modules/'),
            query: {presets:['es2015']} 
        },{ 
            test: /\.css$/, loader: "style-loader!css-loader" 
        },{
            test: /.vue$/,
            loader: 'vue'
        },{
            test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=dist/images/[name].[ext]'
        }]
    },
    // plugins: [vendorPlugin],
    // resolve: {
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         'iscroll': pwd + '/src/js/iscroll-lite.js'
    //     }
    // },
};

gulp.task('clean', function() {
    return gulp
        .src(['./dist/*'], { read: false })
        .pipe(clean({ force: true }))
});

gulp.task('js', function() {
    if (argv.env === 'pro') {
        webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }));
    }
    return gulp
        .src('./src/app.js')
        .pipe(gulpWebpack(webpackConfig))
        // .pipe(gulpIf(argv.env == 'pro', header(banner, { config: config })))
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('css', function() {
    return gulp
        .src('./src/css/*.css')
        .pipe(concat('all.js'))
        .pipe(gulpIf(argv.env == 'pro', minifyCss()))
        // .pipe(gulpIf(argv.env == 'pro', header(banner, { config: config })))
        .pipe(rename('match.min.css'))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('img', function() {
    return gulp
        .src('./src/images/*')
        .pipe(gulp.dest('./dist/images/'))
})



gulp.task('watch', function() {
    webpackConfig.watch = argv.env != 'pro';
    gulp.start('js', 'css', 'img' );
    gulp.watch('./src/css/*', ['css']);
    gulp.watch('./src/images/*', ['img']);
})

gulp.task('build', ['js', 'css', 'img']);


