module.exports = {
  head: {
    title: 'Прежде чем умру, я ...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Анонимные размышления о смысле жизни' }
    ],
    link: [
      { rel: 'icom', type: 'image/x-icon', herf: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "57x57", href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: "60x60", href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: "72x72", href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: "114x114", href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: "144x144", href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: "image/png", href: '/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: "image/png", sizes: "96x96", href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon/favicon-16x16.png' },
      { rel: 'stylesheet', href: '/assets/css/main.css'}
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'featured'
  }
}

