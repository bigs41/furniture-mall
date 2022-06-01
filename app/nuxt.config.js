module.exports = {
    ssr: false,
    /*
     ** Headers of the page
     */
    env: {
        CI_COMMIT_REF_NAME: process.env.CI_COMMIT_REF_NAME
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - tnuxt',
        title: 'tnuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3', crossorigin: 'anonymous' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css' },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Kanit&display=swap", },
            { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },

        ],
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js',
                type: 'text/javascript'
            },

            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' },
            { src: 'https://cdn.socket.io/4.4.1/socket.io.min.js' },
            { src: 'https://api.longdo.com/map/?key=fa2027055ac687da46ba26d18eaef53a' },
            { src: 'https://api.longdo.com/address-form/js/addressform.js' },
        ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "assets/css/bootstrap-side-modals.css",
        "assets/css/variable.css",
        "assets/css/style.css",
        "assets/font/font_db_heaventt.css",
        "assets/css/progress-tracker.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins',
        '~/plugins/global',
        '~/plugins/i18n'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy', ['cookie-universal-nuxt', { alias: 'cookiz' }],
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        optionsPath: './vuetify.options.js',
        customVariables: ['~/assets/variables.scss'],

    },
    proxy: {
        '/api': 'http://127.0.0.1:8080'
    },
    server: {
        host: '0.0.0.0', // default: localhost
        port: 80
    },
    telemetry: false,
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    generate: {
        dir: process.env.NUXT_GENERATE_DIR || '../api/dist'
    },
}