export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'model-agency',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
    'animate.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '~/plugins/vue-owl-carousel.js',
      mode: 'client'
    },
    {
      // https://github.com/lukaszflorczak/vue-agile#readme
      src: '~/plugins/vue-agile',
      mode: 'client'
    },

    {
      src: '~/plugins/ScrollTrigger.js',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxtjs/svg
    "@nuxtjs/svg",
    // https://www.npmjs.com/package/nuxt-gsap-module
    'nuxt-gsap-module',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  image: {
    // Options https://image.nuxtjs.org/getting-started/installation
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/poliweb/image/upload/Fashen/'
    }
  },
  googleFonts: {
    // https://google-fonts.nuxtjs.org/options
    families: {
      Roboto: true,
      Montserrat: true,
    },
    display: 'swap',
  },

  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  // GSAP module for Nuxt.js  https://github.com/ivodolenc/nuxt-gsap-module
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile']
  }
}
