module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
		 	dist: {
		 		files: [{
		 			expand: true,
		 			cwd: 'source/css/',
		 			src: 'main.scss',
		 			dest: 'assets/css',
		 			ext: '.css'
		 		}]
		 	}
		},

		htmlmin: {
			options: {
        removeComments: true,
        collapseWhitespace: true
    	},
    	files: {
    		expand: true,
    		cwd: 	'source/',
    		src: 	'*.html',
    		dest: 'assets/'
    	}
		}

	});


 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-htmlmin');

 grunt.registerTask('default', [ 'sass', 'htmlmin' ]);
}
