export default {
    // buildModules: [, ], // ini baru ditambahin
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // For Build varcel
    generate: {
        dir: 'public' // Output directory default
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'senabung',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/tailwind.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/postcss8',
        '@nuxtjs/tailwindcss',
        // '@nuxtjs/ngrok',
        '~/modules/ngrok',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // dari nuxt js 2 auth
        '@nuxtjs/auth',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // Auth Axios
        '@nuxtjs/auth-next',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        // INTEGRASI API
        // baseURL: 'http://localhost:8080',
        baseURL: 'https://senabung.hotelmarisrangkas.com',
    },
    // Add Middleware
    // router: {
    //     middleware: ['auth']
    // },
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                    // required: true,
                    // type: 'Bearer'
                },
                user: {
                    property: 'data',
                    // autoFetch: true
                },
                endpoints: {
                    login: {
                        url: '/api/v1/sessions',
                        method: 'post',
                        propertyName: 'data.token',
                    },
                    logout: false,
                    register: {
                        url: '/api/v1/users',
                        method: 'post',
                        propertyName: 'data.token',
                    },
                    user: {
                        url: '/api/v1/users/fetch',
                        method: 'get',
                        propertyName: 'data',
                    },
                },
            },
        },
    },

    // ngrok: {
    //     // module options
    //     authtoken: '2jSnPzvbEAvhpWzqsc3ip3mZhGb_2Z4JgLg58GhfUbFHE6rtN',
    // },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
