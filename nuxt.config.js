export default {
  head: {
    titleTemplate: 'Méline Querré',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },

      { hid: 'description', name: 'description', content: 'Portfolio de Méline Querré' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  css: [
    '@assets/scss/main.scss'
  ]
}
