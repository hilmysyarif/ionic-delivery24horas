# Aplicativo Delivery 24 horas

[Site do aplicativo](http://ionic.delivery24horas.com)

### Quick start
There's only a few steps you have to do in order to run the application. It implies you have installed all necessary tools for building Ionic project (android/ios sdk, ionic, cordova, node, git ...) which is not covered in this topic. Also, you have to be in root project directory when executing the following commands.

***Clone git repository***
```javascript
$ git clone https://github.com/lucianobapo/ionic-delivery24horas.git
```

***Install dependencies***
```javascript
$ npm install
$ gulp install
```

*```npm install```* command installs all dependencies listed in *package.json* file, required for runnung Gulp tasks.

*```gulp install```* command installs ionic javascript files and it's dependencies (angular scripts) from repository listed in *bower.json* file. This way we don't have to manually download and include all ionic scripts in the project, but only point to Ionic github repository. Gulp task will take care for the rest.

***Add platform***
```javascript
$ ionic platform add android/ios
```

***Build application***
```javascript
$ ionic build android/ios [--production]
```

*--production* flag means that application will be shipped with minified and uglified javascript/css assets and optimized for production. Unnecessary files will be deleted and excluded from executable file (.apk/.ipa) so the application will be smaller size when uploading on Google play and Apple store. Also, the app version will be automatically increased by one (only the patch number e.g. 0.0.1 --> 0.0.2).

***Run application in browser***
```javascript
$ ionic serve [--nolivereload]
```

*--nolivereload* flag disables browser to be reloaded after every change made in the code. This helps Gulp *watch* task to build and bundle all assets into single file but you'll have to reload browser manually.