export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hamza Solutions',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hamza provides high quality software solutions for individuals and enterprises.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo-2.png' },
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/particles.js', mode: 'client'},
    {src: '@/plugins/swiper.js', mode: 'client'},
    {src: '@/plugins/element-ui.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    scrollBehavior: (to, from, savedPosition) => {
      // Check if there is a saved position
      if (savedPosition) {
        // Return the saved position
        return savedPosition;
      } else if (to.hash) {
        // Scroll to the element with the anchor ID
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ selector: to.hash });
          }, 100); // Adjust the delay if needed
        });
      } else {
        // Scroll to the top of the page
        return { x: 0, y: 0 };
      }
    },
    beforeEach: ((to, from, next) => {
      // Check if the current route has a hash
      if (from.hash) {
        // Remove the hash from the URL
        next({ path: to.path, query: to.query });
      } else {
        next();
      }
    })
  },

}
