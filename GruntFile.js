module.exports = function  (grunt) {
	grunt.initConfig({

		stylus : {
			compile : {
				
				options : {
					compress : false,
				},
				files :  {
					"build/css/styles.css" : "app/styles/themes/styles.styl",

					// "build/css/carot.css" : "app/styles/themes/carot.styl",
					// "build/css/peter.css" : "app/styles/themes/peter.styl",
					// "build/css/emerald.css" : "app/styles/themes/emerald.styl",
					// "build/css/alizarin.css" : "app/styles/themes/alizarin.styl",
					// "build/css/Dionysus-Bright-4.css" : "app/styles/themes/Dionysus-Bright-4.styl",
					// "build/css/Dragomir-2.css" : "app/styles/themes/Dragomir-2.styl",
					// "build/css/wet-asphalt.css" : "app/styles/themes/wet-asphalt.styl",

				}

			}
		},
		autoprefixer: {
            dist: {
                files: {
                    // 'build/cs/styles.css' : 'build/css/styles.css',
                    // 'build/css/red.css': 'build/red.css'
                }
            }
        },

        // uglify css and beatuify
	      cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'build/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'build/',
		      ext: '.min.css'
		    }]
		  }
		},
		jade : {
			compile : {
				files : {
					// "build/demo.html" : "app/controllers/demopage.jade",
					// "build/index.html" : "app/controllers/home/home-layout/index1.jade",
					// "build/home-revolution-slider.html" : "app/controllers/home/home-layout/home-revolution.jade",

					// "build/one-page-version.html" : "app/controllers/themes/onepageversion/one-page-version.jade",

					// // - ========themes========
					// //- ===envision===CONSTRUCTION
					// "build/cons_envisionvegas.html" : "app/controllers/themes/construction/envision/vegasbg/construction.jade",
					// "build/cons_envisionstatic.html" : "app/controllers/themes/construction/envision/staticbg/construction.jade",
					// "build/cons_envisionowl.html" : "app/controllers/themes/construction/envision/owlbg/construction.jade",

					// // ===enthink===CONSTRUCTION
					// "build/cons_enthinkvegas.html" : "app/controllers/themes/construction/enthink/vegasbg/construction.jade",
					// "build/cons_enthinkstatic.html" : "app/controllers/themes/construction/enthink/staticbg/construction.jade",
					// "build/cons_enthinkowl.html" : "app/controllers/themes/construction/enthink/owlbg/construction.jade",

					// ===MAKUTRAVEL===TRAVEL
					// "build/travel_makutravelvegas.html" : "app/controllers/themes/travel/makutravel/vegasbg/travel.jade",
					// "build/travel_makutravelstatic.html" : "app/controllers/themes/travel/makutravel/staticbg/travel.jade",
					// "build/travel_makutravelowl.html" : "app/controllers/themes/travel/makutravel/owlbg/travel.jade",

					// <===COOKING===>
					// "build/cooking_index.html" : "app/controllers/themes/cooking/cooking1/vegasbg/cooking.jade",

					// <===APPBOX===>
					"build/appbox_index.html" : "app/controllers/themes/app/appbox/vegasbg/appbox_index.jade",

					// // - theme photography
					// "build/photography.html" : "app/controllers/photography/photography1.jade",
					// "build/photography-bg-video.html" : "app/controllers/photography/photography-video.jade",
					// "build/photography-bg-img.html" : "app/controllers/photography/photography-img.jade",
					// "build/medical.html" : "app/controllers/themes/madical/madical.jade",

				
					// // - theme commingsoon
					// "build/commingsoon0.html" : "app/controllers/themes/commingsoon/commingsoon0.jade",
					// "build/commingsoon1.html" : "app/controllers/themes/commingsoon/commingsoon1.jade",
					// "build/commingsoon2.html" : "app/controllers/themes/commingsoon/commingsoon2.jade",
					// "build/commingsoon3.html" : "app/controllers/themes/commingsoon/commingsoon3.jade",
					// "build/commingsoon4.html" : "app/controllers/themes/commingsoon/commingsoon4.jade",
					// "build/commingsoon5.html" : "app/controllers/themes/commingsoon/commingsoon5.jade",
					// "build/commingsoon6.html" : "app/controllers/themes/commingsoon/commingsoon6.jade",
					// "build/commingsoon7.html" : "app/controllers/themes/commingsoon/commingsoon7.jade",
					// "build/commingsoon8.html" : "app/controllers/themes/commingsoon/commingsoon8.jade",
					// "build/commingsoon9.html" : "app/controllers/themes/commingsoon/commingsoon9.jade",

					// // - components
					
					// "build/typography.html" : "app/controllers/components/typography/typography.jade",
					// "build/buttons.html" : "app/controllers/components/buttons/buttons.jade",
					// "build/brands.html" : "app/controllers/components/brands/brands.jade",
					// "build/forms.html" : "app/controllers/components/forms/form.jade",
					// "build/pricestable.html" : "app/controllers/components/prices-table/price-table.jade",
					// "build/dividers.html" : "app/controllers/components/dividers/dividers.jade",
					// "build/progresbars.html" : "app/controllers/components/progress-bar/progress-bar.jade",
					// "build/counters.html" : "app/controllers/components/counters/counters.jade",
					// "build/callouts.html" : "app/controllers/components/call-outs/call-out.jade",
					// "build/collapse.html" : "app/controllers/components/collapse/collapse.jade",
					// "build/modals.html" : "app/controllers/components/modals/modals.jade",
					// "build/iconbox.html" : "app/controllers/components/iconbox/iconbox.jade",
					// "build/pagination.html" : "app/controllers/components/pagination/pagination.jade",
					// "build/tabs.html" : "app/controllers/components/tabs/tabs.jade",
					// "build/charts.html" : "app/controllers/components/charts/charts.jade",
					// "build/image-boxs.html" : "app/controllers/components/imgboxs/imgbox.jade",

					// "build/blog3-column.html" : "app/controllers/blog/blog.jade",
					// "build/blog2-column.html" : "app/controllers/blog/blog-2-column.jade",
					// "build/blog-post.html" : "app/controllers/blog/blog-detail.jade",
					// "build/blog-right-sidebar.html" : "app/controllers/blog/blog-right-sidebar.jade",
					// "build/blog-left-sidebar.html" : "app/controllers/blog/blog-left-sidebar.jade",
					// "build/blog-detail-post.html" : "app/controllers/blog/blog-detail-post.jade",

					
					// "build/home-blog-layout1.html" : "app/controllers/home/home-blog/blog-layout1.jade",
					// "build/home-blog-layout2.html" : "app/controllers/home/home-blog/blog-layout2.jade",


					// "build/footer1.html" : "app/controllers/footers/footer1.jade",
					// "build/footer2.html" : "app/controllers/footers/footer2.jade",
					// "build/footer3.html" : "app/controllers/footers/footer3.jade",
					// "build/footer4.html" : "app/controllers/footers/footer4.jade",
					// "build/footer5.html" : "app/controllers/footers/footer5.jade",

					
					// "build/revolution-slider.html" : "app/controllers/features/rslider/rslider1.jade",
					// "build/vegas-slider.html" : "app/controllers/features/rslider/vslider1.jade",

					// "build/navbar-dark-version.html" : "app/controllers/features/header/navbar-dark-version.jade",
					// "build/navbar-white-version.html" : "app/controllers/features/header/navbar-white-version.jade",
					
					// "build/page-titles-header.html" : "app/controllers/features/page-titles/page-titles.jade",
					
					// "build/font-awesome-icons.html" : "app/controllers/features/icons/fontawesome-icons.jade",
					// "build/ghylificons-icons.html" : "app/controllers/features/icons/ghylificons.jade",

					// "build/gallery-option1.html" : "app/controllers/features/portfolio/home-portfolio-layout-1.jade",
					// "build/gallery-option2.html" : "app/controllers/features/portfolio/home-portfolio-layout-2.jade",
					// "build/gallery-option3.html" : "app/controllers/features/portfolio/home-portfolio-layout-3.jade",
					// "build/gallery-option4.html" : "app/controllers/features/portfolio/home-portfolio-layout-4.jade",

					//- pages

					// "build/about-us-1.html" : "app/controllers/features/about-us/about-us1.jade",
					// "build/about-us-2.html" : "app/controllers/features/about-us/about-us2.jade",

					// "build/services-1.html" : "app/controllers/pages/services/services-1.jade",
					// "build/services-2.html" : "app/controllers/pages/services/services-2.jade",
					// "build/services-3.html" : "app/controllers/pages/services/services-3.jade",

					// "build/error1.html" : "app/controllers/pages/error-pages/error1.jade",
					// "build/error2.html" : "app/controllers/pages/error-pages/error2.jade",

					// "build/ourteam1.html" : "app/controllers/pages/ourteam/ourteam1.jade",
					// "build/ourteam2.html" : "app/controllers/pages/ourteam/ourteam2.jade",
					// "build/ourteam3.html" : "app/controllers/pages/ourteam/ourteam3.jade",

					// "build/pricing-table1.html" : "app/controllers/pages/prices-table/prices1.jade",
					// "build/pricing-table2.html" : "app/controllers/pages/prices-table/prices2.jade",

					// "build/contact-forms1.html" : "app/controllers/pages/contact-forms/contact-form1.jade",
					// "build/contact-forms2.html" : "app/controllers/pages/contact-forms/contact-form2.jade",




					// "build/contact-forms.html" : "app/controllers/contacts-forms/contact-us.jade",

					// "build/portfolio-grid-2-column.html" : "app/controllers/portfolio/portfolio-grid-2colum.jade",
					// "build/portfolio-grid-3-column.html" : "app/controllers/portfolio/portfolio-3-column-grid.jade",
					// "build/portfolio-grid-4-column.html" : "app/controllers/portfolio/portfolio-4-column-grid.jade",
					
					// "build/portfolio-grid-2-column-fullwidth.html" : "app/controllers/portfolio/portfolio-grid-fullwidth/portfolio-2-column-spacefullwidth.jade",
					// "build/portfolio-grid-3-column-fullwidth.html" : "app/controllers/portfolio/portfolio-grid-fullwidth/portfolio-3-column-spacefullwidth.jade",
					// "build/portfolio-grid-4-column-fullwidth.html" : "app/controllers/portfolio/portfolio-grid-fullwidth/portfolio-4-column-spacefullwidth.jade",
					// "build/portfolio-grid-5-column-fullwidth.html" : "app/controllers/portfolio/portfolio-grid-fullwidth/portfolio-5-column-spacefullwidth.jade",
					
					// "build/portfolio-2-column-nospaceboxed.html" : "app/controllers/portfolio/portfolio-nospaceboxed/portfolio-2-column-nospaceboxed.jade",
					// "build/portfolio-3-column-nospaceboxed.html" : "app/controllers/portfolio/portfolio-nospaceboxed/portfolio-3-column-nospaceboxed.jade",
					// "build/portfolio-4-column-nospaceboxed.html" : "app/controllers/portfolio/portfolio-nospaceboxed/portfolio-4-column-nospaceboxed.jade",


					// "build/portfolio-2-column-nospacefullwidth.html" : "app/controllers/portfolio/portfolio-nospacefullwidth/portfolio-2-column-nospacefullwidth.jade",
					// "build/portfolio-3-column-nospacefullwidth.html" : "app/controllers/portfolio/portfolio-nospacefullwidth/portfolio-3-column-nospacefullwidth.jade",
					// "build/portfolio-4-column-nospacefullwidth.html" : "app/controllers/portfolio/portfolio-nospacefullwidth/portfolio-4-column-nospacefullwidth.jade",


					// "build/loginform1.html" : "app/controllers/features/login-signup-forms/loginform1.jade",
					// "build/loginform2.html" : "app/controllers/features/login-signup-forms/loginform2.jade",
					// "build/loginform3.html" : "app/controllers/features/login-signup-forms/loginform3.jade",
					// "build/signupform1.html" : "app/controllers/features/login-signup-forms/signupform1.jade",
				},
				options : {
					pretty : true,
				}
			}
		},

		copy : {
			main : {
				files : [
					{
						expand : true,
						cwd : "node_modules/bootstrap/dist/",
						src : ["**/*"],
						dest : "build/frameworks/bootstrap/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/jquery/dist/",
						src : ["jquery.js", "jquery.min.js"],
						dest : "build/frameworks/jquery/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/font-awesome/css/",
						src : ["**/*"],
						dest : "build/frameworks/font-awesome/",
						filter : "isFile",
					},
					

				]
			}
		},

		watch : {
			options : {
				spawn : false, 
			},
			css : {
				files : ["app/**/*.styl", "framework/**/*.styl"],
				tasks : "stylus",
			},

			jade: {
				files : ["app/**/*.jade", "framework/**/*.jade"],
				tasks  :"jade",
			},
		},
		prettify: {
		  options: {
		    // config: '.prettifyrc'
		  },
		  // Prettify a directory of files 
		  all: {
		    expand: true,
		    cwd: 'build/',
		    ext: '.html',
		    src: ['*.html'],
		    dest: 'build/'
		  },
		  // Or prettify one file at a time using the "files object" format 
		  // files: {
		  //   'pretty/index.html': ['ugly/index.html']
		  // },
		  // Or the "compact" src-dest format 
		  // one: {
		  //   src: 'test/actual/ugly/index.html',
		  //   dest: 'test/actual/pretty/index.html'
		  // }
		}

	});

	grunt.registerTask('build', ['stylus', 'jade', 'autoprefixer', 'prettify', 'copy']);


	grunt.loadNpmTasks("grunt-contrib-stylus");
	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}