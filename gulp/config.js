/*
 * Enviroment variables, and output directories
 */
var assets = './_assets/', 
    build = './_build/',
    root = './',
    env = 'dev',
    outputStyle = 'expanded';
/*
 * Update values based on environment
 */
if(env === 'live') {
    root = build;
    outputStyle = 'compressed';
    assets = build + '_assets/';
}
/*
 * Site url used for page insights
 */
var url = 'http://www.google.com';
/*
 * Resource paths
 */
var paths = {
      scss: {
        src: assets + 'css/scss',
        dest: assets + 'css',
        outputStyle: outputStyle
      },
      js: {
        src: assets + 'js',
        dest: assets + 'js/dist',
        hint:  assets + 'js/script.js'
      },
      sprites: {  
        data: assets + 'images/sprites/*.png',
        spriteName: 'sprite.png',
        cssName: '_sprites.scss',
        imgPath: '../images/sprite.png',
        spriteDataImg: assets + 'images',
        spriteDataCss: assets + 'css/scss/gulp/'
      },
      svg: {
        src: assets + 'images/svg/*.svg',
        dest: assets,
        css: 'css/scss/gulp/_svg-sprites.scss',
        sprite: 'images/svg-sprite.svg',
        template: assets + 'css/scss/_tpl/_sprite-template.scss'
      },
      images: {
        src: assets + 'images/site/*',
        dest: assets + 'images'
      },
      html: {
        src: root + '**/*.html',
        build: assets + 'templates/dest/*.html',
        dest: root
      },
      haml: {
        src: assets + 'templates/source/**/*.haml',
        dest: assets + 'templates/dest/',
        partials: assets + 'templates/dest/patterns'
      },
      icons: {
        src: assets + 'images/icons/*.svg',
        dest: assets + 'fonts/',
        name: 'icon-font',
        path: assets + 'css/scss/_tpl/_icon-font-template.scss',
        targetPath: '../css/scss/gulp/_icon-font.scss',
        fontPath: '../fonts/'
      }
    };
/*
 * Autoprefix browser suppport
 */
var AUTOPREFIXER_BROWSERS = [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10' 
    ];
/*
 * module exports
 * variables used by gulp tasks, see the tasks folder
 */
module.exports = {

  browserSync: {
    
    proxy: 'dev.mudstone',
    notify: false
  },

  sass: {
    src: paths.scss.src + '/style.scss',
    dest: paths.scss.dest,
    prefix: AUTOPREFIXER_BROWSERS,
    watch: paths.scss.src + '/**/*.scss',
    options: {
      outputStyle: paths.scss.outputStyle
    },
    output: 'style.min.css'
  },

  images: {
    src: paths.images.src,
    dest: paths.images.dest
  },

  scripts: {
    src: [
      paths.js.src + '/libs/jquery-1.10.2.min.js',
      paths.js.src + '/plugins.js',
      paths.js.src + '/script.js'
    ],
    dest: paths.js.dest,
    output: 'app.js',
    hint: paths.js.hint
  },

  sprites: {
    data: paths.sprites.data,
    imgName: paths.sprites.spriteName,
    cssName: paths.sprites.cssName,
    imgPath: paths.sprites.imgPath,
    spriteDataImg: paths.sprites.spriteDataImg,
    spriteDataCss: paths.sprites.spriteDataCss
  },

  svg: {
    src: paths.svg.src,
    dest: paths.svg.dest,
    css: paths.svg.css,
    sprite: paths.svg.sprite,
    template: paths.svg.template
  },

  icons: {
    src: paths.icons.src,
    dest: paths.icons.dest,
    name: paths.icons.name,
    path: paths.icons.path,
    targetPath: paths.icons.targetPath,
    fontPath: paths.icons.fontPath
  },
  
  html: {
    src: paths.html.src,
    build: paths.html.build,
    dest: paths.html.dest
  },

  haml : {
    src: paths.haml.src,
    dest: paths.haml.dest,
    partials: paths.haml.partials
  },
  env: env,

  psi : {
    nokey: 'true',
    url: '',
    strategy: 'mobile',
  },

  uncss: {
    css: assets + 'css/style.css', 
    html: root + '**/*.html',
    dest: assets + 'css/dist'
  },

  cmq: {
    css: assets + 'css/style.css',
    dest: assets + 'css/dist'
  }

};
