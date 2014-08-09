module.exports = function(grunt){

  var debowerify = require("debowerify");

  // gruntのNPMをロード
  require("jit-grunt")(grunt);

  grunt.config.init({

    sass : {
      pc : {
        options : {
          sourcemap : true
        },
        files : [{
          expand : true,
          cwd    : "sass",
          src    : ["*.scss"],
          dest   : "css",
          ext    : ".css"
        }]
      }
    },

    autoprefixer : {
      pc : {
        options : {
          map      : true,
          browsers : ["last 3 versions", "ie 8"]          
        },
        src : "css/trunk-*.css"
      }
    },

    browserify: {
      options: {
        transform: ["debowerify"]
      },
      dist: {
        src: "js/script.js",
        dest: "js/out-script.js"
      }
    },

    watch : {

      js : {
        files : ["js/script.js"],
        tasks : ["browserify"]
      },

      css : {
        files : ["sass/*.scss"],
        tasks : ["sass:pc", "autoprefixer:pc"]
      }

    }
  });

};