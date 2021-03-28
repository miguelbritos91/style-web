import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  server: {
    port: 3000
  },
  env: {
    // baseUrl: 'https://localhost:3000',
    baseUrl: 'https://style-web.net',
    mailServer: 'styleweb.net@gmail.com'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - style-web',
    title: 'style-web',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Rubik:wght@900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    // Configuración de servidor SMTP para envio de e-mail
    ['nuxt-mail', {
      smtp: {
        service: 'Gmail',
        auth: {
          user: 'styleweb.net@gmail.com',
          pass: 'Mateo21@17'
        }
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    // language: String, // Recaptcha language (v2)
    siteKey: '6Lf50ZEaAAAAAN5vS_thTVvpOFl8YUZTgbhJTIt4',
    version: 3, // Version
    size: 'normal' // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
