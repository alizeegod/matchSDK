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
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var revhash = require('gulp-asset-rev-hash');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var pwd = __dirname; 

// gulp --env=pro 压缩代码，直接执行gulp，不压缩代码
var argv = require('minimist')(process.argv.slice(2));
// var config = require('./config.json');
console.log(argv)
var rootPath = __dirname; 

var vendorPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor', 
    filename: 'vendor.min.js', 
    minChunks: Infinity,
});
var webpackConfig = {
    entry: {
        match: './src/app.js',
        vendor: ['Vue','jQuery']
    },
    output: {
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel',
            include: path.join(rootPath, './src'),
            exclude: path.join(rootPath, '../node_modules/'),
            query: {presets:['es2015']} 
        },
        {
            test: /.vue$/,
            loader: 'vue'
        },{
            test: /\.(png|jpg)$/, loader: 'url-loader'
        }]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader')
        }
    },
    plugins: [
    	vendorPlugin, 
    	new ExtractTextPlugin("../css/match.min.css", {
	        allChunks: true,
	    }),
        new HtmlWebpackPlugin({
            filename: 'index.html',// 生成html存放路径，相对path
            template: './src/index.html',//html模版路径
            hash: true //生成版本
        })
    ],
    // resolve: {
    //     extensions: ['', '.js', '.json'],
    //     alias: {
    //         'Vue': pwd + '/src/js/lib/vue.min.js',
    //         'jQuery': pwd + '/src/js/lib/jquery.min.js',
    //     }
    // },
};

// gulp.task('rev', function () {
//     gulp.src('./index.html')
//         .pipe(rev())
//         .pipe(gulp.dest('./dist/'));
// });

// gulp.task('revhash', function () {
//   gulp.src('./index.html')
//     .pipe(rev({
//       assetsGetter: function (filePath) {
//         return filePath.replace('/dist/css', 'src/css')
//       },
//       hashLength: 16,
//       hashArgName: 'h',
//       removeTags: 0,
//       usePale: true
//     }))
//     .pipe(gulp.dest('./dist/'));
// });

gulp.task('clean', function() {
    return gulp
        .src(['./dist/*'], { read: false })
        .pipe(clean({ force: true }))
});

gulp.task('js', function() {
    if (argv.env === 'pro') {
        webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }));
    }
    return gulp
        .src('./src/app.js')
        .pipe(gulpWebpack(webpackConfig))
        // .pipe(gulpIf(argv.env == 'pro', header(banner, { config: config })))
        // .pipe(uglify())
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

// gulp.task('default', ['build']);
