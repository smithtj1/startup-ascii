module.exports = function(grunt) {

  var newfilename = '.tmp/img/js/images.js'

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    'string-replace': {
      dist: {
        src: './src/*.js',
        dest: 'startup-ascii.js',
        options: {
          replacements: [{
            pattern: 'IMAGE_FUNCTIONS',
            replacement: function(){
              return grunt.file.read(newfilename);
            }
          }]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-string-replace');


  grunt.registerTask('create-image-function-file', 'A task to parse thru text files and make them js files', function() {

    var contents = '';
    
    grunt.file.recurse('src/img', function callback(abspath, rootdir, subdir, filename) {

      if(filename.indexOf('.txt') > -1){
        console.log('reading: ' + abspath);

        contents = contents + filename.split('.')[0] + ': function(){';
        contents = contents + 'console.log(\'';
        
        var end = '\n\'' + '); }, \n';

        var img = grunt.file.read(abspath);
        var lines = img.split('\n');  

        lines.forEach(function(l){
          contents = contents + l + '\\';
        });

        contents = contents + end;
      }

    });

    console.log('writing: ' + newfilename);
    grunt.file.write(newfilename, contents);
    
  });

  grunt.registerTask('default', ['create-image-function-file', 'string-replace']);

};