module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    title: 'hello-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https:://fonts.googleleapis.com/css?family=M+PLUS+1p'
      }
    ]
  },
  plugins: [
    { src: "@/plugins/element-ui", ssr: false },
    { src: "@/plugins/filters.js", ssr: false}
  ],
  css: ["element-ui/lib/theme-chalk/index.css"],
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vender: ["axios", "element-ui", "dayjs"],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader") {
          rule.exclude = /node_modules/;
        }
        return rule;
      });
    }
  }
};

