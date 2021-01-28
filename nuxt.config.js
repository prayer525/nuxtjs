const webpack = require("webpack");

export default {
	// deploy target : static's for the Github.io
	target: 'static',
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'mtn-mobile',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'primeicons/primeicons.css',
		'prismjs/themes/prism-coy.css',
		'assets/layout/layout.scss',
		'assets/layout/flags/flags.css',
		'vue-slick-carousel/dist/vue-slick-carousel.css'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: './plugins/vue-slick-carousel.js' }
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: [
		'~/components'
	],

	// Server's root directory
	router: {
    base: '/JS/study/mtn/'
  },

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		baseURL: 'https://jsonplaceholder.typicode.com'
	},

	dist: {
		options: {
				compact: false
		}
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		/**
     * add external plugins
     */
		publicPath: '/nuxt/',
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ]
	},
}
