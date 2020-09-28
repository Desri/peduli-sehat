import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'},

    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#008080' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style.scss'
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/mixins/validation',
    '~/plugins/global',
    '~/plugins/axios',
    '~/plugins/mixins/user',
    '~/plugins/vue-scrollto',
    { src: '~plugins/ant.js'},
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '', method: 'post', propertyName: 'token'
          },
          user: {
            url: '', method: 'get', propertyName: false
          },
          logout: {
            url: '', method: 'get'
          },
        }
      }
    },
    redirect: {
      login: '/login',
      home: '/'
    },
    plugins: [
      '~/plugins/auth'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'vue-sweetalert2/nuxt',
  ],

  axios: {
    baseURL: '',
    proxyHeaders: false,
    credentials: false,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
